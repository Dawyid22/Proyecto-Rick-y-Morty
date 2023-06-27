import style from "./Card.module.css"


export default function Card(props) {
   const {character, onClose} = props
   return (
      <div className={`${style.cardContainer} ${style.contenido}`}>
         <button onClick={onClose}>X</button>
         <h2>{"Nombre: "+character.name}</h2>
         <h2>{"Estado: "+character.status}</h2>
         <h2>{"Especie: "+character.species}</h2>
         <h2>{"Genero: "+character.gender}</h2>
         <h2>{"Origen: "+character.origin.name}</h2>
         <img src={character.image} alt= {character.name} />
      </div>
   );
}


