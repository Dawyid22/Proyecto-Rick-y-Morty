import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  function generateCards() {
    return characters.map((character) => (
      <Card
        key={character.id}
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        gender={character.gender}
        origin={character.origin.name}
        image={character.image}
        onClose={onClose}
      />
    ));
  }

  return <div className={style.wrapper}>{generateCards()}</div>;
}
