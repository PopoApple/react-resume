import React, { Component } from 'react';
import Detail from './Detail';

class Portfolio extends Component {

  showDetail = (projects) => {
    console.log(111)
    this.props.showModal(<Detail title={projects.title} subTitle={projects.category} list={projects.items}></Detail>, projects.detailMaxWidth)
  }

  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map((projects) => {
        var projectImage = projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <span onClick={() => this.showDetail(projects)} title={projects.title}>
               <img className="slowlyLoadImg" alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
            </span>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>个人作品展示</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
