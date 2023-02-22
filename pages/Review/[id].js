/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReviewForm from '../../components/ReviewForm';
// import { useAuth } from '../../utils/context/authContext';
import { getSingleComic } from '../../utils/data/comicData';
import ComicCard from '../../components/ComicCard';

export default function AddReview() {
  const router = useRouter();
  const { id } = router.query;
  // const { user } = useAuth();
  const [comic, setComic] = useState({});

  const getContent = () => {
    getSingleComic(id).then(setComic);
  };

  useEffect(() => {
    getContent();
  }, [id]);

  return (
    <>
      <ComicCard comicObj={comic} />
      <ReviewForm comicId={id} />
    </>
  );
}
