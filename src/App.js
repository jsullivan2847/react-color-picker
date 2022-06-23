import './App.css';
import Choice from './components/Choice';
import Colors from './components/Colors';
import Current from './components/Current';
import { useState } from 'react';
// import {useState, useEffect} from 'react';



function App() {
   //Generate Random Int
   const getRandomInt = () => {
    const randomInt = Math.floor(Math.random() * (255 - 0));
    return randomInt;
  };
  //Generate Random RGBA value using 3 random Ints
  const getRandomColor = () => {
    const rgba = [getRandomInt(), getRandomInt(), getRandomInt()];
    return `rgba(${rgba.toString()})`;
  };
  
  const [currentColor, setCurrentColor] = useState(null);
  const match = (color) => {
    setCurrentColor(color);
  }

  const saveColor = (color) => {
    console.log(currentColor);
  }
  

  return (
    <div className="App">
      <Colors match={match} randomColor={getRandomColor}/>
      <Current currentColor={currentColor}/>
      <Choice currentColor={currentColor}/>
      <Choice currentColor={currentColor}/>
      <Choice currentColor={currentColor}/>
    </div>
  );
}

export default App;
