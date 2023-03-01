import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';

function ReviewCard({ reviewObj }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const { user } = useAuth();
  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{reviewObj.user.firstName}</Card.Title>
        <ReactStars value={reviewObj.rating} edit={false} />
        {isExpanded ? (
          <Card.Text>{reviewObj.text}</Card.Text>
        ) : (
          <Card.Text>{reviewObj.text.substring(0, 100)}...</Card.Text>
        )}
        {reviewObj.user.id === user?.id ? (
          <Link href={`/Review/edit/${reviewObj.id}`} passHref>
            <Button className="custom-btn">EDIT</Button>
          </Link>
        ) : null}
        <Button className="custom-btn" onClick={toggleExpand}>
          {isExpanded ? 'Collapse' : 'Read More'}
        </Button>
      </Card.Body>
    </Card>
  );
}

ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    rating: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
    }),
  }).isRequired,
};

export default ReviewCard;
