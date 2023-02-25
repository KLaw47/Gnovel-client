import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';

function ReviewCard({ reviewObj }) {
  const { user } = useAuth();
  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{reviewObj.text}</Card.Title>
        <ReactStars value={reviewObj.rating} edit={false} />
        {reviewObj.user.id === user?.id ? (
          <Link href={`/Review/edit/${reviewObj.id}`} passHref>
            <Button className="edit">EDIT</Button>
          </Link>
        ) : null}
      </Card.Body>
    </Card>
  );
}

ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    rating: PropTypes.number,
    user: PropTypes.number,
  }).isRequired,
};

export default ReviewCard;
