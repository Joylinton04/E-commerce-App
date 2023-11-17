import './footer.scss'
import payment from "../../assets/payment.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="top">
          <div className="item">
              <h1>Categories</h1>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
          </div>
          <div className="item">
              <h1>Link</h1>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
              <span>Compare</span>
              <span>Cookies</span>
          </div>
          <div className="item">
              <h1>About</h1>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro temporibus velit dicta ipsam, sint dolorem? Adipisci tempora fuga corporis beatae dolorum laboriosam impedit saepe culpa quod velit, assumenda doloribus cumque.</span>
          </div>
          <div className="item">
              <h1>Contact</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum omnis itaque quaerat magni ducimus deleniti adipisci provident, quos, et inventore maiores, sint ab minus magnam voluptatum recusandae? Assumenda, ullam.</span>
          </div>
        </div>
      </div>
      <div className="bottom">
          <div className="left">
            <span className='logo'>ECOM</span>
            <span className='copyright'>&copy; copyright 2023. All Rights Reserved</span>
          </div>
          <div className="right">
            <img src={payment} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Footer;