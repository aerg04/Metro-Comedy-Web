import ContainerCarousel from "../components/ContainerCarousel";
import Carousel from "../components/Carousel";
import People from "../components/People";
import Header from "../components/Header";
import ContainerRegister from "../components/ContainerRegister";


export default function Home() {    
    return (
        <>
        <Header/>
        <div className="bg-black">
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-16 bg-black text-white max-w-full">
                <div className="sm:w-1/2 flex flex-col text-center justify-center items-center h-64 sm:h-auto p-2">
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
                    <Carousel/>
            </div>

                <div className="justify-center item-center flex mb-16 my-16">
                <ContainerRegister/>
                </div>

                
                <div className="h-auto flex flex-col text-white items-center sm:justify-center bg-black">
                    <h3 className="sm:text-base">✨Claro que Yes!✨</h3>
                    <h2 className="sm:text-5xl m-4 font-bold"> Destacados </h2>
                    <h3 className="sm:text-2xl">Busca a tu profesor favorito y accede a sus shows directamente</h3>
                </div>

                <div className="h-[400px] bg-black flex items-center justify-center">
                    <People/>
                </div>
        </div>
        </>
    )
}