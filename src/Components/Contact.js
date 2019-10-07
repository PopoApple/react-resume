import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var qq = this.props.data.qq;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="header-col">

               <h1><span>联系我吧</span></h1>

            </div>

         </div>

         <div className="row">
            <div className="four columns icon-text">
               <div className="contact-icon"><span class="icon iconfont">&#xe61c;</span></div>
               <div className="contact-text">{phone}</div>
            </div>
            <div className="four columns icon-text">
               <div className="contact-icon"><span class="icon iconfont">&#xe615;</span></div>
               <div className="contact-text">{qq}</div>
            </div>
            <div className="four columns icon-text">
               <div className="contact-icon"><span class="icon iconfont" style={{ fontSize: 45 }}>&#xe69d;</span></div>
               <div className="contact-text">{email}</div>
            </div>
         </div>
      </section>
    );
  }
}

export default Contact;
