import ItemCount from "./ItemCount";
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({item}) => {

    const handleAdd = () => {
        console.log(`agregado al carrito`);
    }



    return ( 
        <>
        <div className="flex max-w-52 flex-col justify-between my-5 bg-stone-400 rounded-t-3xl">
            <img className="w-[100%] rounded-t-3xl" src={item.imagen} alt={item.nombre} />
            <div className="p-2 h-20 flex flex-col justify-between">
            <h2 className="text-center">{item.nombre}</h2>
            <div className="flex justify-between">
            <p>{item.descripcion}</p>
            <p className="text font-bold">${item.precio}</p>
            </div>
            </div>
            <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
        </div>
        </>
     );
}
 
export default ItemDetail;