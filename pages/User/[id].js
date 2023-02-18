/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ComicCard from '../../components/ComicCard';
import { getSingleUser } from '../../utils/data/userData';

export default function UserComics() {
  const [user, setUser] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const getThisUser = () => {
    getSingleUser(id).then(setUser);
  };

  useEffect(() => {
    getThisUser();
  }, []);

  return (
    <div>
      <div className="d-flex flex-column">
        <img src={user.imageUrl} alt={user.lastName} />
      </div>
      <div className="text-white ms-5 details">
        <h2>
          {user.firstName + user.lastName}
        </h2>
      </div>
      <div>
        {user?.comics?.map((comic) => (
          <ComicCard key={comic.id} comicObj={comic} />
        ))}
      </div>
    </div>
  );
}
