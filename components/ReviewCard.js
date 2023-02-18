import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ReviewCard({ reviewObj }) {
  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{reviewObj.text}</Card.Title>
        <p>{reviewObj.rating}</p>

      </Card.Body>
    </Card>
  );
}

ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default ReviewCard;
