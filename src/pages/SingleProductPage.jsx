//IMPORTS
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";



export default function SingleProductPage () {
    //DATA
    const { id } = useParams();
    console.log(id);
    

    //AXIOS CALL
    return (
        <div>
            <h1 className="text-white">PAGINA PRODOTTO {id}</h1>
        </div>
    )
}