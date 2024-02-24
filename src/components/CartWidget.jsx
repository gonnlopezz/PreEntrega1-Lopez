import { IoBagOutline } from "react-icons/io5";
import React, { useState } from 'react'

const CartWidget = () => {
    const [showCart, setShowCart] = useState(false);


    return ( 
            <div className="relative h-6">
                <button>
            <IoBagOutline className="w-6 h-6 text-white"/>
            </button>
            <span className="absolute text-black -right-4 -top-3 rounded-full text-center bg-white w-6">4</span>
            </div>
     );
}
 
export default CartWidget;