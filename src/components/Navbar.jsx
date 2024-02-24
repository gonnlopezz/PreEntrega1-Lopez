import Logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import React, { useState } from 'react'

const Navbar = () => {
    const [showProducts, setShowProducts] = useState(false);
    return ( 
        <nav className="bg-gray-900">
            <div className="container mx-auto py-2 flex justify-between items-center">
                <div className="w-14 cursor-pointer">
                    <img src={Logo} alt="logo" />
                </div>
                <div>
                    <ul className="flex space-x-8">
                        <li className="hover:underline text-white cursor-pointer">Inicio</li>
                        <li className=" text-white cursor-pointer">
                            <button className="hover:underline" onClick={() => setShowProducts(!showProducts)}>Productos</button>
                            {showProducts && (
                            <ul className="absolute space-y-1 px-4 py-2 text-center bg-gray-900">
                                <li className="text-white hover:underline">Funkos</li>
                                <li className="text-white hover:underline">Chapas</li>
                                <li className="text-white hover:underline">Llaves</li>
                            </ul>
                            )}
                        </li>
                        <li className="hover:underline text-white cursor-pointer">Contacto</li>
                        <li className="hover:underline text-white cursor-pointer">Cuenta</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-6 items-center cursor-pointer">
                        <li className="flex items-center"><UserWidget/></li>
                        <li className="flex items-center"><CartWidget/></li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;