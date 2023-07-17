import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites"

function App() {
  const [access, setAccess] = useState(false);
  const EMAIL = "david@gmail.com";
  const PASSWORD = "asdfgh2";
  const navigate = useNavigate();

  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    if (id > 826)
      return window.alert("¡No hay personajes con este ID! Solo hay 826");

    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const isDuplicate = characters.some(
            (character) => character.id === data.id
          );
          if (isDuplicate) {
            window.alert("¡El personaje ya esta en pantalla buscalo vago!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        }
      }
    );
  }

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (characters) => characters.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path=":error" element={<Error />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
