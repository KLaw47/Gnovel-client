/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import { FloatingLabel, Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { createReview, updateReview } from '../utils/data/reviewData';
import { useAuth } from '../utils/context/authContext';

const initialState = {
  text: '',
  rating: 0,
};

function ReviewForm({
  reviewObj,
}) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;

  const getContent = () => {
    if (reviewObj?.id) {
      setFormInput(reviewObj);
    }
  };

  useEffect(() => {
    getContent();
  }, [reviewObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRate = (e) => {
    const value = e;
    setFormInput((prevState) => ({
      ...prevState,
      rating: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewObj?.id) {
      updateReview(formInput)
        .then(() => router.push('/'));
    } else {
      const payload = {
        ...formInput,
        userId: user.id,
        // eslint-disable-next-line radix
        comicId: parseInt(id),
      };
      createReview(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-black mt-5">{reviewObj?.id ? 'Update' : 'Create'}Review</h2>
        <FloatingLabel controlId="floatingInput1" label="Review" className="mb-3">
          <Form.Control type="text" placeholder="Write your Review" name="text" value={formInput.text} onChange={handleChange} required className="mb-3" />
        </FloatingLabel>
        <div className="comic-rating">
          <h2>Rating</h2>
          <Rating
            allowHover={false}
            size={45}
            ratingValue={formInput.rating}
            onClick={handleRate}
          />
        </div>
        <Button className="create" type="submit">{reviewObj?.id ? 'Update' : 'Create'} Review</Button>
      </Form>
    </>
  );
}

export default ReviewForm;

ReviewForm.propTypes = {
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
