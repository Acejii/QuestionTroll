import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {GiChicken} from 'react-icons/gi'

const MouseOver = () => {
  const handleOverMouse = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    top: number,
    left: number
  ) => {
    if (e.target instanceof HTMLDivElement) {
      if (Math.abs(top - e.target.offsetTop) <= 100) {
        console.log('here')
        e.target.style.position = "absolute";
        e.target.style.top = `${top + 100}px`;
        e.target.style.left = `${left + 100}px`;
      } else {
        e.target.style.position = "absolute";
        e.target.style.top = `${top}px`;
        e.target.style.left = `${left}px`;
      }
    }
  };

  const handleSubmit = () => {
    alert('Bạn đã trở thành con gà!!')
  }

  const handleNotSubmit = () => {
    alert('M vẫn là gà thôi =))')
  }

  return (
    <div className="w-[500px] h-[500px] border-2 shadow-2xl mt-10 mx-auto py-10 text-center">
      <div className="text-[20px] font-bold mb-10">Mày là con gà đúng không?</div>
      <div className="flex items-center justify-center">
      <Tippy content={<div className="text-center flex justify-center items-center">Đúng rồi, nhấn vào đây, con gà <span className="text-center ml-2"><GiChicken color="yellow"/></span></div>}>
        <button className="px-8 py-3 bg-blue-400 rounded-xl hover:bg-blue-300" onClick={handleSubmit}>Chính xác</button>
      </Tippy>
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
          <button className={`px-8 py-3 bg-green-300 rounded-xl`} onClick={handleNotSubmit}>
            No No
          </button>
        </div>
      </div>
    </div>
  );
};

export default MouseOver;
