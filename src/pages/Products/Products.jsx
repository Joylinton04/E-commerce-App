import { useParams } from "react-router-dom"
import List from "../../components/List/List"
import "./products.scss"
import { useState } from "react"

const Products = () => {
  const id = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)


  return (
    <div className='Products'>
      <div className="left">
        <div className="filterItem">
          <h1>Product Categories</h1>
          <div className="inputItem">
            <input type="checkbox" value={1} id="1"/>
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" value={1} id="2"/>
            <label htmlFor="2">Games</label>
          </div>
        </div>
        <div className="filterItem">
          <h1>Filter by price</h1>
          <div className="inputItem">
            <span>0</span>
            <input 
              type="range"
              min={0} 
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h1>Sort by</h1>
          <div className="inputItem">
            <input 
              type="radio" 
              value="asc" 
              id="asc"
              name="price"
              onChange={(e) => setSort('asc')}
              />
            <label htmlFor="asc">Price(lowest first)</label>
          </div>
          <div className="inputItem">
            <input 
              type="radio" 
              value="desc" 
              id="desc" 
              name="price"
              onChange={(e) => setSort('desc')}
              />
            <label htmlFor="desc">Price(highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://images.unsplash.com/photo-1640878588131-4a5f39371d0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdyYW5kJTIwdGhlZnQlMjBhdXRvfGVufDB8fDB8fHww" alt="" />
        <List id={id} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products