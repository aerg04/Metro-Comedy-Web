
export default function Header(){
    return(
        <div className="ComponentePadre" class='p-5  max-w mx-auto bg-white rounded-xl shadow-lg flex items-center sm:justify-between '>
            <div className="ComponenteHijo" class='p-1 container max-w flex flex-row '>

                <div className="ComponenteImagen" class='p-2 flex'>
                    <img class='h-14 w-12'></img>
                </div>

                <div className="Tittle" class='p-5 w-64 flex items-center sm:justify-center'>
                    <h1 class=''>MetroComedy</h1>
                </div>

                <div className="NavBar" class='p-5 w-80 flex flex-nowrap sm:justify-between'>
                    <h2 class=''>Comediantes</h2>
                    <h2 class=''>Shows</h2>
                    <h2 class=''>Contacto</h2>
                </div>

            </div>
        </div>
    );
}