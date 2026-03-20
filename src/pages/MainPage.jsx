export default function MainPage() {


    return (
        <>
            {/* Jumbotron */}
            <div className="jumbotron pt-5">
                <div className="container">

                    {/* Title */}
                    <h1 className="text-center text-black py-2">Altro che amazon!</h1>
                    <p className="text-body-tertiary fw-semibold">Scopri le migliori offerte per te.</p>

                    {/* Socials */}
                    <ul>
                        <li><i class="bi bi-instagram"></i></li>
                        <li><i class="bi bi-facebook"></i></li>
                        <li><i class="bi bi-youtube"></i></li>
                        <li><i class="bi bi-whatsapp"></i></li>
                        <li><i class="bi bi-tiktok"></i></li>
                    </ul>

                </div>
            </div>
        </>
    )
}