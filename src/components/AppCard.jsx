export default function AppCard({cardId, cardImg, cardTitle, cardCategory, cardDescrption, cardPrice}) {



    return (

        /* Sigle Card */
        <div key={cardId} className="card col-12 col-md-6 col-lg-3">

            {/* Images */}
            <div className="img-box">
                <img src={cardImg} alt="" className="card-img-top" />
            </div>

            {/* Card Body */}
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <span>{cardCategory.toUpperCase()}</span>
                <p className="card-text">{cardDescrption}</p>
            </div>

            {/* Card footer */}
            <div className="card-footer">
                <ul className="list-group">
                    <li className="list-group-item">€{cardPrice.toFixed(2)}</li>
                    <li className="list-group-item">rating</li>
                </ul>

                {/* Buy button */}
                <button className="btn btn-primary">Acquista</button>
            </div>


        </div>

    )
}