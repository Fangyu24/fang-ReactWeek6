import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function SingleProduct() {
const {id}=useParams()
const [product,setProduct]=useState()

useEffect(()=>{
    const handleSubmit = async(id)=>{
        try {
            const response= await axios.get(`${API_BASE}/api/${API_PATH}/product/${id}`)
            setProduct(response.data.product)
            
        } catch (error) {
            console.log(error.message)
        }

    }
    handleSubmit(id)
},[id])

const addCart= async(id,qty=1)=>{
    const data={
        product_id:id,
        qty
    }
    try {
        const res= await axios.post(`${API_BASE}/api/${API_PATH}/cart`,{data})
        console.log(res.data)
        
    } catch (error) {
        console.log(error.message)
    }
}


    return !product?<h2>查無產品</h2>
    :(
        <div className="container mt-3">
            <div className="card h-100"style={{width:"18rem"}}>
                <img src={product.imageUrl} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">價格：{product.price}</small>
                    </p>
                    <button className="btn btn-primary"
                        onClick={() => addCart(product.id)}>加入購物車</button>
                </div>
            </div>
        </div>
    )
}
export default SingleProduct