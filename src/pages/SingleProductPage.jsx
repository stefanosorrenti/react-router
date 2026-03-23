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
                {/* Single card section */}
                <section className="row text-dark bg-white rounded">

                    {/* Image*/}
                    <div className="col-12 col-md-6 text-center d-flex justify-content-center flex-column align-items-center ">

                        <h1 className="my-3">{singleProduct.title}</h1>
                        <div className="img-box my-3">
                            <img src={singleProduct.image} alt="Porduct Image" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="col-12 col-md-6 d-flex flex-column gap-2 py-2">
                        <span className="fw-bold fs-5">Descrizione:</span>
                        <p className="fs-5">{singleProduct.description}</p>
                        <span className="text-danger fs-3 fw-bold align-self-center">€{singleProduct.price}</span>
                        <button className="btn btn-success buttonStyle">Acquista subito</button>

                    </div>

                </section>
            </div>
            {/* SINGLE PRODUCT CARD */}

        </main>
    )
}

