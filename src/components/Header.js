import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../App.css';

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <Link to="/" className="link">Accueil</Link>
                <Link to="/partie_un" className="link">1830 -> Aujourd'hui</Link>
                <Link to="/partie_deux" className="link">1589 -> 1830</Link>
                <Link to="/partie_trois" className="link">987 -> 1589</Link>
                <Link to="/partie_quatre" className="link">751 -> 987</Link>
                <Link to="/partie_cinq" className="link">428 -> 751</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>

        )
    }
}

export default Header