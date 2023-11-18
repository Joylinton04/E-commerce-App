import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline"

const Cart = () => {
    const data = [
        {
          id:1,
          img: "https://images.unsplash.com/photo-1602086752809-de1588f274f0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img2: "https://images.unsplash.com/photo-1602310795619-de40be0bd0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4Mzc4ODQ4fHxlbnwwfHx8fHw%3D",
          title: "Fashion",
          isNew:true,
          oldPrice: 19,
          price: 12,
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto soluta nesciunt iure beatae. Earum voluptatum inventore consectetur in? Facere fugiat temporibus cumque odio consequuntur unde sequi eveniet sapiente quidem hic?",
        },
        {
          id:2,
          img: "https://images.unsplash.com/photo-1576417677416-6ca3adfb5435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzODM5NzQyfHxlbnwwfHx8fHw%3D",
          img2: "https://images.unsplash.com/photo-1553859943-a02c5418b798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwzODM5NzQyfHxlbnwwfHx8fHw%3D",
          title: "Club T-shirt",
          isNew:true,
          oldPrice: 19,
          price: 12,
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto soluta nesciunt iure beatae. Earum voluptatum inventore consectetur in? Facere fugiat temporibus cumque odio consequuntur unde sequi eveniet sapiente quidem hic?",
        },
    ]

  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {data?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete"/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart;