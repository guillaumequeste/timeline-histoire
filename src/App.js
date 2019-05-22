import React from 'react';
import './App.css';
import Header from './components/Header'
import 'react-vertical-timeline-component/style.min.css'
import { Link } from "react-router-dom"

const App = () => (
  <>
    <Header />
    <div className="accueil">
      <div className="liens">
      <div className="partie">
          <Link to="/partie_cinq">428 - 751</Link>
        </div>
        <div className="partie">
          <Link to="/partie_quatre">751 - 987</Link>
        </div>
        <div>
          <Link to="/partie_trois">987 - 1589</Link>
        </div>
        <div>
          <Link to="/partie_deux">1589 - 1830</Link>
        </div>
        <div>
          <Link to="/partie_un">1830 - Aujourd'hui</Link>
        </div>
      </div>
    </div>
  </>
)

export default App;
