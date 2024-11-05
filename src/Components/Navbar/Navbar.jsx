import React, { useContext, useState } from 'react'
import './Navar.css'
import logo from '../Assests/new-logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Contexts/ShopContext'


 const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} =useContext(ShopContext);
  return (
    
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p></p>
        </div>
            <ul className='col-md-4 nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none' ,color:'#626262'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none' ,color:'#626262'}}  to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none' ,color:'#626262'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className=' col-md-4 nav-login-cart'>
            <Link style={{textDecoration:'none'}}  to='/login'><button>Login</button></Link>
            <Link style={{textDecoration:'none'}}  to='/cart'><img src={cart_icon} alt=''/></Link>
            
            <div className='nav-cart-count'> {getTotalCartItems()} 
            </div>
            </div>
            
    </div>
    
  )
}

export default Navbar