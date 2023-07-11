import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.cardContainer}>
      <div>
        <h2 className={style.title}>{name}</h2>
        <button
          className={style.botonX}
          onClick={() => {onClose(id);}}>X</button>
        <br />
        <NavLink to={`/detail/${id}`}>
          <img className={style.cardImage} src={image} alt={name} />
        </NavLink>
        <div className={style.cardContent}>
          <h2 className={style.cardTitle}>{"Especie: " + species}</h2>
          <h2 className={style.cardTitle}>{"Genero: " + gender}</h2>
          <button className={style.buttonFavorites} onClick={handleFavorite}>
            {isFav ? "💚" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
