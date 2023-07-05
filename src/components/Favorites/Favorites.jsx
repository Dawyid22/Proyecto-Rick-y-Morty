import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      {myFavorites?.map((fav) => (
          <Card
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
          />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
