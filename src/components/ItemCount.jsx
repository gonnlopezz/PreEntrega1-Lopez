import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleCountChange = (value) => {
        const newCount = count + value;
        if(newCount >= 1 && newCount <= stock) {
            setCount(newCount);
        }
    }

    const handleAdd = () => {
        if (count > 0) {
            onAdd(count);
        }
    }

    return ( 
        <div className="bg-gray-900 h-10 flex justify-between px-4 items-center">
            <button className="text-white text-start" onClick={() => handleCountChange(-1)}>
                -
            </button>
            <button className="text-white" onClick={() => handleAdd()}> Agregar al carrito </button>
            
            <button className="text-white text-end" onClick={() => handleCountChange(+1)}>
                +
            </button>
        </div>
     )
}
 
export default ItemCount;