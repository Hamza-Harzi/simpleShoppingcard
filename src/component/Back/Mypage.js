import Main from './Main'
import Basket from './Basket'
import Search from './Search'
import products from './data'

const Mypage = () => {

   
  return (
    <main className='mainstyle'>
    <div>
    <Search></Search>
    </div>

    <div className='row2'>
    <Main products= {products}></Main>
    <Basket></Basket>
    </div>
    </main>
  )
}

export default Mypage