
export default function Header(){
    return(
        <div className='p-2 bg-white rounded-xl shadow-lg max-w-full'>
            <div className="ComponenteHijo" class='p-1 flex flex-row items-center justify-between '>
                <div class="flex">
                    <div className="ComponenteImagen" class='p-2 flex'>
                        <img class='h-14 w-12'></img>
                    </div>

                    <div className="Tittle" class='p-2 sm:w-64 flex items-center sm:justify-center'>
                        <h1 class=''>MetroComedy</h1>
                    </div>
                </div>

                <div className="NavBar" class='p-2 flex gap-x-2 items-center flex-nowrap sm:justify-between'>
                    <h2 class=''>Comediantes</h2>
                    <h2 class=''>Shows</h2>
                    <h2 class=''>Contacto</h2>
                </div>

            </div>
        </div>
    );
}