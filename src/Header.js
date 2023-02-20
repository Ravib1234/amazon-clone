import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';


function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>

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

        <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo 
            header__basketCount'>0

            </span>
        </div>

    </div>
  )
}

export default Header
