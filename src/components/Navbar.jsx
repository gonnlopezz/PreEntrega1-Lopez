import { NavLink, useParams } from "react-router-dom";
import Logo from "../assets/logo.png";
import Loading from "../../public/loading.gif"
import CartWidget from "./CartWidget";
import categories from '../utils/MockAsync.json';
import {fakeApiCall} from "../utils/fakeApiCall";
import UserWidget from "./UserWidget";
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [showProducts, setShowProducts] = useState(false);
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    
    useEffect(() => {
        fakeApiCall(categories).then(res => {setResponse(res); setLoading(false)})
      }, [])

      

      if(loading) return <div className="h-[100vh] w-{100%] flex items-center justify-center"><img className="w-50" src={Loading}></img></div>

      const getProductsByCategory = (catId) => {
        if(catId) {
          return response.productos.filter((product) => product.categoria === parseInt(catId))
        }
      }


      const productsPorCategoria = getProductsByCategory(id);

    return (
        <nav className="bg-gray-900">
            <div className="container mx-auto py-2 flex justify-between items-center">
                <NavLink className="w-14 cursor-pointer" to='/'>
                    <img src={Logo} alt="logo" />
                </NavLink >
                <div>
                    <ul className="flex space-x-8">
                        <NavLink className="hover:underline text-white cursor-pointer" to='/'>Inicio</NavLink >
                        <li className=" text-white cursor-pointer">
                            <button className="hover:underline" onClick={() => setShowProducts(!showProducts)}>Productos</button>
                            {showProducts && (
                                <div className="absolute flex flex-col space-y-1 px-4 py-2 text-center bg-gray-900">
                                    {
                                        response.categorias.map((cat) => {
                                            return <NavLink className="text-white hover:underline" key={cat.id} to={`/category/${cat.id}`}>{cat.nombre}</NavLink>
                                        })
                                    }
                                </div>
                            )}
                        </li>
                        <li className="hover:underline text-white cursor-pointer">Contacto</li>
                        <li className="hover:underline text-white cursor-pointer">Cuenta</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-6 items-center cursor-pointer">
                        <li className="flex items-center"><UserWidget /></li>
                        <li className="flex items-center"><CartWidget /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;