/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ImageCard from '../../components/ImageCard';
import { getImagesByComic } from '../../utils/data/imageData';

function ComicImagesView() {
  const [images, setImages] = useState([]);
  const router = useRouter();

  const getComicImages = () => {
    getImagesByComic(Number(router.query.id)).then(setImages);
  };

  useEffect(() => {
    getComicImages();
  }, []);
  console.warn(images);

  return (
    <>
      <div className="d-flex flex-wrap">
        {images.map((image) => (
          <ImageCard key={image.id} imageObj={image} onUpdate={getComicImages} />
        ))}
      </div>
    </>
  );
}

export default ComicImagesView;
