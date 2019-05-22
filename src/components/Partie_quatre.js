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
            <h3 className="vertical-timeline-element-title">Louis V</h3>
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
            <h3 className="vertical-timeline-element-title">Louis IV</h3>
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
            <img src={require("../img/louis_iii.jpeg")} alt="louis_iii"></img>
          </div>
          <div className="img">
            <img src={require("../img/carloman_ii.jpeg")} alt="carloman_ii"></img>
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
            <img src={require("../img/louis_ii.jpeg")} alt="louis_ii"></img>
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
            <img src={require("../img/charles_ii.jpeg")} alt="charles_ii"></img>
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
            <img src={require("../img/louis_le_pieux.jpeg")} alt="louis_le_pieux"></img>
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
            <img src={require("../img/charlemagne.jpeg")} alt="charlemagne"></img>
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
            <img src={require("../img/pepin_le_bref.jpeg")} alt="pepin_le_bref"></img>
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
            <img src={require("../img/childeric_iii.jpeg")} alt="childeric_iii"></img>
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
            <img src={require("../img/thierry_iv.jpg")} alt="thierry_iv"></img>
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
            <img src={require("../img/chilperic_ii.jpg")} alt="chilperic_ii"></img>
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
            <img src={require("../img/dagobert_iii.jpg")} alt="dagobert_iii"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="694 - 711"
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
            <img src={require("../img/childebert_iv.jpg")} alt="childebert_iv"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="691 - 694"
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
            <img src={require("../img/clovis_iv.jpeg")} alt="clovis_iv"></img>
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
            <img src={require("../img/thierry_iii.jpeg")} alt="thierry_iii"></img>
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
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs d'Austrasie</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/dagobert_ii.jpeg")} alt="dagobert_ii"></img>
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
            <img src={require("../img/childeric_ii.jpg")} alt="childeric_ii"></img>
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
            <img src={require("../img/clotaire_ier.jpeg")} alt="clotaire_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="511 - 558"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
            <img src={require("../img/childebert_ier.jpeg")} alt="childebert_ier"></img>
          </div>
          <div className="titres2">
            <h3 className="vertical-timeline-element-title">Clodomir</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs du royaume d'Orléans (511 - 524)</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clodomir.jpeg")} alt="clodomir"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="481 - 511"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
      >
        <div className="badge">
          <div className="titres">
            <h3 className="vertical-timeline-element-title">Clovis Ier</h3>
            <h4 className="vertical-timeline-element-subtitle"> Roi des Francs</h4>
            <p>
              Dynastie des Mérovingiens
            </p>
          </div>
          <div className="img">
            <img src={require("../img/clovis_ier.jpeg")} alt="clovis_ier"></img>
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="457 - 481"
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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
        iconStyle={{ background: 'rgb(180, 50, 250)', color: '#fff' }}
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

    </VerticalTimeline>
  </>
)

export default Partie_quatre;
