import { useContext } from 'react'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

export const CartWidget = () => {

    const { cantidadCart, cart } = useContext(CartContext) // aca le digo q consuma la prop cantidadCart del cartcontext

    return (

        <Link to="/cart" className='cartWidget'>
            <AiOutlineShoppingCart/>
            <span>{cantidadCart()}</span>
        </Link>

    )
}

// className={cart.length === 0 ? 'cartWidget cartHidden' : 'cartWidget'
