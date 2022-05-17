import RickAndMortyLogo from "../../assets/RickAndMortyLogo.png";
import { CardCharacters } from "../../components/CardCharacters/CardCharacters";

import { useEffect, useState } from "react";

import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";

import "./styles.css";

import { Loading } from "../../components/Loading/Loading";
import { Button } from "../../components/Button/Button";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then((response) => {
          setLoading(false);
          setCharacters(response.data.results);
        })
        .catch((error) => console.error(error));
    }, 1500);
  }, [count]);

  return (
    <div className="container">
      <img className="logo" src={RickAndMortyLogo} alt="Rick and Morty" />
      <Button text="Página inicial" icon={IoMdArrowRoundBack} route="/" />
      <div className="btn_pages">
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 1 ? true : false}
        >
          Prev
        </button>
        <button
          onClick={() => setCount(count + 1)}
          disabled={count === 43 ? true : false}
        >
          Next
        </button>
      </div>
      <div className="cards_container">
        {loading ? (
          <Loading />
        ) : (
          <>
            {characters.map((character) => (
              <CardCharacters
                name={character.name}
                key={character.id}
                image={character.image}
                status={character.status}
                species={character.species}
                location={character.location.name}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
