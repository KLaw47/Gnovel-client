import { clientCredentials } from '../client';

const createComicImage = (image) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/images`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: image.userId,
      comic_id: image.comicId,
      image: image.comicImage,
    }),
  })
    .catch((error) => reject(error));
});

const getImagesByComic = (comicId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/images?comic_id=${comicId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch((error) => reject(error));
});

const getImagesByUser = (userId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/images?user_id=${userId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch((error) => reject(error));
});

export {
  createComicImage,
  getImagesByComic,
  getImagesByUser,
};
