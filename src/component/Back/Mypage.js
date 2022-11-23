import Main from './Main'
import Basket from './Basket'
import Search from './Search'
import data from './data'
import { useState } from 'react'

const Mypage = () => {
const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
 
  return (
    <main className='mainstyle'>
    <div>
    <Search></Search>
    </div>

    <div className='row2'>
    <Main onAdd={onAdd} products= {products}></Main>
    <Basket onAdd={onAdd} cartItems={cartItems} ></Basket>
    </div>
    </main>
  )
}

export default Mypage