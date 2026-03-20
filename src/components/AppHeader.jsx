//IMPORT
import { Link, NavLink } from "react-router-dom"
export default function AppHeader() {


    return (
        /* Header */
        <header className="d-flex justify-content-center">
            {/* Navbar */}
            <nav className="py-3">

                {/* Navbar Item */}
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to = "/info" >Chi siamo</Link>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <Link to="./prodotti" className="nav-link">Scopri i nostri prodotti</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}