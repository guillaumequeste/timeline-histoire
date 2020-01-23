import React from 'react';
import './App.css';
import Header from './components/Header'
import Helmet from './components/Helmet'
import 'react-vertical-timeline-component/style.min.css'
import { Link } from "react-router-dom"

const App = () => (
  <>
    <Header />
    <div className="accueil">
      <Helmet title={"Frise Histoire deFrance"}
              link={"http://histoire.guillaumequeste.fr"} />
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
