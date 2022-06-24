import { useRef, useEffect } from "react";

const UseCanvas = (draw) => {
  const canvasRef = useRef(null);

  let x;
  let y;
  let point;

  const initMouseListener = () => {
    const mouseMoveListener = (e) => {
       x = e.clientX;
       y = e.clientY;
       point = getCanvasPoint(x,y);
    //    console.log(point);
      return point;
    };
    window.addEventListener("mousemove", mouseMoveListener);
  };
  initMouseListener();

  function getCanvasPoint(x,y){
    if(canvasRef.current){
        const rect = canvasRef.current.getBoundingClientRect();
    return {
        x : x - rect.left,
        y : y - rect.top
    }
    } else {
        return null;
    }
  }


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;
    //Our draw came here
    const render = () => {
      frameCount++;
    //   console.log(point)
      draw(context, frameCount, point);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return canvasRef
};

export default UseCanvas;
