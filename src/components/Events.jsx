import React from "react";

export default function Events({key,name, caption, path,color}) {
    return(
        <div>
            <div key={key} className={" text-white flex flex-col items-center justify-center w-auto"}>
                
                    <div className={"h-64 flex overflow-hidden" }>
                        <img className="w-48 h-auto object-cover object-position rounded-t-lg"
                        src={path} alt="" />

                    </div>
                    <div className={"w-48 justify-center items-center flex flex-col gap-y-1.5 p-2 rounded-b-lg " + color}>
                        <img src="" alt="" />
                        <h2></h2>
                        <div className='items-center justify-center text-center'>
                                <p className="font-bold">{name}</p>
                                <p className=" ">{caption}</p>
                                <p className=" ">{caption}</p>
                        </div>
                        
                    </div>
               
            </div>
        </div>
    )
}