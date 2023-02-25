import { clientCredentials } from '../client';

const getReviews = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/reviews`, {
    method: 'GET',
    headers: {
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleReview = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/reviews/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        rating: data.rating,
        text: data.text,
        user: data.user,
        comic: data.comic,
      });
    })
    .catch((error) => reject(error));
});

const createReview = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/reviews`, {
    method: 'POST',
    body: JSON.stringify({
      rating: payload.rating,
      text: payload.text,
      user_id: payload.userId,
      comic_id: payload.comicId,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const updateReview = (review) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/reviews/${review.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      rating: review.rating,
      text: review.text,
      user_id: review.user.id,
      comic_id: review.comic.id,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteReview = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/reviews/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
};
