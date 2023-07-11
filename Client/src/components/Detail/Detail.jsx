import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./Detail.module.css"

const Detail = () => {

const {id} = useParams()

const [character, setCharacter] = useState({})

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);


return (
    <div className={style.container}>
        <div>
        <h2 className={style.name}>Id: {character?.id}</h2>
        <h2 className={style.name}>Name: {character?.name}</h2>
        <h2 className={style.detail}>Status: {character?.status}</h2>
        <h2 className={style.detail}>Specie: {character?.species}</h2>
        <h2 className={style.detail}>Gender: {character?.gender}</h2>
        <h2 className={style.detail}> Origin: {character?.origin?.name}</h2>
        </div>
        <img className={style.image}src={character?.image} alt={character?.name}/>
    </div>
)
}

export default Detail