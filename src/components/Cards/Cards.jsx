import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards(props) {
   const {characters} = props
   const {onClose} = props
   
  return (
     <div className={`${style.wrapper} ${style.contenido}`}>
     {characters.map((character) => (
        <Card character={character} onClose={onClose}/>
   ))}

  </div>
  )
}
