
import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import getFetch from "../../Data/Data"
import ItemList from "../../Components/ItemList/ItemList"

fetch('https://corebiz-test.herokuapp.com/api/v1/products')
.then(response => response.json())
.then(data => console.log(data));
const ItemListContainer=()=>{

   

    const [products,setProducts]=useState([])   
    const [loading,setLoading]=useState(true)
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount(count +1)
    }
    const decrement=()=>{
        setCount(count -1)
    }
     useEffect(()=>{
         getFetch
         .then(res=>setProducts(res))
         .catch(err=>console.log("error :" + err))
         .finally(()=>setLoading(false))
     },[])



    return(<>
    <div className="Margen">
       <h1 className="letraTitulo"> The beer experience</h1>
       <img src="./img/patagonia.webp"  width="160" height="160" alt="cerveza-patagonia"></img>
       <div>
       <button onClick={increment} type="button" className="btn btn-dark">+</button>
       <button onClick={decrement} type="button" className="btn btn-dark">-</button>
       </div>
       
       <div className="fondoContador">{count}</div>
       </div>
       <div>
           {
               loading ? <span>Cargando cervezas🍻...</span>:
               products.map((cerv)=> <ItemList key={cerv.id} productos={cerv} ></ItemList>)
           }
       </div>
    </>
    )


}

export default ItemListContainer