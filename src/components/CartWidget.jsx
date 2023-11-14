import {AiOutlineShoppingCart} from 'react-icons/ai'

const CartWidget = () => {
  return (
    <div className='flex relative w-fit'>
        <AiOutlineShoppingCart size={"1.6rem"}/>
        <span className='absolute -top-2 -right-2 px-[6px] text-xs bg-red-600 rounded-full'>0</span>
    </div>
  )
}

export default CartWidget