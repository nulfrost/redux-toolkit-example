import React from 'react';
import { addItemToCart, clearCart } from './cartSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [item, setItem] = React.useState("")
  const [quantity, setQuantity] = React.useState(0)
  return (
    <>
      <ul>
        {cart.length === 0 ? <span>No items in cart!</span> : cart.map(item => {
          return <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        })}
      </ul>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addItemToCart({ name: item, quantity }))
        setItem("")
        setQuantity(0)
      }}>
        <input type="text" value={item} onChange={e => setItem(e.target.value)} />
        <button type="button" onClick={() => setQuantity(quantity => quantity + 1)}>+ - {quantity}</button>
        <button type="submit">Add item to cart</button>
        <button type="button" onClick={() => dispatch(clearCart())}>Clear cart</button>
      </form>
    </>
  )
}



export default App;
