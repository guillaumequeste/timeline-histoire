import React from 'react';
import '../App.css';
import Header from './Header'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Partie_quatre = () => (
  <>
    <Header />
    <VerticalTimeline>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="986 - 987"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Louis V "le Fainéant"</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/louis_v.jpeg")} alt="louis_v"></img>
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
            <img src={require("../img/lothaire.jpg")} alt="lothaire"></img>
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
            <h3 className="vertical-timeline-element-title">Louis IV "d'Outremer"</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/louis_iv.jpg")} alt="louis_iv"></img>
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
            <img src={require("../img/raoul_ier.jpeg")} alt="raoul_ier"></img>
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
            <img src={require("../img/robert_ier.jpeg")} alt="robert_ier"></img>
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
            <img src={require("../img/charles_iii.jpeg")} alt="charles_iii"></img>
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
            <img src={require("../img/eudes.jpeg")} alt="eudes"></img>
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
            <img src={require("../img/charles_le_gros.jpeg")} alt="charles_le_gros"></img>
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
            <img src={require("../img/louis_iii.jpg")} alt="louis_iii"></img>
          </div>
          <div className="img">
            <img src={require("../img/carloman_ii.jpg")} alt="carloman_ii"></img>
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
            <h3 className="vertical-timeline-element-title">Louis II "le Bègue"</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/louis_ii.jpg")} alt="louis_ii"></img>
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
            <h3 className="vertical-timeline-element-title">Charles II "le Chauve"</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/charles_ii.jpg")} alt="charles_ii"></img>
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
            <h3 className="vertical-timeline-element-title">Louis 1er "le Pieux"</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Carolingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/louis_le_pieux.jpg")} alt="louis_le_pieux"></img>
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
            <img src={require("../img/charlemagne.jpg")} alt="charlemagne"></img>
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
            <img src={require("../img/pepin_le_bref.jpg")} alt="pepin_le_bref"></img>
          </div>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </>
)

export default Partie_quatre;
