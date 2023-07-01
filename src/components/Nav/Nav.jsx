import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch}) => {

    const numRandom = () => {
        
    }
    
    return (
        <div >
            <button className={style.buttonHome}>
                <NavLink to="/home">Home</NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>
            <button className={style.buttonAbout}>
                <NavLink to="/About">About</NavLink>
            </button>
            <img className={style.img} src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty-768x432.png" alt=""/>
        </div>
    )
}

export default Nav