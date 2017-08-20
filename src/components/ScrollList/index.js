import React, {Component} from 'react';

class ScrollList extends Component {
  constructor() {
    super();
    this.state = {isBind: false}
  }

  bindScroll(e) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      let {scrollTop, offsetHeight, scrollHeight} = e.target;
      let {loading, hasMore, loadMore} = this.props;
      if (scrollTop + offsetHeight + 20 > scrollHeight && !loading && hasMore) {
        loadMore();
      }
    }, 20);
  }

  componentWillReceiveProps(nextProps) {
    //当前父组件DOM生成后，子组件可以接收到新属性element，可以给element绑定事件
    if (nextProps.element && !this.state.isBind) {
      nextProps.element.addEventListener('scroll', this.bindScroll.bind(this), false);
      this.setState({
        isBind: true
      })
    }

  }

  render() {

    return (
        <div>
          {this.props.children}
        </div>
    )
  }
}

export default ScrollList;