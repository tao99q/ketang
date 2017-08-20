//首页动作
//action-creator
import * as Types from '../action-types'
import {getSliders, getLessons} from '../../api/home';

export const setCurrentLesson = (lesson) => {
  return {
    type: Types.SET_CURRENT_LESSON,
    lesson
  }
};
//普通的action 都是返回对象 ，redux-thunk 支持异步，将dispatch权限交给自己
export const getSlider = () => (dispatch, getState) => {
//dispatch 可以派发action
  //getState 可以获取redux中的状态
  getSliders().then(sliders => {
    dispatch({
      type: Types.GET_SLIDERS,
      sliders
    })
  });
};
export const getLesson = () => (dispatch, getState) => {

  let {
    currentLesson, lessons: {
      hasMore,
      offset,
      limit
    }
  } = getState().home;
  // console.log(getState().home);
  if (!hasMore) {
    return;
  }
  dispatch({
    type: Types.CHANGE_LOADING_STATUS,
    loading: true
  });

  getLessons(currentLesson, limit, offset).then(data => {
    console.log(...data);
    dispatch({
      type: Types.GET_LESSONS,
      ...data
    })
  });
};