import { useEffect,useState } from "react"
import axios from "axios"
import { axiosRequest } from "../axiosRequest"

const useFetch =  (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
    
        const fetchData = async () => {
          try {
            setLoading(true)
            const { data } = await axiosRequest.get(url)
            setData(data.data)
          } catch (err) {
            console.log(err);
            setError(true)
          } finally {
            setLoading(false)
          }
        }
    
        fetchData()
      },[url])
      return { data, loading, error }
}

export default useFetch;