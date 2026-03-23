//IMPORTS
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { main } from "@popperjs/core";

export default function SingleProductPage() {
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
        /* Main */
        <main>
            <div className="container">
                <div className="row text-dark bg-white">

                    <div className="col-12 text-center">
                        <div className="img-box">
                            <img src={singleProduct.image} alt="Porduct Image" />
                        </div>
                        <h1>{singleProduct.title}</h1>
                    </div>

                    <div className="col-12">
                        <p>{singleProduct.description}</p>
                        <span>€{singleProduct.price}</span>
                    </div>

                </div>
            </div>
            {/* SINGLE PRODUCT CARD */}

        </main>
    )
}

