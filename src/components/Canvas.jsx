import UseCanvas from "../hooks/UseCanvas";

const Canvas = ({color}) => {
  const draw = (ctx, frameCount, point) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = '#000000'
    // ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    // ctx.fill()
    // ctx.moveTo(point.x, point.y);
    // ctx.lineTo(point.x +5,point.y +5);
    // ctx.stroke();
    console.log(color)
    if (point) {
        ctx.stroke();
      ctx.strokeStyle = color; 
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(point.x + 5, point.y + 5);
    
    console.log(point);
    }
  };

  const canvasRef = UseCanvas(draw);

  return <canvas className="paper" ref={canvasRef} />;
};

export default Canvas;
