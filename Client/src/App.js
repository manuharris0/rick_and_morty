import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

import './App.css';

import axios from 'axios'

import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


const App = () => {
   
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
   });
}

useEffect(() => {
   !access && navigate('/');
}, [access]);
   
function onSearch(id) {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
     ({ data }) => {
       if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
       } else {
         window.alert("¡No hay personajes con este ID!");
       }
     }
   );
 }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }

   return (
      <div>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Error />} />  
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   )
};


export default App;