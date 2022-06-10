import {useState} from 'react';


const Color = (props) => {

    function getRandomColor(){
        const getRandomInt = () => {
          const randomInt = Math.floor(Math.random() * (255 - 0))
          return randomInt;
        };
        const rgba = [getRandomInt(), getRandomInt(), getRandomInt()];
        
        return (`rgba(${rgba.toString()})`);
    }

    //creates state
    const [colorState, setColorState] = useState(null);

    //function to set color state to random color
    const setColor = () => {
      
        setColorState(...colorState, getRandomColor);
    }

  
    // useEffect(() => {setColor()}, []);

    const color = getRandomColor();

    return(
            <div className='color'>
                <style>
                    { `.color{background-color: ${color}`}
                </style>
            </div>
    );
}

export default Color;