import { clientCredentials } from '../client';

const getComics = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comics`, {
    method: 'GET',
    headers: {
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleComic = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comics/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        image: data.image,
        reviews: data.reviews,
      });
    })
    .catch((error) => reject(error));
});

export {
  getComics,
  getSingleComic,
};
