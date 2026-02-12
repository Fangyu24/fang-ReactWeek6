import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function Products() {
    const [productList, setProductList] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`${API_BASE}/api/${API_PATH}/products`)
                // console.log(res.data.products)
                setProductList(res.data.products)
            } catch (error) {
                console.log(error.response)
            }
        }
        getProduct()
    }, [])

const handleSubmit=(id)=>{
    navigate(`/product/${id}`);
}

    return (
        <div className="container">
            <div className="row">
                {
                    productList.map(product => {
                        return (
                            <div className="col-lg-4 mb-3" key={product.id}>
                                <div className="card h-100">
                                    <img src={product.imageUrl} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">價格：{product.price}</small>
                                        </p>
                                        <button className="btn btn-primary" 
                                        onClick={()=>handleSubmit(product.id)}>查看更多</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Products