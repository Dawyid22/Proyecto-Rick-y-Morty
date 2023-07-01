import search from "./SearchBar.module.css"
export default function SearchBar(props) {
   const {searchHandler} = props
   return (
      <div className={search.searchButton}>
         <input className={search.inputColor} type='search' />
         <button onClick={searchHandler}>Agregar</button>
      </div>
   );
}
