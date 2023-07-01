import React, {useState} from "react"
import search from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const handleChange = (evento) => {
      setId(evento.target.value)
   }
   
   return (
      <div className={search.searchButton}>
         <input className={search.inputColor} type='search' onChange={handleChange} value={id} placeholder="Busca tu personaje"/>
         <button  className={search.button}  onClick={() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}
