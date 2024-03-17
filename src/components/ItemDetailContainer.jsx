//agrupador de componentes

import { useEffect, useState } from "react";
import products from '../utils/MockAsync.json';
import { fakeApiCall } from "../utils/fakeApiCall";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {

  const [productsCharged, setProductsCharged] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams();


  useEffect(() => {
    setLoading(true)
    fakeApiCall(products).then(resp => { setProductsCharged(resp); setLoading(false) })


  }, [])


  if (loading) return ''


  const getProductById = (productId) => {
    if(productId) {
      const productoElegido = productsCharged.productos.filter((product) => product.id === parseInt(productId));
       return  productoElegido;
    }
  }

  const product = getProductById(id);

  console.log(product);
  return (<>
    <div className="justify-center flex">
      {
        <ItemDetail item={product[0]}/>
      }
    </div>


  </>);
}

export default ItemDetailContainer;