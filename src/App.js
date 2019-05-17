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
        date="1958 - 1969"
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
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   
  />
</VerticalTimeline>
  </>
)

export default App;
