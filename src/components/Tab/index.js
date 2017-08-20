import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'

class Tab extends Component {
  render() {
    let path = this.props.path;
    return (
        <div>
          <nav className="tab">
            <Link to="/home" className={'/home' === path ? 'active' : ''}>
              <i className="iconfont icon-zhuye"/>
              <span>首页</span>
            </Link>
            <Link to="/lesson" className={'/lesson' === path ? 'active' : ''}>
              <i className="iconfont icon-react"/>
              <span>课程</span>
            </Link>
            <Link to="/profile" className={'/profile' === path ? 'active' : ''}>
              <i className="iconfont icon-reactions"/>
              <span>个人中心</span>
            </Link>
          </nav>
        </div>
    );
  }
}

export default Tab;