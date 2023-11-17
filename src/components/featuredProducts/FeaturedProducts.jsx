import "./FeaturedProducts.scss"
import Card from "../card/Card"

const FeaturedProducts = ({type}) => {

  const data = [
    {
      id:1,
      img: "https://images.unsplash.com/photo-1602086752809-de1588f274f0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1602310795619-de40be0bd0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4Mzc4ODQ4fHxlbnwwfHx8fHw%3D",
      title: "Fashion",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id:2,
      img: "https://images.unsplash.com/photo-1576417677416-6ca3adfb5435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzODM5NzQyfHxlbnwwfHx8fHw%3D",
      img2: "https://images.unsplash.com/photo-1553859943-a02c5418b798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwzODM5NzQyfHxlbnwwfHx8fHw%3D",
      title: "Club T-shirt",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id:3,
      img: "https://images.unsplash.com/photo-1613783589931-50848c408051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8ODM3ODg0OHx8ZW58MHx8fHx8",
      img2: "https://images.unsplash.com/photo-1665112596214-5f024e093c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ODM3ODg0OHx8ZW58MHx8fHx8",
      title: "Long Sleeve",
      isNew:false,
      oldPrice: 19,
      price: 12,
    },
    {
      id:4,
      img: "https://images.unsplash.com/photo-1602086752809-de1588f274f0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1602310795619-de40be0bd0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4Mzc4ODQ4fHxlbnwwfHx8fHw%3D",
      title: "Fashion",
      isNew:false,
      oldPrice: 19,
      price: 12,
    },
  ]

  return (
    <div className="featuredProducts">
        <div className="top">
          <h1>{type}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure est accusamus rerum ab in voluptas impedit quaerat magnam labore. Accusantium itaque dignissimos, veritatis adipisci ipsum aliquid voluptatem quod hic?</p>
        </div>
        <div className="bottom">
          {data.map(item => (
            <Card item={item} key={item.id}/>
          ))}
        </div>
    </div>
  )
}

export default FeaturedProducts;