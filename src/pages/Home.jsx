import ContainerCarousel from "../components/ContainerCarousel";
import Carousel from "../components/Carousel";
import People from "../components/People";
import Header from "../components/Header";
import ContainerRegister from "../components/ContainerRegister";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

export default function Home() {    
    return (
        <>
        <Header/>
        <div className="bg-custom-gray">
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-16 p-2 text-white max-w-full">
                <div className="sm:w-1/2 flex flex-col text-center justify-center items-center h-64 sm:h-auto p-2">
                    <div className="sm:text-[40px] font-archivoBlack tracking-tight">
                        <h1>
                            Metro Comedy te trae a tus
                        </h1>
                    </div>
                    <div className="sm:text-[30px]  font-bold  flex flex-col ">
                         <span className="text-[60px] text-stroke text-stroke-orange-500 text-stroke-fill-black"> PROFESORES   <span className="text-[60px] text-stroke text-stroke-indigo-200 text-stroke-fill-black"> FAVORITOS </span> </span>
                       
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

                
                <div className="h-auto flex flex-col text-white items-center sm:justify-center ">
                    <h3 className="sm:text-lg">✨Claro que Yes!✨</h3>
                    <h2 className="sm:text-5xl m-4 font-archivoBlack"> Destacados </h2>
                    <h3 className="sm:text-2xl font-outfit">Busca a tu profesor favorito y accede a sus shows directamente</h3>
                </div>

                <div className="py-2 flex items-center justify-center">
                    <People/>
                </div>
                <div className="w-full flex py-2 gap-y-2 flex-col min-h-64 items-center justify-center text-white">
                    <h2 className="sm:text-5xl m-6 font-archivoBlack">Preguntas Frecuentes</h2>
                    <div className="text-lg font-outfit">
                        <Accordion title="¿Como me uno a MetroComedy?" answer="Escribe a +58 424-3023017"></Accordion>
                        <Accordion title="¿Qué es MetroCommedy?" answer="Es una agrupacion estudiantil de la Universidad Metropolitana, cuyo fin es crear, practicar y presentar espectáculos cómicos "></Accordion>
                        <Accordion title="¿Cual es el misión de MetroComedy?" answer="Crear un ambiente de risas dentro de la Univerisidad Metropolitana, teniendo en cuenta el respeto y la empatia"></Accordion>

                    </div>
                </div>
                <Footer></Footer>
        </div>
        </>
    )
}