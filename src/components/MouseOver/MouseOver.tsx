import React from "react";

const MouseOver = () => {
  const handleOverMouse = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    top: number,
    left: number
  ) => {
    if (e.target instanceof HTMLDivElement) {
      if (Math.abs(top - left) <= 50) {
        e.target.style.position = "absolute";
        e.target.style.top = `${top + 100}px`;
        e.target.style.left = `${left}px`;
      } else {
        e.target.style.position = "absolute";
        e.target.style.top = `${top}px`;
        e.target.style.left = `${left}px`;
      }
    }
  };

  return (
    <div className="w-[500px] h-[500px] border-2 shadow-2xl mt-10 mx-auto py-10 text-center">
      <div className="text-[20px] font-bold mb-10">Mày là con gà đúng không?</div>
      <div className="flex items-center justify-center">
        <button className="px-8 py-3 bg-blue-300 rounded-xl">Chính xác</button>
        <div
          className={`p-5`}
          onMouseOver={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handleOverMouse(
              e,
              Math.floor(Math.random() * 800),
              Math.floor(Math.random() * 1200)
            )
          }
        >
          <button className={`px-8 py-3 bg-green-300 rounded-xl`}>
            No No
          </button>
        </div>
      </div>
    </div>
  );
};

export default MouseOver;
