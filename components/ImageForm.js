import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { createComicImage } from '../utils/data/imageData';

function ImageForm() {
  const router = useRouter();
  const user = useAuth();
  const { id } = router.query;

  const [comicPic, setComicPic] = useState({
    image: '',
  });

  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  };

  const createComicImageString = (event) => {
    getBase64(event.target.files[0], (base64ImageString) => {
      // console.warn('Base64 of file is', base64ImageString);
      setComicPic(base64ImageString);
    });
  };

  return (
    <>
      <input type="file" id="game_image" onChange={createComicImageString} />
      <input type="hidden" name="game_id" value={id} />
      <Button
        className="custom-btn"
        onClick={(e) => {
          e.preventDefault();
          const image = {
            userId: user.user.id,
            comicId: id,
            comicImage: comicPic,
          };
          createComicImage(image)
            .then(() => {
              router.push('/');
            });
        }}
      >Upload
      </Button>
    </>
  );
}

export default ImageForm;
