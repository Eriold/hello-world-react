import React from 'react'; // Importamos React
import ReactDOM from 'react-dom'; // Importamos ReactDOM
import HelloWorld from './components/HelloWorld'; // Importamos nuestro primer componente

// insertamos nuestro componente en nuestro documento HTML utilizando ReactDOM
ReactDOM.render( < HelloWorld text = "Hola Mundo Cruel" / > , document.getElementById('app'));