import './App.css';
import Choice from './components/Choice';
import Color from './components/Color';
// import {useState, useEffect} from 'react';



function App() {
  

    
//calls this once on page load and then the empty array
//prevents infinite loop
 

  
  const colorField = () => {
    const array = [];
    for(let i = 0; i < 65; i++){
      array.push(<Color key={i}/>);
    }
    return array;
  }
  return (
    <div className="App">
      <div className="colors-container">
        {colorField()}
      </div>

      <Choice/>
      <Choice/>
      <Choice/>
    </div>
  );
}

export default App;
