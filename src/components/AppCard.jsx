export default function AppCard({cardId, cardImg, cardTitle, cardCategory, cardDescrption, cardPrice}) {



    return (

        /* Sigle Card */
        <div key={cardId} className="card cards-sizing col-12 col-md-6 col-lg-4 bg-light ">

            {/* Images */}
            <div className="img-box container my-3">
                <img src={cardImg} alt="" className="card-img-top" />
            </div>

            {/* Card Body */}
            <div className="card-body p-5">
                <h2 className="card-title fs-6">{cardTitle}</h2>
                <span className="text-body-tertiary sfw-bold">{cardCategory.toUpperCase()}</span>
                <p className="card-text d-none">{cardDescrption}</p>
            </div>

            {/* Card footer */}
            <div className="p-0 text-center">
                <ul className="list-group text-center">
                    <li className="list-group-item">€{cardPrice.toFixed(2)}</li>
                    <li className="list-group-item">rating</li>
                </ul>

                {/* Buy button */}
                <button className="btn btn-success my-3">Acquista</button>
            </div>


        </div>

    )
}