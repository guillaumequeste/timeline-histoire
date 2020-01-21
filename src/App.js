import React from 'react';
import './App.css';
import Header from './components/Header'
import 'react-vertical-timeline-component/style.min.css'
import { Link } from "react-router-dom"
import {Helmet} from "react-helmet"

const App = () => (
  <>
    <Header />
    <div className="accueil">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Frise Histoire de France</title>
        <link rel="canonical" href="http://histoire.guillaumequeste.fr" />
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
      <div className="liens">
        <div className="part un">
          <Link to="/partie_un" className="linkHome">1830 - Aujourd'hui</Link>
        </div>
        <div className="part deux">
          <Link to="/partie_deux" className="linkHome">1589 - 1830</Link>
        </div>
        <div className="part trois">
          <Link to="/partie_trois" className="linkHome">987 - 1589</Link>
        </div>
        <div className="part quatre">
          <Link to="/partie_quatre" className="linkHome">751 - 987</Link>
        </div>
        <div className="part cinq">
          <Link to="/partie_cinq" className="linkHome">428 - 751</Link>
        </div>
      </div>
      <img src={require("./img/couronne.svg")} alt="couronne" className="couronne png"></img>
      <img src={require("./img/napoleon_ier.png")} alt="napoleon_ier" className="napoleon_ier png"></img>
      <img src={require("./img/marianne.png")} alt="marianne" className="marianne png"></img>
      <img src={require("./img/louis_xiv.png")} alt="louis_xiv" className="louis_xiv png"></img>
    </div>
  </>
)

export default App;
