import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider"


function Header() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
        <Link to="/">
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>

        </Link>
        
        <div
        className='header_search'>
            <input
            className='header_searchInput' type="text" />
            <SearchIcon 
            className='header_searchIcon'/>
        </div>

        <div className='header__option'>

            <span
            className='header__optionLineOne'>Hello Guest</span>

            <span
            className='header__optionLineTwo'>Sign In</span>

        </div>

        <div className='header__option'>

            <span
            className='header__optionLineOne'>Returns</span>

            <span
            className='header__optionLineTwo'>Orders</span>

        </div>

        <div className='header__option'>

            <span
            className='header__optionLineOne'>Your</span>

            <span
            className='header__optionLineTwo'>Prime</span>

        </div>

        <Link to="/checkout">
        <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo 
            header__basketCount'>0

            </span>
        </div>
        </Link>

    </div>
  )
}

export default Header
