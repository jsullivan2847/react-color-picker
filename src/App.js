import './App.css';
import Choice from './components/Choice';
import Colors from './components/Colors';
import Current from './components/Current';
import Canvas from './components/Canvas'
import { useState } from 'react';



function App() {

  const getHex = () => {
    let characters = "0123456789ABCDEF";
    let hex = '#';
    for(let i = 0; i < 6; i++){
      hex += characters[(Math.floor(Math.random() * 16))];
    }
    return hex;
  }
  
  const [currentColor, setCurrentColor] = useState('red');
  const match = (color) => {
    setCurrentColor(color);
  }

  
  



  return (
    <div className="App">
      <h1>React Color Picker</h1>
      <Colors match={match} randomColor={getHex}/>
      <Current match={match}currentColor={currentColor}/>
      <div className='choices'>
      <Choice currentColor={currentColor}/>
      <Choice currentColor={currentColor}/>
      <Choice currentColor={currentColor}/>
      </div>
      <Canvas color={currentColor}/>
    </div>
  );
}

export default App;
