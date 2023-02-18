/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
import { getSingleComic } from '../../utils/data/comicData';
import ReviewCard from '../../components/ReviewCard';

export default function ViewComicDetail() {
  const [comicDetail, setComicDetail] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const getThisComic = () => {
    getSingleComic(id).then(setComicDetail);
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
        <div className="d-flex flex-wrap">
          {comicDetail?.reviews?.map((review) => (
            <ReviewCard key={review.id} reviewObj={review} onUpdate={getThisComic} />
          ))}
        </div>
      </div>
    </div>
  );
}
