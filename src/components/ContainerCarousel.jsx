
export default function ContainerCarousel() {
    return(
        <>
            <div className="flex flex-col text-white">
                <div className="w-auto h-64 flex overflow-hidden rounded-t-lg">
                    <img className="w-48 h-auto object-cover object-position"
                    src="src/assets/yo-Alejandro-Holguin.jpg" alt="" />

                </div>
                <div className="bg-orange-400 justify-center items-center flex flex-col gap-y-1.5 p-2 rounded-b-lg">
                   <div>
                        <p className="font-bold">Alejandro Holguin</p>
                        <p className="">Especial On Demand</p>
                   </div>
                    <button className="bg-black rounded-full px-2 py-1 font-bold"> Comprar </button>
                </div>
            </div>  
        </>
    )
}