import { useState } from "react";


const Choice = (currentColor) => {

    const [color, setColor] = useState(null);

    const handleClick = () => {
        setColor(currentColor.currentColor)
        console.log(currentColor.currentColor)
        console.log(color)
    }
    return (
        <div onClick={handleClick}className="choice" style={{backgroundColor: color}}>
            <p>{color}</p>
        </div>
    )
}

export default Choice;