import logo from '../assets/MetroComedyLogo.png'
import menulogo from '../assets/menulogo.svg'
import { useState } from 'react';

export default function Header(){

    const [toggled, setToggled] = useState(false);

    const handleMenu = () => {
        toggled ? setToggled(false) : setToggled(true)
    }

    return(
        <header className='bg-blue-900 fixed top-0 w-full z-50'>
            <nav className='flex items-center justify-between w-[92%] mx-auto'>
                <div className="flex z-30">
                    <div className='p-2 flex shrink-0'>
                        <img className='h-14 w-12' src={logo}></img>
                    </div>

                    <div className='p-2 sm:w-64 flex items-center sm:justify-center'>
                        <h1 className='font-archivoBlack text-2xl text-white'>MetroComedy</h1>
                    </div>
                </div>

                <div className={toggled ? 'justify-center text-xl md:static absolute bg-blue-800 md:min-h-fit min-h-[25vh] left-0 top-[10%] md:w-auto w-full z-20 flex items-center px-5 ':'text-xl md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 '}>
                    <ul className='text-white font-outfit flex md:flex-row flex-col md:items-center  md:gap-[4vw] gap-8'>
                        <li>
                            <a className='hover:text-gray-500' href=''>Comediantes</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href=''>Shows</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href=''>Contacto</a>
                        </li>
                    </ul>

                </div>

                <div className='flex z-30 items-center md:hidden cursor-pointer relative' >
                    <img onClick={handleMenu} className='w-6' src={menulogo}></img>
                </div>
            </nav>
        </header>
    );
}