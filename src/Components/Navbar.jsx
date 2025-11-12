import React, { useContext } from 'react'
import { App_context } from '../context'
import Menu_btn from './Menu_btn'

function Navbar() {
    const { nav, set_nav } = useContext(App_context)
    return (
        <div className='w-full h-[45px] sm:h-[70px] flex items-center justify-between px-2 sm:px-5 fixed top-0 left-0 z-50 backdrop-blur-sm bg-black sm:bg-white/40  '>
            <div className='w-max h-full flex items-center gap-2  '>
                <div className='text-sm w-[40px] h-[55%]'> <img src="/adam.png" className='w-full h-full img_shadow object-contain' alt="" /> </div>
                <div>
                    <h1 className=' text-[15px] font-bold text-white sm:text-black sm:text-lg bt_sh d_none' >ADAM PALACE</h1>
                    <h1 className=' text-[12px] italic mt-[-5px] sm:mt-[-7px] text-yellow-500 d_none yt_sh sm:text-md '>& MARQUEE</h1>
                </div>
            </div>

            <ul className='justify-center items-center gap-5 hidden lg:flex '>
                {
                    ["home", "about us ", "gallery", "menu", "contact"].map((nav_list, idx) => {
                        return (
                            <h1 key={idx} className={`text-black/80 active:scale-97 text-sm xl:text-md cursor-pointer transition-all ease-in group duration-200 hover:text-red-700 uppercase relative  ${nav == nav_list ? "text-red-700" : "text-black/80"} `} onClick={() => set_nav(nav_list)} >{nav_list}
                                <div className={` absolute bottom-0 left-[2.5%] opacity-0 group-hover:opacity-100 w-0 transition-all duration-200 ease-in-out h-[3px] bg-red-600 rounded-2xl ${nav == nav_list ? "w-[95%] opacity-100" : "w-0 opacity-0"} `} ></div>
                            </h1>
                        )
                    })
                }
            </ul>
            <div className='flex items-center gap-3 '>
                <Menu_btn />

                <button className='font-bold text-[12px] d_none sm:text-sm  wt_sh py-1 sm:py-2  px-2 sm:px-4 rx_sh transition-all duration-200 ease-in hover:scale-103 cursor-pointer active:scale-98 rounded-lg sm:rounded-xl bg-gradient-to-tr from-red-600 to-black/90 text-white ' >BOOK NOW</button>
            </div>

        </div>
    )
}

export default Navbar