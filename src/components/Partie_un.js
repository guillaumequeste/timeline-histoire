import React from 'react';
import '../App.css';
import Header from './Header'
import Helmet from './Helmet'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Partie_un = () => (
  <>
    <Helmet title={"1830 -> Aujourd'hui"}
              link={"http://histoire.guillaumequeste.fr/partie_un"} />
    <Header />
    <h1 className="dateTop">Aujourd'hui</h1>
    <VerticalTimeline className="timeline">
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
            <img src={require("../img/emmanuel_macron.jpg")} alt="emmanuel_macron"></img>
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
            <img src={require("../img/francois_hollande.jpg")} alt="francois_hollande"></img>
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
            <img src={require("../img/nicolas_sarkozy.jpg")} alt="nicolas_sarkozy"></img>
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
            <img src={require("../img/jacques_chirac.jpg")} alt="jacques_chirac"></img>
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
            <img src={require("../img/francois_mitterrand.jpg")} alt="francois_mitterrand"></img>
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
            <img src={require("../img/giscard.webp")} alt="giscard"></img>
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
            <img src={require("../img/georges_pompidou.jpg")} alt="georges_pompidou"></img>
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
            <h3 className="vertical-timeline-element-title">Charles de Gaulle</h3>
            <h4 className="vertical-timeline-element-subtitle">Président de la République</h4>
            <p>
              1er président de la V ème République
            </p>
          </div>
          <div className="img">
            <img src={require("../img/charles_de_gaulle.jpg")} alt="charles_de_gaulle"></img>
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
            <img src={require("../img/rene_coty.jpg")} alt="rene_coty"></img>
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
            <img src={require("../img/vincent_auriol.png")} alt="vincent_auriol"></img>
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
        date="1940 - 1944"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Philippe Pétain</h3>
            <h4 className="vertical-timeline-element-subtitle">Chef de l'Etat français</h4>
            <p>
              Régime de Vichy
            </p>
          </div>
          <div className="img">
            <img src={require("../img/philippe_petain.jpg")} alt="philippe_petain.jpg"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1932 - 1940"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/albert_lebrun.jpg")} alt="albert_lebrun"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1931 - 1932"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/paul_doumer.jpg")} alt="paul_doumer"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1924 - 1931"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/gaston_doumergue.jpg")} alt="gaston_doumergue"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1920 - 1924"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/alexandre_millerand.jpg")} alt="alexandre_millerand"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1920"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/paul_deschanel.jpg")} alt="paul_deschanel"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1913 - 1920"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/raymond_poincare.jpg")} alt="raymond_poincare"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1906 - 1913"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/armand_fallieres.jpg")} alt="armand_fallieres"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1899 - 1906"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/emile_loubet.jpg")} alt="emile_loubet"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1895 - 1899"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/felix_faure.jpg")} alt="felix_faure"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1894 - 1895"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/perier.jpg")} alt="perier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1887 - 1894"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/sadi_carnot.jpg")} alt="sadi_carnot"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1879 - 1887"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/jules_grevy.jpg")} alt="jules_grevy"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1873 - 1879"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/mac_mahon.jpg")} alt="mac_mahon"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1871 - 1873"
        iconStyle={{ background: 'rgb(16, 200, 22)', color: '#fff' }}
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
            <img src={require("../img/adolphe_thiers.jpg")} alt="adolphe_thiers"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="26 mars 1871 - 22 mai 1871"
        iconStyle={{ background: 'rgb(229, 66, 224)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(229, 66, 224)', color: '#fff' }}
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
            <img src={require("../img/trochu.png")} alt="trochu"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2 janvier 1870 - 4 septembre 1870"
        iconStyle={{ background: 'rgb(250, 236, 23)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(250, 236, 23)', color: '#fff' }}
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
            <img src={require("../img/louis_napoleon_bonaparte.jpg")} alt="louis_napoleon_bonaparte"></img>
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
        iconStyle={{ background: 'rgb(157, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/louis_philippe_ier.jpg")} alt="louis_philippe_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="29 juillet 1830 - 1er août 1830"
        iconStyle={{ background: 'rgb(157, 23, 250)', color: '#fff' }}
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

      <h1 className="dateBottom">1830</h1>

    </VerticalTimeline>
  </>
)

export default Partie_un;
