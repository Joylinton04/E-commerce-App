import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type="featured product"/>
      <Categories/>
      <FeaturedProducts type="trending product"/>
      <Contact/>
    </div>
  )
}

export default Home;