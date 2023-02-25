/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import ComicCard from '../../components/ComicCard';
import { getSingleUser } from '../../utils/data/userData';
import { deleteUserComic } from '../../utils/data/userComicData';

export default function UserComics() {
  const [user, setUser] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getThisUser = () => {
    getSingleUser(id).then(setUser);
  };
  console.warn(user);

  const removeFromCollection = (click, comicId) => {
    click.preventDefault();
    deleteUserComic(comicId).then(() => router.push('/'));
  };

  useEffect(() => {
    getThisUser();
  }, []);

  return (
    <div>
      {/* <div className="d-flex flex-column">
        <img src={user.imageUrl} alt={user.lastName} />
      </div> */}
      <div className="text-white ms-5 details">
        <h2>
          {user.firstName + user.lastName}
        </h2>
      </div>
      <div>
        {user?.comics?.map((comic) => (
          <>
            <ComicCard key={comic.id} comicObj={comic} />
            <Button className="collection" onClick={(click) => removeFromCollection(click, comic.joined_comics[0].id)}>
              Remove from my Collection
            </Button>
          </>
        ))}
      </div>
    </div>
  );
}
