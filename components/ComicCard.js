import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import ReactStars from 'react-stars';
// import { useAuth } from '../utils/context/authContext';

function ComicCard({ comicObj }) {
//   const { user } = useAuth();

  return (
    <Card className="card" style={{ width: '20rem', margin: '10px' }}>
      <Link href={`/Comic/${comicObj.id}`} passHref>
        <Card.Img variant="top" src={comicObj.thumbnail} alt={comicObj.title} style={{ height: '400px' }} />
      </Link>
      <Card.Body>
        <Card.Title>{comicObj.title}</Card.Title>
        <ReactStars value={comicObj.average_rating} edit={false} size={30} />
      </Card.Body>
    </Card>
  );
}

ComicCard.propTypes = {
  comicObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    average_rating: PropTypes.number,
  }).isRequired,
};

export default ComicCard;
