import React from 'react';
//import Header from './components/Header';
//import Banner from './components/Banner';
//import { Componente1, Componente2, Componente3 } from './components/VariosComponentes';
//import FormadeBolo from './components/FormadeBolo';
//import Card from './components/Card';
//import CardDinamico from './components/CardDinamico';
import Contador from './components/Contador';
import './App.css'

// Exemplo padrão
/* function App() {
  return (
    <>
      <h1>Aula 2 de React</h1>
      <div className="card">
        <p>
          <h2>Importando e Exportando Componentes</h2>
        </p>
        <Header /> <Banner />
      </div>
    </>
  )
} */

// Exmplo utilizando componente
/* const App = () => {
  return ( <div>
    <h1>Aula 2 - React: Importando e Exportando Componentes</h1>
    <Header /> <Banner />
  </div> );
};

export default App; */

//Exemplo usando vários componentes
/* const App = () => {
  return ( <div> <Componente1 /> <Componente2 /> <Componente3 /> </div> );
};

export default App; */

//Exwmplo da forma de bolo
/* const App = () => {
  return ( <div> <FormadeBolo sabor="cenoura" cobertura="chocolate" /> <FormadeBolo sabor="limão" cobertura="chantilly" /> </div> );
};
 
export default App; */

//Exemplo Componentes Dinâmicos
/* const App = () => {
  return ( <div> <Card title={"Notícia 1"} category={"Geopolítica"} content={"Conteúdo da notícia 1"} image={"https://via.placeholder.com/100"}/> <Card title="Notícia 2" category="Finanças" content="Conteúdo da notícia 2" /> <Card title="Notícia 3" category="Tecnologia" content="Conteúdo da notícia 3" image="https://via.placeholder.com/100" /> </div> );
};
 
export default App; */

//Exemplo Dinâmico - children
/* const App = () => { 
  return ( <div> <Card title="Notícia 1" category="Esportes" content="Conteúdo da notícia 1" image="https://via.placeholder.com/100" /> <Card title="Notícia 2" category="Finanças" content="Conteúdo da notícia 2" /> <Card title="Notícia 3" category="Tecnologia" content="Conteúdo da notícia 3" image="https://via.placeholder.com/100" /> <CardDinamico> <h2>Notícia Dinâmica 1</h2> <img src="https://via.placeholder.com/100" alt="Imagem" /> <p>Conteúdo dinâmico da notícia 1</p> </CardDinamico> <CardDinamico> <h2>Notícia Dinâmica 2</h2> <p>Conteúdo dinâmico da notícia 2 sem imagem</p> </CardDinamico> </div> );
};

export default App; */

// Exemplo Contador, usando useState
const App = () => {
  return ( <div> <Contador /> </div> );
};
 
export default App;