// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
// import { getSingleReview } from '../../utils/data/reviewData';
// import { useRouter } from 'next/router';

// export default function ViewReviewDetail() {
//   const [reviewDetail, setReviewDetail] = useState({});
//   const router = useRouter();
//   const { id } = router.query;

//   const getReviewContent = () => {
//     getSingleReview(id).then(setReviewDetail);
//   };

//   useEffect(() => {
//     getReviewContent();
//   }, []);

//   return (
//     <div className="mt-5 d-flex flex-wrap">

//     </div>
//   );
// }
