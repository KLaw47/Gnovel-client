import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { useAuth } from '../utils/context/authContext';

function ImageCard({ imageObj }) {
//   const { user } = useAuth();

  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Card.Img variant="top" src={`http://localhost:8000${imageObj.image}`} alt={imageObj.image} />
    </Card>
  );
}

ImageCard.propTypes = {
  imageObj: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    userId: PropTypes.number,
    comicId: PropTypes.number,
  }).isRequired,
};

export default ImageCard;
