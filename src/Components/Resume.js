import React, { Component } from 'react';
import Detail from './Detail';
import Tags from './Tags';

class Resume extends Component {

  showDetail = (work) => {
    this.props.showModal(<Detail list={work.projects}></Detail>, work.detailMaxWidth)
  }

  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span> <em className="date">{education.graduated}</em></p>
        <p className="info">{education.description}</p>
        </div>
      })
      var qualifications = this.props.data.qualifications.map(function(qualification){
        return <div key={qualification.name}><h3>{qualification.name}</h3>
        <p className="info info-last">{qualification.type} <span>&bull;</span> <em className="date">{qualification.date}</em></p>
        </div>
      })
      var work = this.props.data.work.map((work) => {
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {work.tags && <p className="info"><Tags data={work.tags} /></p>}
            <p className="info">{work.description}</p>
            <p className="info info-last text-right">
              <a onClick={() => this.showDetail(work)}>项目经历>></a>
            </p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>教育经历</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row qualifications">
        <div className="three columns header-col">
            <h1><span>资格证书</span></h1>
        </div>

        <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {qualifications}
              </div>
            </div>
        </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>工作经历</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>专业技能</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
