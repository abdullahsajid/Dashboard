import products from '../products.json'
import { Link } from 'react-router-dom'
const ViewAllProduct = () => {
    
    return (
        <div className='col-12'>
            <div className="card">
                <div className="row p-24">
                    <div className="col-12">
                        <h2>Products</h2>
                        <hr />
                    </div>
                    {products.map((item,index) =>(
                        <div key={index} className="col-12 col-md-4 col-lg-4" style={{cursor:'pointer'}}>
                            <Link to={`/store/product/${item.productId}`} style={{textDecoration:"none"}}>
                                <div className="card w-100 h-100" style={{width:"18rem"}}>
                                    <img src={`${item.img}`} class="card-img-top p-1 rounded w-100 h-100" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.category}</p>
                                            <a href="#" className="btn btn-dark">PKR {item.cost}</a>
                                        </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewAllProduct
