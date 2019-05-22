import React from 'react';
import '../App.css';
import Header from './Header'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Partie_trois = () => (
  <>
    <Header />
    <VerticalTimeline>
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
            <img src={require("../img/henri_iii.jpg")} alt="henri_iii"></img>
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
            <img src={require("../img/charles_ix.jpg")} alt="charles_ix"></img>
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
            <img src={require("../img/francois_ii.jpg")} alt="francois_ii"></img>
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
            <img src={require("../img/henri_ii.jpg")} alt="henri_ii"></img>
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
            <img src={require("../img/francois_ier.jpg")} alt="francois_ier"></img>
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
            <img src={require("../img/louis_xii.jpg")} alt="louis_xii"></img>
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
            <img src={require("../img/charles_viii.jpg")} alt="charles_viii"></img>
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
            <img src={require("../img/louis_xi.jpg")} alt="louis_xi"></img>
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
            <img src={require("../img/charles_vii.jpg")} alt="charles_vii"></img>
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
            <img src={require("../img/charles_vi.jpg")} alt="charles_vi"></img>
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
            <img src={require("../img/charles_v.jpg")} alt="charles_v"></img>
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
            <img src={require("../img/jean_ii.jpg")} alt="jean_ii"></img>
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
            <img src={require("../img/philippe_vi.jpg")} alt="philippe_vi"></img>
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
            <img src={require("../img/charles_iv.jpeg")} alt="charles_iv"></img>
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
            <img src={require("../img/philippe_v.jpg")} alt="philippe_v"></img>
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
            <img src={require("../img/jean_ier.jpeg")} alt="jean_ier"></img>
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
            <img src={require("../img/louis_x.jpeg")} alt="louis_x"></img>
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
            <img src={require("../img/philippe_iv.jpg")} alt="philippe_iv"></img>
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
            <img src={require("../img/philippe_iii.jpeg")} alt="philippe_iii"></img>
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
            <img src={require("../img/louis_ix.jpeg")} alt="louis_ix"></img>
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
            <img src={require("../img/louis_viii.jpg")} alt="louis_viii"></img>
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
            <img src={require("../img/philippe_ii.jpeg")} alt="philippe_ii"></img>
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
            <img src={require("../img/louis_vii.jpeg")} alt="louis_vii"></img>
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
            <h3 className="vertical-timeline-element-title">Louis VI "le Gros"</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/louis_vi.jpg")} alt="louis_vi"></img>
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
            <img src={require("../img/philippe_ier.jpg")} alt="philippe_ier"></img>
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
            <img src={require("../img/henri_ier.jpg")} alt="henri_ier"></img>
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
            <h3 className="vertical-timeline-element-title">Robert II "le Pieux"</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de France</h4>
            <p>
              Dynastie des Capétiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/robert_ii.jpg")} alt="robert_ii"></img>
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
            <img src={require("../img/hugues_capet.jpg")} alt="hugues_capet"></img>
          </div>
        </div>
      </VerticalTimelineElement>

    </VerticalTimeline>
  </>
)

export default Partie_trois;
