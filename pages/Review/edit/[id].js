import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleReview } from '../../../utils/data/reviewData';
import ReviewForm from '../../../components/ReviewForm';

export default function EditReview() {
  const [editRev, setEditRev] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleReview(id).then(setEditRev);
  }, [id]);

  return (
    <ReviewForm reviewObj={editRev} />
  );
}
