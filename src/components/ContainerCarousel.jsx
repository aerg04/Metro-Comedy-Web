import React from 'react'

export default function ContainerCarousel({key,name, caption, path,color}) {
    return(
            <div key={key} className={" text-white flex flex-col items-center justify-center w-auto "}>
                
                    <div className={"h-64 flex overflow-hidden" }>
                    <img className="w-48 h-auto object-cover object-position rounded-t-lg"
                        src={path} alt="" />

                    </div>
                    <div className={"w-48 justify-center items-center flex flex-col gap-y-1.5 p-2 rounded-b-lg " + color}>
                    <div className='items-center justify-center text-center'>
                            <p className="font-bold">{name}</p>
                            <p className=" ">{caption}</p>
                    </div>
                        <button className="bg-black text-white rounded-full px-3 py-2 font-bold transition duration-300 ease-in-out hover:bg-white hover:text-black active:bg-gray-700 active:text-white"> Comprar </button>
                    </div>
               
            </div>  
    )
}