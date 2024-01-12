import { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContext'

const CartWidget = () => {

  const {itemsCount} = useContext(cartContext)

  return (
    <Link to={"/cart"} className='flex relative w-fit'>
        <AiOutlineShoppingCart size={"1.6rem"}/>
        <span className='absolute -top-2 -right-2 px-[6px] text-xs bg-red-600 rounded-full'>{itemsCount}</span>
    </Link>
  )
}

export default CartWidget