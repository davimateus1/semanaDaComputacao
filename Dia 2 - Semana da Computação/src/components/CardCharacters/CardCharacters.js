import './styles.css'

export const CardCharacters = (props) => {
  return (
    <div className="card">
      <img className="character_img" src={props.image} alt={props.name} />
      <div>
        <h1 className="character_name">{props.name}</h1>
        <p className="character_infos">Status: {props.status}</p>
        <p className="character_infos">Specie: {props.species}</p>
        <p className="character_infos">Location: {props.location}</p>
      </div>
    </div>
  );
};
