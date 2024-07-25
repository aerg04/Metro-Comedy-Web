import ContainerCarousel from "../components/ContainerCarousel";
import Carousel from "../components/Carousel";
import People from "../components/People";
import Header from "../components/Header";


export default function Home() {    
    return (
        <>
        <Header/>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-16 bg-black text-white max-w-full">
                <div className="w-1/2 flex flex-col text-center justify-center items-center p-2">
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
                    <Carousel>

                    </Carousel>
                
                </div>
                <div className="h-[400px] flex items-center justify-center">
                    <People></People>
                </div>
        </>
    )
}