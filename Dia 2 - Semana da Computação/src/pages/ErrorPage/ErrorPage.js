import RickAndMortyError from "../../assets/RickAndMortyError.png";
import { Button } from "../../components/Button/Button";
import "./styles.css";

export const ErrorPage = () => {
  return (
    <div className="container">
      <img
        className="logo_error"
        src={RickAndMortyError}
        alt="Rick and Morty"
      />
      <h1 className="title_error">Erro 404: Página não encontrada</h1>
      <Button text="Voltar ao início" route="/" />
    </div>
  );
};
