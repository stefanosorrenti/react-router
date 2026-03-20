export default function AppHeader() {


    return (
        <header className="d-flex justify-content-center">
            <nav className="py-3">

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="./info" className="nav-link">Chi siamo?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="./prodotti" className="nav-link">Scopri i nostri prodotti</a>
                    </li>
                </ul>

            </nav>
        </header>
    )
}