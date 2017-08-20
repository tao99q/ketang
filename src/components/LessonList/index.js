import React, {Component} from 'react';
import './index.less'

class LessonList extends Component {
  render() {

    return (
        <div className="lesson-list">
          {this.props.list.length > 0 ? this.props.list.map((item, index) => {
            let {url, lesson, price} = item;
            return <li key={index}>
              <img src={url} alt=""/>
              <p>{lesson}</p>
              <span>{price}</span>
            </li>
          }) : 'loading'}
        </div>
    )
  }
}

export default LessonList;