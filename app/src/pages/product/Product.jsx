import { useState } from "react"
import "./product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom"


const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const id = useParams().id

  const increaseItem = () => {
    setQuantity(prev => prev + 1)
  }

  const decreaseItem = () => {
    setQuantity((prev => prev === 1 ? 1 : prev - 1))
  }

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading 
        ? 'Loading...'
        : <>
            <div className="left">
                <div className="images">
                  <img 
                    src={import.meta.env.VITE_APP_API_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} 
                    alt="" 
                    onClick={e => setSelectedImg("img") }/>
                  <img 
                    src={import.meta.env.VITE_APP_API_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} 
                    alt="" 
                    onClick={e => setSelectedImg("img2") }/>
                </div>
                <div className="mainImg">
                  <img src={import.meta.env.VITE_APP_API_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{data?.attributes?.title}</h1>
                <span className="price">${data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>
                <div className="quantity">
                  <button onClick={decreaseItem}>-</button>
                  {quantity}
                  <button onClick={increaseItem}>+</button>
                </div>
                <button className="add">
                  <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                  <div className="item">
                    <FavoriteBorderIcon/> ADD TO WAIT LIST
                  </div>
                  <div className="item">
                    <BalanceIcon/> ADD TO COMPARE
                  </div>
                </div>
                <div className="info">
                  <span>Vendor: Polo</span>
                  <span>Product Type: T-shirt</span>
                  <span>Tag: T-shirt,Women,Top</span>
                </div>
                <hr />
                <div className="info">
                  <span>DESCRIPTION</span>
                  <hr />
                  <span>ADDITIONAL INFORMATION</span>
                  <hr />
                  <span>FAQ</span>
                </div>
          </div>
      </>}
    </div>
  )
}

export default Product;