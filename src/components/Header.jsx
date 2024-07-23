
export default function Header(){
    return(
        <div className="ComponentePadre" class='p-2  max-w mx-auto bg-white rounded-xl shadow-lg'>
            <div className="ComponenteHijo" class='p-1 max-w flex flex-row items-center sm:justify-between '>
                <div class="flex">
                    <div className="ComponenteImagen" class='p-2 flex'>
                        <img class='h-14 w-12'></img>
                    </div>

                    <div className="Tittle" class='p-5 w-64 flex items-center sm:justify-center'>
                        <h1 class=''>MetroComedy</h1>
                    </div>
                </div>

                <div className="NavBar" class='p-5 w-80 flex items-center flex-nowrap sm:justify-between'>
                    <h2 class=''>Comediantes</h2>
                    <h2 class=''>Shows</h2>
                    <h2 class=''>Contacto</h2>
                </div>

            </div>
        </div>
    );
}