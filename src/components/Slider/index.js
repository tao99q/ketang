import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';

class Slider extends Component {
  constructor() {
    super();
    this.state = {index: 0};
  }

  render() {
    let opts = {
      continuous: true, callback: (index, item) => {
        this.setState({
          index: index
        })
      }
    };
    return (
        <div className="slider">
          {this.props.sliders.length > 0 ?
              <ReactSwipe className="carousel" swipeOptions={opts}>
                {this.props.sliders.map((slider, index) => (
                    <div key={index}>
                      <img src={slider} alt=""/>
                    </div>
                ))}
              </ReactSwipe> : 'loading'}
          <div className="dots">
            {this.props.sliders.map((slider, index) => (
                <span key={index}
                      className={index === this.state.index ? 'active' : ''}>
                </span>
            ))}
          </div>

        </div>

    )
  }
}

export default Slider;