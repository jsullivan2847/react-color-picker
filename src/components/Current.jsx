import { useState } from "react";

const Current = ({currentColor}) => {



    return (
        <div className="current" style={{backgroundColor: currentColor}}>
        </div>
    )
}

export default Current;