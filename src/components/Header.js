import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../App.css';

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <Link to="/">Accueil</Link>
                <Link to="/partie_quatre">656 - 987</Link>
                <Link to="/partie_trois">987 - 1589</Link>
                <Link to="/partie_deux">1589 - 1830</Link>
                <Link to="/partie_un">1830 - Aujourd'hui</Link>
            </div>
        )
    }
}

export default Header