import { useState } from 'react';

export const MovingBall = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const handlePointerMove = (e) =>
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  return (
    <>
      <div
        className="relative h-screen w-screen bg-black"
        onPointerMove={handlePointerMove}
      >
        <div
          className=" flex items-center justify-center rounded-full bg-red-600"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        ></div>
      </div>
    </>
  );
};
