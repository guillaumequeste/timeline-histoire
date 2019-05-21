import React from 'react';
import '../App.css';
import Header from './Header'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Partie_deux = () => (
  <>
    <Header />
    <VerticalTimeline>
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
                <img src={require("../img/charles_X.jpg")} alt="charles_X"></img>
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
                <img src={require("../img/louis_XVIII.jpg")} alt="louis_XVIII"></img>
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
                <img src={require("../img/louis_XVIII.jpg")} alt="louis_XVIII"></img>
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
                <img src={require("../img/napoleon_II.jpg")} alt="napoleon_II"></img>
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
                <img src={require("../img/napoleon_I.jpg")} alt="napoleon_I"></img>
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
                <img src={require("../img/louis_xvi.webp")} alt="louis_xvi"></img>
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
                <img src={require("../img/louis_xv.jpg")} alt="louis_xv"></img>
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
                <img src={require("../img/louis_xiv.webp")} alt="louis_xiv"></img>
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
                <img src={require("../img/louis_xiii.jpg")} alt="louis_xiii"></img>
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
                <img src={require("../img/henri_iv.jpg")} alt="henri_iv"></img>
            </div>
            </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      />

    </VerticalTimeline>
  </>
)

export default Partie_deux;
