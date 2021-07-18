import React from 'react';
import CardContainer from '../components/gameboard/CardContainer'
import Header from '../components/header/Header';
import '../styles/global.css';

function Game(props) {
  return (
    <div>
      <Header />
      <CardContainer />
    </div>
  )
}

export default Game;