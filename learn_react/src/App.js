import React from 'react';
import './App.css';
import MenuPerso from './Design/menu';
import Autontification  from './Design/Login';
//import Open from  './Design/Entre'


function App() {
  
  return (
    <div className="App">
     
       <MenuPerso /> 
       <Autontification taille="1.25" val="Moi"/>
       
      
    </div>
  );
}

export default App;
