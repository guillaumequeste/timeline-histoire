import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <Link to="/">Accueil</Link>
            </div>
        )
    }
}

export default Header