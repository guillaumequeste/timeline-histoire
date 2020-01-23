import React, { Component } from 'react'
import {Helmet} from "react-helmet"

class Contact extends Component {
  
    render () {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.title}</title>
                    <link rel="canonical" href={this.props.link} />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react histoire France" />
                    <meta name="description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
                    <meta property="og:title" content="Projet React Histoire de france" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://histoire.guillaumequeste.fr" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/histoire.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Projet React Histoire de france" />
                    <meta property="og:description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
                    <meta property="og:site_name" content="Projet React Histoire de france" />
                    <meta name="twitter:description" content="Frise historique répertoriant les dirigeants français au cours des siècles." />
                    <meta name="twitter:title" content="Projet React Histoire de france" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/histoire.png" />
                </Helmet>
            </div>
        )
    }
}

export default Contact