import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between bg-amber-500 text-black'>
        <div className=' px-2 py-2'>
            <Link to='/'><img className='rounded-full' src='src/assets/LOGO-k.png' width={50} height={50} /></Link>
        </div>
        <div>
            <ul className='flex gap-4 px-2 py-2'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                {/* <li><Link>Product</Link></li>
                <li><Link>Cart</Link></li> */}
            </ul>
        </div>
    </div>
  )
}

export default Header