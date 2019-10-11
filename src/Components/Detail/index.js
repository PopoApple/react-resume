import React from 'react';
import './index.css';
import Tags from '../Tags';

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
                            {d.tags && 
                              <div className="detail-item-desc"><Tags data={d.tags} /></div>
                            }
                            {d.img && 
                              <div className="detail-item-img">
                                <img className="slowlyLoadImg" src={d.img} />
                              </div>
                            }
                            {d.duty ?
                              <div>
                                <p className="detail-item-desc">项目介绍：{d.desc}</p>
                                <p className="detail-item-desc">工作职责：{d.duty}</p>
                              </div>
                              :
                              <p className="detail-item-desc">{d.desc}</p>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
  }
}

export default Detail