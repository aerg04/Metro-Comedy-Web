import ContainerCarousel from "../components/ContainerCarousel";
import Carousel from "../components/Carousel";




export default function Home() {    
    return (
        <div className="flex justify-center space-x-16 bg-black text-white">
                <div className="flex flex-col text-center justify-center items-center p-2">
                    <div className="sm:text-[40px] font-bold ">
                        <h1>
                            Metro Comedy
                        </h1>
                    </div>
                    <div className="sm:text-[30px] font-bold">
                        TE TRAE A TUS  <span className=""> PROFESORES FAVORITOS </span>
                    </div>
                    <div className="sm:text-[20px]">
                        FUERAS DE LAS AULAS
                    </div>
                    
                </div>
                <div className="flex justify-center">
                    
                    <Carousel>

                    </Carousel>
                </div>
                
        </div>
    )
}