const Paper = () => {

    

    const mouseListener = (event) => {
        console.log({x : event.clientX, y : event.clientY});
    }

    window.addEventListener('mousemove', mouseListener); 


    return (
        <div className="paper">
        </div>
    )
}

export default Paper;