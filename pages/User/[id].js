/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import ComicCard from '../../components/ComicCard';
import { getSingleUser } from '../../utils/data/userData';
import { deleteUserComic } from '../../utils/data/userComicData';
import { useAuth } from '../../utils/context/authContext';
import ImageCard from '../../components/ImageCard';
import { getImagesByUser } from '../../utils/data/imageData';

export default function UserComics() {
  const [user, setUser] = useState({});
  const [images, setImages] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const fUser = useAuth();

  const getThisUser = () => {
    getSingleUser(id).then(setUser);
    getImagesByUser(id).then(setImages);
  };

  const removeFromCollection = (click, comicId) => {
    click.preventDefault();
    deleteUserComic(comicId).then(() => router.push('/'));
  };

  useEffect(() => {
    getThisUser();
  }, [id]);

  return (
    <div>
      {/* <div className="d-flex flex-column">
        <img src={user.imageUrl} alt={user.lastName} />
      </div> */}
      <div className="user-title">
        <h2>
          {user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : ''}
        </h2>
      </div>
      <div className="user-comics">
        {user?.comics?.map((comic) => (
          <div key={comic.id}>
            <ComicCard comicObj={comic} />
            {user?.id === fUser.user.id ? (
              <Button key={comic.joined_comics[0].id} className="custom-btn" onClick={(click) => removeFromCollection(click, comic.joined_comics[0].id)}>
                Remove from my Collection
              </Button>
            ) : null}
          </div>
        ))}
      </div>
      <h2>Uploaded Images</h2>
      <div className="d-flex flex-wrap">
        {images.map((image) => (
          <ImageCard key={image.id} imageObj={image} onUpdate={getThisUser} />
        ))}
      </div>
    </div>
  );
}
