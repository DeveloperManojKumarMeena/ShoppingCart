import { Children, createContext,  useState } from "react"

 export const CartCon = createContext();
 
function CartContext({Children}) {
 
  const [Cart, setCart] = useState([])

//add Product
const addToCart =(product)=>{

    setCart((prev)=>{
      const existing = prev.find((item)=> item.id === product.id);

      if(existing){
        return prev.map((item)=>item.id === product.id ? {...item , qty: item.qty+1} : item)
      }
      return [...prev, {...product, qty: 1}]
    })
}

  return (
    <CartCon.Provider value={{Cart,setCart,addToCart}}>
      {Children}
    </CartCon.Provider>
  )
}

export default CartContext

