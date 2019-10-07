import React from 'react';
import './index.css'

class Detail extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    const { title, subTitle, list } = this.props
    return (
        <div className="detail-wrap">
            {title && <div className="detail-title">{title}</div>}
            {subTitle && <div className="detail-sub-title">{subTitle}</div>}
            <div className="detail-item-wrap">
                {list.map((d, i) => {
                    return (
                        <div key={i} className="detail-item">
                            {d.title && <div className="detail-item-title">{d.title}</div>}
                            {d.img && 
                              <div className="detail-item-img">
                                <img src={'images/' + d.img} />
                              </div>
                            }
                            <p className="detail-item-desc">{d.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
  }
}

export default Detail