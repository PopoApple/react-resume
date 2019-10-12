import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <nav id="nav-wrap">

        <a id="mobileBtn" className="mobile-btn">Toggle navigation</a>

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
