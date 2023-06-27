import './App.css';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import characters from './data.js';

function App() {

function searchHandler(i){
   window.alert("El ID que estoy buscando")
}

function closeHandler(){
   window.alert('Emulamos que se cierra la card')
}

   return (
      <div className='App'>
         <SearchBar searchHandler={searchHandler} />
         <Cards characters={characters} onClose={closeHandler}/>
         
      </div>
   );
}

export default App;
