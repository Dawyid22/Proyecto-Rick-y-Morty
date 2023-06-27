export default function SearchBar(props) {
   const {searchHandler} = props
   return (
      <div>
         <input type='search' />
         <button onClick={searchHandler}>Agregar</button>
      </div>
   );
}
