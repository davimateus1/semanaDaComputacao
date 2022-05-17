import RickAndMorty from "../../assets/RickAndMorty.png";
import { Button } from "../../components/Button/Button";
import "./styles.css";

export const HomePage = () => {

  return (
    <div className="container">
      <img className="logo_rm" src={RickAndMorty} alt="Rick and Morty" />
      <h1 className="title_welcome">Bem-vindo ao universo de Rick e Morty</h1>
      <Button text="Ver personagens" route="/characters" />
    </div>
  );
};
