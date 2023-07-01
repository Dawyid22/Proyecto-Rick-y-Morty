import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  image,
  onClose,
  origin,
}) {
  return (
    <div className={style.cardContainer}>
      <div>
        <h2 className={style.title}>{name}</h2>
        <button
          className={style.botonX}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
        <br />
        <NavLink to={`/detail/${id}`}>
        <img className={style.cardImage} src={image} alt={name} />
        </NavLink>
        <div className={style.cardContent}>
          <h2 className={style.cardTitle}>{"Especie: " + species}</h2>
          <h2 className={style.cardTitle}>{"Genero: " + gender}</h2>

        </div>
      </div>
    </div>
  );
}
