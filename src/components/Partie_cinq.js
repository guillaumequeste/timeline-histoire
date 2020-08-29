import React from 'react';
import '../App.css';
import Header from './Header'
import Footer from './Footer'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Partie_cinq = () => (
  <>
    <Header />
    <Footer />
    <h1 className="dateTop">751</h1>
    <VerticalTimeline className="timeline">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="743 - 751"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/childeric_iii.jpeg")} alt="childeric_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="737 - 743"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/thierry_iv.jpg")} alt="thierry_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="715 - 721"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/chilperic_ii.jpg")} alt="chilperic_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="711 - 715"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/dagobert_iii.jpg")} alt="dagobert_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="694 - 711"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/childebert_iv.jpg")} alt="childebert_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="691 - 694"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/clovis_iv.jpeg")} alt="clovis_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="679 - 691"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/thierry_iii.jpeg")} alt="thierry_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="676 - 679"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Dagobert II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs d'Austrasie</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/dagobert_ii.jpg")} alt="dagobert_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="675 - 676"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clovis III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs d'Austrasie</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clovis_iii.jpg")} alt="clovis_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="673 - 675"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
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
            <img src={require("../img/childeric_ii.jpg")} alt="childeric_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="663 - 673"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clotaire III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de Neustrie et de Burgondie</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clotaire_iii.jpg")} alt="clotaire_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="656 - 662"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Childebert III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs d'Austrasie</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clotaire_iii.jpg")} alt="clotaire_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="639 - 657"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clovis II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de Neustrie et de Bourgogne</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clovis_ii.jpeg")} alt="clovis_ii"></img>
          </div>
          <div className="titres2">
            <h3 className="vertical-timeline-element-title">Sigebert III</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi d'Austrasie (639 - 656)</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/sigebert_iii.jpg")} alt="sigebert_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="629 - 639"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Dagobert Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/dagobert_ier.jpeg")} alt="dagobert_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="613 - 629"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clotaire II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clotaire_ii.jpeg")} alt="clotaire_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="613"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Sigebert II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi d'Austrasie et de Burgondie</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/sigebert_ii.jpeg")} alt="sigebert_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="595 - 613"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Thierry II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de Bourgogne et d'Austrasie</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/thierry_ii.jpg")} alt="thierry_ii"></img>
          </div>
          <div className="titres2">
            <h3 className="vertical-timeline-element-title">Thibert II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi d'Austrasie (595 - 612)</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/thibert_ii.png")} alt="thibert_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="561 - 596"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
        <div className="titres">
            <h3 className="vertical-timeline-element-title">Chilpéric Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi d'Austrasie (561 - 584)</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/chilperic_ier.jpg")} alt="chilperic_ier"></img>
          </div>
          <div className="titres2">
            <h3 className="vertical-timeline-element-title">Childebert II</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi d'Austrasie (575 - 596)</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/childebert_ii.jpg")} alt="childebert_ii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="558 - 561"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clotaire Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clotaire_ier.jpg")} alt="clotaire_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="511 - 558"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Childebert Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi de Paris</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/childebert_ier.jpg")} alt="childebert_ier"></img>
          </div>
          <div className="titres2">
            <h3 className="vertical-timeline-element-title">Clodomir</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs du royaume d'Orléans (511 - 524)</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clodomir.jpg")} alt="clodomir"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="481 - 511"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clovis</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clovis.jpg")} alt="clovis"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="457 - 481"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Childéric Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs saliens</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/childeric_ier.jpg")} alt="childeric_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="447 - 457"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Mérovée</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs saliens</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/merovee.jpeg")} alt="merovee"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="428 - 447"
        iconStyle={{ background: 'rgb(50, 23, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clodion</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs saliens</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clodion.jpg")} alt="clodion"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <h1 className="dateBottom">428</h1>

    </VerticalTimeline>
  </>
)

export default Partie_cinq;
