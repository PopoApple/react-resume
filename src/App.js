import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Modal from './Components/Modal';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      modalShow: false,
      modalContent: null,
      modalContentMaxWidth: null,
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  showModal =  (modalContent, modalContentMaxWidth) => {
    this.setState({ modalShow: true, modalContent, modalContentMaxWidth })
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume} showModal={this.showModal} />
        <Portfolio data={this.state.resumeData.portfolio} showModal={this.showModal} />
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
        {this.state.modalShow &&
          <Modal onClose={() => this.setState({ modalShow: false })} maxWidth={this.state.modalContentMaxWidth} >
            {this.state.modalContent}
          </Modal>
        }
      </div>
    );
  }
}

export default App;
