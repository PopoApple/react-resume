import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var qq = this.props.data.qq;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>关于我</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>联系方式</h2>
                  <p className="address">
						   <span>手机：{phone}</span><br />
						   <span>QQ：{qq}</span><br />
                     <span>邮箱：{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a download href={resumeDownload} className="button"><i className="fa fa-download"></i>下载简历</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
