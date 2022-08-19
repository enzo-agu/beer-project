import  Button  from "react-bootstrap/Button";
import { useState } from "react"

const ItemCount = ()=>{
    const[count,setCount]=useState(0)
    const[product,setProduct]=useState([])

    const increment=()=>{
        setCount(count +1)
       
        }
        const decrement=()=>{
            setCount(count -1)
        }
return(

<>
  <Button className="btn-dark" onClick={increment} disabled={count>product.stock } >+</Button>
  <div className="">{count}</div>

  <Button className="btn-dark" onClick={decrement} disabled={count <1} >-</Button>

 
</>

)
}

export default ItemCount;