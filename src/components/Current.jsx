import { SketchPicker, SliderPicker } from "react-color";

const Current = ({currentColor, match}) => {

    return (

        <div className="current" style={{backgroundColor: currentColor}}>
            {currentColor && 
            <div>
                 <SliderPicker
                    color={currentColor}
                    onChange={(color) => {match(color.hex)}}
                    />
                    <div className="hex">
                        <p>{currentColor}</p>
                    </div>
            </div>
            }
        </div>
    )
}

export default Current;