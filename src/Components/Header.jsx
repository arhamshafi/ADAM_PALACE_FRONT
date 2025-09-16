import React from 'react'

function Header() {
    return (
        <>
            <div className=' pt-[30px] h-max flex justify-between items-center flex-wrap lg:flex-nowrap ' >
                <div className=' w-[95%] sm:w-[90%] mx-auto lg:mx-0 lg:w-[60%] h-max lg:h-full pt-10 sm:pt-[40px] pl-0 lg:pl-7 flex justify-center items-center lg:items-start flex-col '>
                    <h1 className=" text-sm font_1 sm:text-lg text-center tracking-[1px] sm:tracking-[2px] uppercase bt_sh text-black">Experience the Grandeur at</h1>
                    <h1 className=' text-2xl font_2 tracking-[1px] sm:text-3xl lg:text-4xl xl:text-5xl mt-3 sm:mt-5 uppercase font-bold bt_sh '>adam <span className='text-yellow-500 yt_sh italic ' >palace</span> & <span className='text-yellow-500 italic yt_sh '>marquee</span> </h1>
                    <p className="text-sm sm:text-md font_1 lg:text-lg text-black/60 mt-3 sm:mt-5 text-center lg:text-left  ">
                        Turn your celebrations into unforgettable memories. Step into an atmosphere of timeless elegance, exquisite décor, and flawless service — the ultimate destination for weddings, birthdays, corporate events, and every moment worth cherishing
                    </p>
                    <button className='text-white font-bold text-sm sm:text-lg lg:text-xl wt_sh py-1.5 lg:py-2.5 cursor-pointer transition-all duration-200 ease-in active:scale-98 rounded-lg bg-yellow-500 ox_sh mt-5 uppercase px-3'> expolre us </button>
                </div>
                {/* //////////////   PART 2   / */}
                <div className='h-[300px] lg:hidden mx-auto img_border_h mt-12 lg:mt-0 w-max flex relative justify-center items-center gap-10 sm:gap-20 '>
                    <div className='w-[180px] h_img_1 h-[230px] mt-5 rounded-xl -rotate-8 relative bg-black bg-center bg-cover bx_sh bg-no-repeat  ' style={{ backgroundImage: "url(/inner_hall.jpg)" }} > <div className='w-full h-full rounded-xl bg-black/20'></div> </div>
                    <div className='absolute top-[5%] h_img_2 left-[30%] w-[180px] rounded-xl bg-black h-[260px] bg-[position:-145px_0px] z-10 bg-cover bx_sh bg-no-repeat  ' style={{ backgroundImage: "url(/8.jpg)" }} ><div className='w-full rounded-xl h-full bg-black/10'></div></div>
                    <div className='w-[180px] h_img_1 h-[230px] mt-5 rounded-xl rotate-8 bg-black bg-cover bg-center bx_sh ' style={{ backgroundImage: "url(/outside.jpg)", backgroundPositionX: "-15px" }} ><div className='w-full h-full bg-black/5 rounded-xl'></div></div>
                </div>
                {/* //////////// 2nd design  /// */}
                <div className='w-[400px] lg:w-[500px] h-[600px] relative  hidden lg:block '>
                    <div className='w-[165px] bx_sh h-[230px] absolute top-[10%] left-[12%] xl:left-[15%]  rounded-2xl  bg-center bg-cover bg-no-repeat bg-black' style={{ backgroundImage: "url(/inner_hall.jpg)" }}></div>
                    <div className='w-[165px] bx_sh h-[230px] absolute top-[35%] right-[12%] xl:right-[15%] rounded-2xl  bg-center bg-cover bg-no-repeat bg-black' style={{ backgroundImage: "url(/8.jpg)", backgroundPositionX: "-130px" }}></div>
                    <div className='w-[165px] bx_sh h-[230px] absolute top-[60%] left-[12%] xl:left-[15%]  rounded-2xl  bg-center bg-cover bg-no-repeat bg-black' style={{ backgroundImage: "url(/outside.jpg)", backgroundPositionX: "-15px" }}></div>
                </div>
            </div>
        </>
    )
}

export default Header