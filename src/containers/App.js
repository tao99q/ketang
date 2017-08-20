//主要用来显示所有页面
import React, {Component} from 'react';
import Tab from "../components/Tab/index";
import {connect} from 'react-redux';

@connect(
    state => ({
      router: state.router
    })
)

class App extends Component {
  render() {
    return (
        <div className="wrap">
          {this.props.children}
          <Tab path={this.props.router.location.pathname}/>
        </div>
    )
  }
}

export default App;
