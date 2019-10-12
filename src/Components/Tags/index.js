import React from 'react';
import './index.css';

class Tags extends React.Component {

  render() {
    const { data } = this.props
    return (
        <div className="tags-wrap">
           {
             data.map((d, i) => {
               return (
                 <div key={i} className="tags-item">
                   {d}
                 </div>
               )
             })
           }
        </div>
    )
  }
}

export default Tags