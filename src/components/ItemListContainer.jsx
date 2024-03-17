import { useEffect, useState } from "react";
import categories from '../utils/MockAsync.json';
import {fakeApiCall} from "../utils/fakeApiCall";
import { Link, useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from "./ItemDetail";


const ItemListContainer = () => {

  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    fakeApiCall(categories).then(res => {setResponse(res); setLoading(false)})
  }, [])


  if(loading) return ''

  const getProductsByCategory = (catId) => {
    if(catId) {
      return response.productos.filter((p) => p.categoria === parseInt(id));
    } 
  }

  const productsPorCategoria = getProductsByCategory(id);
  
  return ( 
    <>
    <div className="flex justify-center mx-20 flex-wrap">

    {
      productsPorCategoria && (
        productsPorCategoria.map((producto) => {
          return (
            <div className="mx-20">
              <Link key={producto.id} to={`/item/${producto.id}`}>
                    <ItemDetail item={producto} />
                  </Link>
            </div>)
        })
        )
      }
    {
      !productsPorCategoria && (
        response.productos.map((producto)=> {
          return (
            <div className="mx-20">
              <Link key={producto.id} to={`/item/${producto.id}`}>
                    <ItemDetail item={producto} />
                  </Link>
            </div>
          )
        })
        )
      }
      </div>
    </>
   );
}
 
export default ItemListContainer;