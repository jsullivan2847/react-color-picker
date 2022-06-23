import {useState, useEffect} from 'react';


const Color = ({random, match}) => {

    const handleClick = () => {
       match(random);
    }
 
    
    return(

            <div onClick={handleClick} className='color' style={{backgroundColor: random}}>
            </div>

    );
}

export default Color;