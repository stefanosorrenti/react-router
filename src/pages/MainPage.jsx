export default function MainPage() {


    return (
        <>
            {/* Jumbotron */}
            <div className="jumbotron pt-5">
                <div className="container">

                    {/* Title */}
                    <h1 className="text-center text-black py-2">Altro che amazon!</h1>
                    <p className="text-body-tertiary fw-semibold">Scopri le migliori offerte per te.</p>

                    {/* LOGIN */}

                    <div className="login">
                        <form>
                            {/* EMAIL INPUT */}
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" />

                            {/* PASSWORD INPUT */}
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />

                            {/* LOGIN BUTTONS */}
                            <button>Accedi</button>
                            <button>Sei nuovo? Registrati!</button>

                        </form>
                    </div>

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