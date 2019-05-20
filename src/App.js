import React from 'react';
import './App.css';
import Header from './components/Header'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const App = () => (
  <>
    <Header />
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="14 mai 2017 - Aujourd'hui"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Emmanuel Macron</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              8ème président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/emmanuel_macron.jpg")} alt="emmanuel_macron"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="15 mai 2012 - 14 mai 2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">François Hollande</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              7ème président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/francois_hollande.jpg")} alt="francois_hollande"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="16 mai 2007 - 15 mai 2012"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Nicolas Sarkozy</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              6ème président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/nicolas_sarkozy.jpg")} alt="nicolas_sarkozy"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1995 - 2007"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Jacques Chirac</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              5ème président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/jacques_chirac.jpg")} alt="jacques_chirac"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1981 - 1995"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">François Mitterrand</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              4ème président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/francois_mitterrand.jpg")} alt="francois_mitterrand"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1974 - 1981"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Valéry Giscard d'Estaing</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              3ème président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/giscard.webp")} alt="giscard"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1969 - 1974"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Georges Pompidou</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              2ème président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/georges_pompidou.jpg")} alt="georges_pompidou"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1959 - 1969"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Général de Gaulle</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              1er président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/de_gaulle.jpg")} alt="de_gaulle"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1954 - 1959"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">René Coty</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              2ème président de la IV ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/rene_coty.jpg")} alt="rene_coty"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1947 - 1954"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Vincent Auriol</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              1er président de la IV ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/vincent_auriol.png")} alt="vincent_auriol"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="septembre 1944 - janvier 1947"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Gouvernement provisoire de la République française</h3>
            <h4 className="vertical-timeline-element-subtitle">(GPRF)</h4>
            <p>
              Régime de Vichy
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="juin 1943 - 9 septembre 1944"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Comité français de la Libération nationale</h3>
            <p>
              Régime de Vichy
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="octobre 1940 - juin 1943"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Conseil de défense de l'Empire et Comité national français</h3>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1932 - 1940"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Albert Lebrun</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              14ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/albert_lebrun.jpg")} alt="albert_lebrun"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1931 - 1932"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Paul Doumer</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              13ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/paul_doumer.jpg")} alt="paul_doumer"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1924 - 1931"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Gaston Doumergue</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              12ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/gaston_doumergue.jpg")} alt="gaston_doumergue"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1920 - 1924"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Alexandre Millerand</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              11ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/alexandre_millerand.jpg")} alt="alexandre_millerand"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1920"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Paul Deschanel</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              10ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/paul_deschanel.jpg")} alt="paul_deschanel"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1913 - 1920"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Raymond Poincaré</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              9ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/raymond_poincare.jpg")} alt="raymond_poincare"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1906 - 1913"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Armand Fallières</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              8ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/armand_fallieres.jpg")} alt="armand_fallieres"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1899 - 1906"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Emile Loubet</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              7ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/emile_loubet.jpg")} alt="emile_loubet"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1895 - 1899"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Félix Faure</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              6ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/felix_faure.jpg")} alt="felix_faure"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1894 - 1895"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Jean Casimir-Perier</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              5ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/perier.jpg")} alt="perier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1887 - 1894"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Sadi Carnot</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              4ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/sadi_carnot.jpg")} alt="sadi_carnot"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1879 - 1887"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Jules Grévy</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              3ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/jules_grevy.jpg")} alt="jules_grevy"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1873 - 1879"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Patrice de Mac Mahon</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              2ème président de la III ème République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/mac_mahon.jpg")} alt="mac_mahon"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1871 - 1873"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Adolphe Thiers</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              Chef du pouvoir exécutif (1871) puis 1er président de la III ème République (1871 - 1873)
            </p>
          </div>
          <div className="img">
            <img src={require("./img/adolphe_thiers.jpg")} alt="adolphe_thiers"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="26 mars 1871 - 22 mai 1871"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Commune de Paris</h3>
            <p>
              III ème République
            </p>
            <p>
              Pouvoir insurrectionnel limité à la ville de Paris pendant que le Gouvernement de Versailles est théoriquement souverain sur le reste du territoire.
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="4 septembre 1870 - 12 janvier 1871"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Révolution de 1870</h3>
            <p>
              III ème République
            </p>
            <p>
              Gouvernement de la Défense nationale par Louis-Jules Trochu
            </p>
          </div>
          <div className="img">
            <img src={require("./img/trochu.png")} alt="trochu"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2 janvier 1870 - 4 septembre 1870"
        iconStyle={{ background: 'rgb(87, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Empire parlementaire</h3>
            <p>
              Second Empire
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2 décembre 1852 - 27 décembre 1869"
        iconStyle={{ background: 'rgb(87, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Empire autoritaire</h3>
            <p>
              Second Empire
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1848 - 1852"
        iconStyle={{ background: 'rgb(20, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis-Napoléon Bonaparte</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              Deuxième République
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_napoleon_bonaparte.jpg")} alt="louis_napoleon_bonaparte"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="28 juin 1848 - 20 décembre 1848"
        iconStyle={{ background: 'rgb(20, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Gouvernement du Conseil exécutif</h3>
            <p>
              Deuxième République
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="24 juin 1848 - 28 juin 1848"
        iconStyle={{ background: 'rgb(20, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Présidence de l'Assemblée constituante</h3>
            <p>
              Deuxième République
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="10 mai 1848 - 24 juin 1848"
        iconStyle={{ background: 'rgb(20, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Gouvernement du Conseil exécutif</h3>
            <p>
              Deuxième République
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="9 mai 1848 - 10 mai 1848"
        iconStyle={{ background: 'rgb(20, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Présidence de l'Assemblée constituante</h3>
            <p>
              Deuxième République
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="24 février 1848 - 9 mai 1848"
        iconStyle={{ background: 'rgb(20, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Gouvernement provisoire de la République</h3>
            <p>
              Deuxième République
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1er août 1830 - 28 février 1848"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis-Philippe Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Français</h4>
            <p>
              Lieutenant général du royaume puis Roi des Français - Les Trois Glorieuses et la Monarchie de juillet
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_philippe_premier.jpg")} alt="louis_philippe_premier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="29 juillet 1830 - 1er août 1830"
        iconStyle={{ background: 'rgb(189, 60, 50)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Commission municipale</h3>
            <p>
              Les Trois Glorieuses et la Monarchie de juillet
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="16 septembre 1824 - 29 juillet 1830"
        iconStyle={{ background: 'rgb(33, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles X</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Seconde Restauration
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_X.jpg")} alt="charles_X"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="8 juillet 1815 - 16 septembre 1824"
        iconStyle={{ background: 'rgb(33, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis XVIII</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Seconde Restauration
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_XVIII.jpg")} alt="louis_XVIII"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="8 juillet 1815 - 16 septembre 1824"
        iconStyle={{ background: 'rgb(1, 1, 1)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Premier Empire</h3>
            <p>
              Période dite des Cent-Jours
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1814 - 1815"
        iconStyle={{ background: 'rgb(100, 100, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis XVIII</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Première Restauration
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_XVIII.jpg")} alt="louis_XVIII"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1814"
        iconStyle={{ background: 'rgb(200, 200, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Napoléon II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Empereur</h4>
            <p>
              Premier Empire
            </p>
          </div>
          <div className="img">
            <img src={require("./img/napoleon_II.jpg")} alt="napoleon_II"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="18 mai 1804 - 6 avril 1814"
        iconStyle={{ background: 'rgb(200, 200, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Napoléon Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Empereur</h4>
            <p>
              Premier Empire
            </p>
          </div>
          <div className="img">
            <img src={require("./img/napoleon_I.jpg")} alt="napoleon_I"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1799 - 1804"
        iconStyle={{ background: 'rgb(300, 300, 300)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Consulat</h3>
            <p>
              Première République
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2 novembre 1795 - 9 novembre 1799"
        iconStyle={{ background: 'rgb(300, 300, 300)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Directoire</h3>
            <p>
              Première République
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="21 septembre 1792 - 26 octobre 1795"
        iconStyle={{ background: 'rgb(300, 300, 300)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Convention nationale</h3>
            <p>
              Première République
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1774 - 1792"
        iconStyle={{ background: 'rgb(50, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis XVI</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Bourbons
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_xvi.webp")} alt="louis_xvi"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1715 - 1774"
        iconStyle={{ background: 'rgb(50, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis XV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Bourbons
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_xv.jpg")} alt="louis_xv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1643 - 1715"
        iconStyle={{ background: 'rgb(50, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis XIV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Bourbons
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_xiv.webp")} alt="louis_xiv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1610 - 1643"
        iconStyle={{ background: 'rgb(50, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis XIII</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Bourbons
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_xiii.jpg")} alt="louis_xiii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1589 - 1610"
        iconStyle={{ background: 'rgb(50, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Henri IV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Bourbons
            </p>
          </div>
          <div className="img">
            <img src={require("./img/henri_iv.jpg")} alt="henri_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1574 - 1589"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Henri III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/henri_iii.jpg")} alt="henri_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1560 - 1574"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles IX</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_ix.jpg")} alt="charles_ix"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1559 - 1560"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">François II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/francois_ii.jpg")} alt="francois_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1547 - 1559"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Henri II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/henri_ii.jpg")} alt="henri_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1515 - 1547"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">François Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/francois_ier.jpg")} alt="francois_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1498 - 1515"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis XII</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_xii.jpg")} alt="louis_xii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1483 - 1498"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles VIII</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_viii.jpg")} alt="charles_viii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1461 - 1483"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis XI</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_xi.jpg")} alt="louis_xi"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1422 - 1461"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles VII</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_vii.jpg")} alt="charles_vii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1380 - 1422"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles VI</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_vi.jpg")} alt="charles_vi"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1364 - 1380"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles V</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_v.jpg")} alt="charles_v"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1350 - 1364"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Jean II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/jean_ii.jpg")} alt="jean_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1328 - 1350"
        iconStyle={{ background: 'rgb(200, 150, 100)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Philippe VI</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Valois
            </p>
          </div>
          <div className="img">
            <img src={require("./img/philippe_vi.jpg")} alt="philippe_vi"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1322 - 1328"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles IV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_iv.jpeg")} alt="charles_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1316 - 1322"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Philippe V</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/philippe_v.jpg")} alt="philippe_v"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1316"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Jean Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/jean_ier.jpeg")} alt="jean_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1314 - 1316"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis X</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_x.jpeg")} alt="louis_x"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1285 - 1314"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Philippe IV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/philippe_iv.jpg")} alt="philippe_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1270 - 1285"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Philippe III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/philippe_iii.jpeg")} alt="philippe_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1226 - 1270"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis IX</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_ix.jpeg")} alt="louis_ix"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1223 - 1226"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis VIII</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_viii.jpg")} alt="louis_viii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1180 - 1223"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Philippe II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/philippe_ii.jpeg")} alt="philippe_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1137 - 1180"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis VII</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_vii.jpeg")} alt="louis_vii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1108 - 1137"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis VI</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_vi.jpeg")} alt="louis_vi"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1060 - 1108"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Philippe Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/philippe_ier.jpeg")} alt="philippe_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1031 - 1060"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Henri Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/henri_ier.jpeg")} alt="henri_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="996 - 1031"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Robert II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/robert_ii.jpeg")} alt="robert_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="987 - 996"
        iconStyle={{ background: 'rgb(100, 150, 200)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Hugues Capet</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/hugues_capet.jpeg")} alt="hugues_capet"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="986 - 987"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis V</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_v.jpeg")} alt="louis_v"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="954 - 986"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Lothaire</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/lothaire.jpg")} alt="lothaire"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="936 - 954"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis IV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_iv.jpg")} alt="louis_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="923 - 936"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Raoul Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/raoul_ier.jpeg")} alt="raoul_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="922 - 923"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Robert Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/robert_ier.jpeg")} alt="robert_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="898 - 922"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_iii.jpeg")} alt="charles_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="887 - 898"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Eudes</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/eudes.jpeg")} alt="eudes"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="884 - 887"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles le Gros</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_le_gros.jpeg")} alt="charles_le_gros"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="879 - 884"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis III et Carloman II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_iii.jpeg")} alt="louis_iii"></img>
          </div>
          <div className="img">
            <img src={require("./img/carloman_ii.jpeg")} alt="carloman_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="877 - 879"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_ii.jpeg")} alt="louis_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="840 - 877"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charles II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charles_ii.jpeg")} alt="charles_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="814 - 840"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis le Pieux</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/louis_le_pieux.jpeg")} alt="louis_le_pieux"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="768 - 814"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Charlemagne</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/charlemagne.jpeg")} alt="charlemagne"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="751 - 768"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Pépin le Bref</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/pepin_le_bref.jpeg")} alt="pepin_le_bref"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="743 - 751"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Childéric III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/childeric_iii.jpeg")} alt="childeric_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="737 - 743"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Interrègne</h3>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="721 - 737"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Thierry IV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/thierry_iv.jpg")} alt="thierry_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="715 - 721"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Chilpéric II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/chilperic_ii.jpg")} alt="chilperic_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="711 - 715"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Dagobert III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/dagobert_iii.jpg")} alt="dagobert_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="695 - 711"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Childebert IV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/childebert_iv.jpg")} alt="childebert_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="691 - 695"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clovis IV</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/clovis_iv.jpeg")} alt="clovis_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="679 - 691"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Thierry III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/thierry_iii.jpeg")} alt="thierry_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="676 - 679"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Dagobert II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/dagobert_ii.jpeg")} alt="dagobert_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="675 - 676"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clovis III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/clovis_iii.jpg")} alt="clovis_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="673 - 675"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Childéric II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/childeric_ii.jpg")} alt="childeric_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="663 - 673"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clotaire III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("./img/clotaire_iii.jpg")} alt="clotaire_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      



  

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      />

    </VerticalTimeline>
  </>
)

export default App;
