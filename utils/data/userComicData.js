import { clientCredentials } from '../client';

const getUserComics = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/user_comics`, {
    method: 'GET',
    headers: {
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createUserComic = (userId, comicId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/user_comics`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: userId,
      comic_id: comicId,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteUserComic = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/user_comics/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getUserComics,
  createUserComic,
  deleteUserComic,
};
