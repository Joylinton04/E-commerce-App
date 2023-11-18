import { useParams } from "react-router-dom"
import List from "../../components/List/List"
import "./products.scss"
import { useState } from "react"
import useFetch from "../../hooks/useFetch"

const Products = () => {
  const id = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(800)
  const [sort, setSort] = useState(null)
  const [selectedSubCat, setSelectedSubCat] = useState([])

  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${id}`)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked

    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value] 
        : selectedSubCat.filter(item => item !== value))
  }


  return (
    <div className='Products'>
      <div className="left">
        <div className="filterItem">
          <h1>Product Categories</h1>
          {data?.map(item => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" value={item.id} id={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
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
        <List id={id} maxPrice={maxPrice} sort={sort} subCat={selectedSubCat}/>
      </div>
    </div>
  )
}

export default Products