import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../App.css';

class Footer extends Component {
    render () {
        return (
            <div className="bodyFooter">
                <div className="bFooter">
                    <div className="divFooter2">
                        <div className="linkFooter">
                            <Link to="/" className="lFooter">Accueil</Link>
                        </div>
                    </div>
                    <div className="divFooter1">
                        <div className="linkFooter">
                            <Link to="/partie_un" className="lFooter">1830 -> Aujourd'hui</Link>
                        </div>
                    </div>
                    <div className="divFooter2">
                        <div className="linkFooter">
                            <Link to="/partie_deux" className="lFooter">1589 -> 1830</Link>
                        </div>
                    </div>
                </div>
                <div className="bFooter">
                    <div className="divFooter2">
                        <div className="linkFooter">
                            <Link to="/partie_trois" className="lFooter">987 -> 1589</Link>
                        </div>
                    </div>
                    <div className="divFooter2">
                        <div className="linkFooter">
                        <Link to="/partie_quatre" className="lFooter">751 -> 987</Link>
                        </div>
                    </div>
                    <div className="divFooter2">
                        <div className="linkFooter">
                            <Link to="/partie_cinq" className="lFooter">428 -> 751</Link>
                        </div>
                    </div>
                    <div className="divFooter2">
                        <div className="linkFooter">
                            <Link to="/contact" className="lFooter">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer