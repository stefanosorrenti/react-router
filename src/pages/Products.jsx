//IMPORTS
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
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

            <h1>I nostri bestseller</h1>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <img src={products[0].image} alt="" className="card-img-top" />

                        <div className="card-body">
                            <h2 className="card-title">Prodotto</h2>
                            <span>Categoria</span>
                            <p className="card-text">Descrizione prodotti</p>
                        </div>

                        <div className="card-footer">
                            <ul className="list-group">
                                <li className="list-group-item">prezzo</li>
                                <li className="list-group-item"> rating</li>
                            </ul>

                            <button>Acquista</button>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}