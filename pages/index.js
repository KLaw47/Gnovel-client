import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import ComicCard from '../components/ComicCard';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { getComics } from '../utils/data/comicData';

function Home() {
  const [comics, setComics] = useState([]);
  const [filteredComics, setFilteredComics] = useState([]);

  const getAllTheComics = () => {
    getComics().then((comicArr) => {
      setComics(comicArr);
      setFilteredComics(comicArr);
    });
  };

  useEffect(() => {
    getAllTheComics();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <Search comics={comics} setFilteredComics={setFilteredComics} />
        <div className="d-flex flex-wrap">
          {filteredComics.map((comic) => (
            <ComicCard key={comic.id} comicObj={comic} onUpdate={getAllTheComics} />
          ))}
        </div>

      </div>
    </>
  );
}

export default Home;
