//IMPORTS
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingleProductPage () {
    //DATA
    const { id } = useParams()

    //USE STATE
    
    

    //USE EFFECT
    const [singleProduct, setSingleProduct] = useState({})
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            console.log(res.data);
            setSingleProduct(res.data)
        })
    }, [])
    return (
        <div>
            <h1 className="text-white">{singleProduct.title}</h1>
        </div>
    )
}

