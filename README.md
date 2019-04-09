## Hola mundo en React React + Babel + WebPack

Primera aplicación para iniciar un proyecto en React, con las dependencias necesarias de Babel.
tomando al guía de [Domina React](http://dominareact.com/0119-hola-mundo-react-js/). 
El paquete contiene dependencias de: React + Babel + WebPack


```
npm i react react-dom --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i webpack webpack-cli html-webpack-plugin html-loader --save-dev

```

Para correr la app, solo es necesario ejecutar: 
```
npm run build
```
Se creará una carpeta llamada "dist" si todo funciona, el cual tendrá el compilado final de React.