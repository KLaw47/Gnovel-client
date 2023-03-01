/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { getSingleComic } from '../../utils/data/comicData';
import ReviewCard from '../../components/ReviewCard';
import { getSingleUser } from '../../utils/data/userData';
import { createUserComic } from '../../utils/data/userComicData';
import { useAuth } from '../../utils/context/authContext';

export default function ViewComicDetail() {
  const [comicDetail, setComicDetail] = useState({});
  const [userData, setUserData] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const getThisComic = () => {
    getSingleComic(id).then(setComicDetail);
    getSingleUser(user.id).then(setUserData);
  };

  const addToCollection = () => {
    createUserComic(user.id, id).then(() => router.push('/'));
  };

  useEffect(() => {
    getThisComic();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={comicDetail.thumbnail} alt={comicDetail.title} />
      </div>
      <div className="text-black ms-5 details">
        <h5>
          {comicDetail.title}
        </h5>
        <p>Description: {comicDetail.description}</p>
        {/* <Button className="collection" onClick={addToCollection}>
          Add to my Collection
        </Button> */}
        <>
          {userData?.comics?.find((comic) => comic.id === comicDetail.id) ? null : (
            <Button className="custom-btn" onClick={addToCollection}>Add to my Collection</Button>
          )}
        </>
        <>
          {comicDetail?.reviews?.find((review) => review.user.id === user.id) ? null : (
            <Link href={`/Review/${id}`} passHref>
              <Button className="custom-btn">Write a review for {comicDetail.title}</Button>
            </Link>
          )}
        </>
        <div className="d-flex flex-wrap">
          {comicDetail?.reviews?.map((review) => (
            <ReviewCard key={review.id} reviewObj={review} onUpdate={getThisComic} />
          ))}
        </div>
      </div>
    </div>
  );
}
