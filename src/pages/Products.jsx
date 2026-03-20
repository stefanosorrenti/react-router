//IMPORTS
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function Products() {
    //DATA


    //USE STATE
    const [products, setProducts] = useState([]) //Variabile di stato per rendere reattive i miei dati
    //USE EFFECT
    useEffect(() => {

        axios.get('https://fakestoreapi.com/products') //Uso AXIOS per la chaimata ajax
            .then(res => { //Qui gestisco la risposta
                //console.log(res.data)
                setProducts(res.data) //Imposto la mia variabile di statao uguale ai dati dela risposta
            })

            .catch(err => { //Qui gestisco eventuali errori 
                alert(`Qualcosa è andato storto con le API. 
                    ${err}`) //Alert in caso di errore
            })


    }, [])





    return (

        /* Card sction */
        <section>
            {/* Title */}
            <h1>I nostri bestseller</h1>

            <div className="container">
                <div className="row">

                    {/* Dynamic Cards render */}
                    {products.map(product => (
                        
                        /* Sigle Card */
                        <div key={product.id} className="card col-12 col-md-6 col-lg-3 col-xl-2">

                            {/* Images */}
                            <div className="img-box">
                                <img src={product.image} alt="" className="card-img-top" />
                            </div>

                            {/* Card Body */}
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <span>{product.category.toUpperCase()}</span>
                                <p className="card-text">{product.description}</p>
                            </div>

                            {/* Card footer */}
                            <div className="card-footer">
                                <ul className="list-group">
                                    <li className="list-group-item">€{product.price.toFixed(2)}</li>
                                    <li className="list-group-item">rating</li>
                                </ul>

                                {/* Buy button */}
                                <button className="btn btn-primary">Acquista</button>
                            </div>


                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}