import Button from "react-bootstrap/Button";
import { useState } from "react"
import Card from "react-bootstrap/Card"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemList.css"

const ItemList = ({ productos }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (<>

    <div className="recuadroCards" style={{ width: "10rem" }}>
      <h4>Stock {productos.stock}</h4>
      <img src={productos.img} className="card-img-top" width="150" height="150" alt="..." />
      <Button className="btn-dark" onClick={increment} disabled={count >= productos.stock} >+</Button>
      <div className="">{count}</div>

      <Button className="btn-dark" onClick={decrement} disabled={count < 1} >-</Button>
      <div className="card-body">

      </div>
    </div>
  </>
  )
}

export default ItemList;