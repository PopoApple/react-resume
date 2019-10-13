import React, { Component } from 'react';
import weixinImg from 'ASSET/images/code2.png'

class Contact extends Component {
  render() {

    if(this.props.data){
      var phone= this.props.data.phone;
      var email = this.props.data.email;
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
               <div className="contact-icon"><span className="icon iconfont">&#xe61c;</span></div>
               <div className="contact-text allowCopy">{phone}</div>
            </div>
            <div className="four columns icon-text">
               <div className="contact-icon"><span className="icon iconfont">&#xe615;</span></div>
               <div className="contact-text allowCopy">{qq}</div>
            </div>
            <div className="four columns icon-text">
               <div className="contact-icon"><span className="icon iconfont" style={{ fontSize: 45 }}>&#xe69d;</span></div>
               <div className="contact-text allowCopy">{email}</div>
            </div>
         </div>
         <div className="row" style={{ textAlign: 'center', marginTop: 20, marginBottom: 50}}>
            <div className="twelve columns">
               {/* <div className="contact-text" style={{ color: '#fff', fontSize: 16, marginBottom: 10, letterSpacing: 2 }}>微信</div> */}
               <img className="code2-img" src={weixinImg} alt="" />
            </div>
         </div>
      </section>
    );
  }
}

export default Contact;
