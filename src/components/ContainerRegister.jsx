export default function ContainerRegister(){
    return(
            <div className="h-auto w-2/3 bg-gray-900 rounded-2xl p-6 flex flex-col justify-center items-center">
                <h1 className="text-red-500 sm:text-3xl font-outfit">Riete despues de clases</h1>
                <h2 className="text-white sm:text-xl font-outfit">No dejes que te cuenten lo graciosas que son estas clases</h2>
                <button class="m-4 group relative h-12 w-48 overflow-hidden rounded-lg bg-red-500 text-lg shadow transition duration-500 hover:scale-125">
                    <div class="absolute inset-0 w-3 bg-red-800 transition-all duration-[250ms] ease-out group-hover:w-full "></div>
                    <span class="relative text-white group-hover:text-white">Comprar Entradas</span>
                </button>
            </div>

    );
}