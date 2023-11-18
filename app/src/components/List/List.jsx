import "./List.scss"
import Card from "../../components/card/Card"
import useFetch from "../../hooks/useFetch"

const List = ({id, maxPrice, sort, subCat}) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${id}
    ${subCat.map(cat => `&[filters][sub_categories][id][$eq]=${cat}`)}&[filters][price][$lte]=${maxPrice}
    &sort=price:${sort}`
    );
  console.log(data)

  return (
    <div className="list">
        {loading 
         ? <p>loading...</p>
         : data?.map(item => (
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List;