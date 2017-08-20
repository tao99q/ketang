import React, {Component} from 'react';
import ReactAddonsCssTransitionGroup from 'react-addons-css-transition-group'
import './index.less'

class HomeHeader extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    }
  }

  handleChangeShow() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  handleChoose(e) {
    this.props.choose(e.target.innerText);
    this.handleChangeShow();
  }

  render() {
    let isShow = this.state.isShow;
    return (
        <div className="home-header">
          <div className="header-bar">
            <i className="iconfont icon-xingqiu"/>
            <div onClick={this.handleChangeShow.bind(this)}>
              {isShow ? <i className="iconfont icon-guanbi"/> : <i className="iconfont icon-liebiao"/>}
            </div>
          </div>
          <div className="header-menu">
            <ReactAddonsCssTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
              {isShow ?
                  <ul onClick={this.handleChoose.bind(this)}>
                    <li>Node</li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Auglar</li>
                  </ul> : ''}
            </ReactAddonsCssTransitionGroup>
          </div>

        </div>

    )
  }
}

export default HomeHeader;