import './Categories.scss'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1667829705955-279308e7fc12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8ODM3ODg0OHx8ZW58MHx8fHx8" alt="" />
                <button>
                    <Link className='link' to={`/products/1`}>Women</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1602310795619-de40be0bd0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4Mzc4ODQ4fHxlbnwwfHx8fHw%3D" alt="" />
                <button><Link className='link' to={`/products/1`}>Men</Link></button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1635669088849-9190c5f964f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDc1ODIzfHxlbnwwfHx8fHw%3D" alt="" />
                <button><Link className='link' to={`/products/1`}>Devices</Link></button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <button><Link className='link' to={`/products/1`}>Accesssories</Link></button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.unsplash.com/photo-1617864064479-f203fc7897c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <button><Link className='link' to={`/products/1`}>gaming</Link></button>
                    </div>
                </div> 
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="" />
                <button><Link className='link' to={`/products/1`}>shoes</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Categories;