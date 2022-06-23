import Color from "./Color";
import Reset from "./Reset";
import { useState } from "react";
const Colors = ({randomColor, match}) => {
 
  //state for array of colors
  const [colors, setColors] = useState([]);
  const generateColors = () => {
    for (let i = 0; i < 64; i++) {
      colors.push(randomColor());
    }
  }
  generateColors();

  //Initialize empty array
  let array = [];

  //fill the array with Color elements
  const colorField = () => {
    for (let i = 0; i < 64; i++) {
      let color = colors[i];
      array.push(<Color match={match} key={i} random={color} />);
    }
    return array;
  };

  colorField();


  const reset = () => {
    setColors([])
  };
  return (
    <div className="colors-container">
      {array}
      <Reset reset={reset} />
    </div>
  );
};

export default Colors;
