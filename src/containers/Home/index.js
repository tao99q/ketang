import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from "../../components/HomeHeader/index";
import * as action from '../../redux/actions/home';
import Slider from "../../components/Slider/index";
import LessonList from "../../components/LessonList/index";
import ScrollList from "../../components/ScrollList/index";

@connect(state => ({
  sliders: state.home.sliders,
  lessons: state.home.lessons
}), {...action})
class Home extends Component {
  componentWillMount() {
    this.props.getLesson();
    this.props.getSlider();

  }

  choose(val) {
    this.props.setCurrentLesson(val);

  }

  loadMore() {
    this.props.getLesson();
  }

  render() {
    let {loading, hasMore, list} = this.props.lessons;
    return (
        <div style={{height: '100%'}}>
          <HomeHeader choose={this.choose.bind(this)}/>
          <div className="page-wrap" ref='scroll'>
            <Slider sliders={this.props.sliders}/>
            <ScrollList element={this.refs.scroll}
                        loading={loading}
                        hasMore={hasMore}
                        loadMore={this.loadMore.bind(this)}>
              <LessonList list={list}/>
            </ScrollList>

            <button onClick={this.loadMore.bind(this)}>获取更多</button>
          </div>
        </div>
    )
  }
}


export default Home;