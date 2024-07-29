import logo from '../assets/MetroComedyLogo.png'

export default function Header(){
    return(
        <div className='p-2 bg-white rounded-xl shadow-lg max-w-full'>
            <div className='p-1 flex flex-row items-center justify-between '>
                <div className="flex">
                    <div className='p-2 flex'>
                        <img className='h-14 w-12' src={logo}></img>
                    </div>

                    <div className='p-2 sm:w-64 flex items-center sm:justify-center'>
                        <h1 className='font-bold text-2xl'>MetroComedy</h1>
                    </div>
                </div>

                <div className='cursor-pointer p-2 flex gap-x-12 items-center flex-nowrap sm:justify-between'>
                    <h2>Comediantes</h2>
                    <h2>Shows</h2>
                    <h2>Contacto</h2>
                </div>

            </div>
        </div>
    );
}