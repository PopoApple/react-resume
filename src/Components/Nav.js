import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <nav id="nav-wrap">

        <a id="mobileBtn" className="mobile-btn"></a>

        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">首页</a></li>
          <li><a className="smoothscroll" href="#about">关于我</a></li>
          <li><a className="smoothscroll" href="#resume">工作简历</a></li>
          <li><a className="smoothscroll" href="#portfolio">作品展示</a></li>
          <li><a className="smoothscroll" href="#testimonials">推荐信</a></li>
          <li><a className="smoothscroll" href="#contact">联系方式</a></li>
        </ul>

      </nav>
    );
  }
}

export default Header;
