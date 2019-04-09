import React from 'react'; // Importamos React

// Creamos un componente presentacional que recibe la propiedad "text"
const HelloWorld = ({ text }) => (
  <h1>{text}</h1>
);

export default HelloWorld;