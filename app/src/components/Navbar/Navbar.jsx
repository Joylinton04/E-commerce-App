import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon  from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlineIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Link } from 'react-router-dom';
import en from "../../assets/en.png"
import payment from "../../assets/payment.png"
import './Navbar.scss'
import { useState } from 'react';
import Cart from '../cart/Cart';

const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src={en} alt="" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Children</Link>
                </div>
            </div>
            <div className="center">
                <Link className='link' to="/">ECOM</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to="/">Homepage</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlineIcon/>
                    <div className="cartIcon" onClick={() => setOpen(!open)}>
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar;  