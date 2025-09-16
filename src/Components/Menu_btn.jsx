import React, { useContext } from 'react';
import styled from 'styled-components';
import { App_context } from '../context';

const Menu_btn = () => {
  const { menu, set_menu, nav, set_nav } = useContext(App_context);
  return (
    <StyledWrapper>
      <div className="hamburger block lg:hidden relative scale-80 sm:scale-100 ">
        <div className={` absolute bottom-[-17px] animate-bounce right-[5px] triangle w-[20px] h-[13px] bg-red-700 ${menu ? "opacity-100" : "opacity-0"} transition-all duration-500 ease-in  `} ></div>
        <div className={`absolute p-3 right-[-60px] r0 rounded-xl  w-[150px] h-max transition-all duration-300 ease-in-out bg-gray-100 gx_sh ${menu ? "visible opacity-100 bottom-[-240px] bottom " : "invisible opacity-0 bottom-[-300px] "}  `}>
          <h1 className='font-bold uppercase  ' >Menu :</h1>
          <div className='w-full border-t h-[7px] '></div>
          {
            ["home", "about us ", "gallery", "menu", "contact"].map((nav_list, idx) => {
              return (
                <div key={idx} className={`text-black/80 px-2 font-bold tracking-[1px] w-full h-[25px] rounded-md flex items-center justify-between  inset_bx_g text-sm cursor-pointer mt-1.5 transition-all ease-in group duration-200 hover:text-red-700 uppercase relative  ${nav == nav_list ? "text-red-700 line-through " : "text-black/80"} `} onClick={() => set_nav(nav_list)} >{nav_list} </div>
              )
            })
          }
          <button className='font-bold text-[12px] w-full wt_sh d_block hidden py-1.5 px-2 rx_sh transition-all duration-200 ease-in hover:scale-103 cursor-pointer active:scale-100 rounded-lg mt-3 bg-gradient-to-tr from-red-600 to-black/90 text-white ' >BOOK NOW</button>
        </div>
        <input className="checkbox" type="checkbox" checked={menu} onChange={() => set_menu(prev => !prev)} />
        <svg fill="none" viewBox="0 0 50 50" height={30} width={30}>
          <path className="lineTop line" strokeLinecap="round" strokeWidth={4} d="M6 11L44 11" />
          <path className="lineMid line" strokeLinecap="round" strokeWidth={4} d="M6 24H43" />
          <path className="lineBottom line" strokeLinecap="round" strokeWidth={4} d="M6 37H43" />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .hamburger {
    height: 30px;
    width: 30px;
    transform: 0.2s;
    position: relative;
  }
  .hamburger .checkbox {
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .line {
    transition: 0.5s;
    stroke-width: 6px;
    stroke: white; 
  }

  
  @media (min-width: 640px) {
    .line {
      stroke: black;
    }
  }

  .lineTop {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 25;
  }
  .lineBottom {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 60;
  }
  .lineMid {
    stroke-dasharray: 40 40;
  }
  .hamburger .checkbox:checked + svg .line {
    stroke: crimson;
  }
  .hamburger .checkbox:checked + svg .lineTop {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(45deg) translate(-7px, -5px);
  }
  .hamburger .checkbox:checked + svg .lineMid {
    stroke-dashoffset: 40;
  }
  .hamburger .checkbox:checked + svg .lineBottom {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(-45deg) translate(-5px, 5px);
  }
`;


export default Menu_btn;
