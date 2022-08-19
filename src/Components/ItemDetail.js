import ItemCount from "../Components/ItemCount/ItemCount"
const ItemDetail =({productos})=>{

    return(<>
    
    <div>
       {
           productos.map(c=> <ul key={c.id}>
           <h3>
               {c.nombre}

           </h3>
           <img src={c.img} width="160" height="160" alt="" /> 
           <ItemCount></ItemCount>
           </ul>)
       }
    </div>
    </>)

}

export default ItemDetail