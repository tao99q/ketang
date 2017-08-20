import * as Types from '../action-types'

let initState = {
  currentLesson: 'all',
  sliders: [],
  lessons: {
    hasMore: true,//是否有更多的数据
    offset: 0,//每次获取的偏移量
    limit: 10,//每次限制获取多少条
    list: [],//获取的数据列表
    loading: false//如果正在加载就不要再去加载数据
  }
};

export function home(state = initState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_LESSON:
      return {
        ...state, currentLesson: action.lesson
      };
    case Types.GET_SLIDERS:
      return {
        ...state,
        sliders: action.sliders
      };
    case Types.GET_LESSONS:
      let newList = [...state.lessons.list, ...action.lessons];
      return {
        ...state, lessons: {
          ...state.lessons,
          hasMore: action.hasMore,
          list: newList,
          offset: newList.length,
          loading: false
        }
      };
    case Types.CHANGE_LOADING_STATUS:
      return {
        ...state, lessons: {
          ...state.lessons,
          loading: action.loading
        }
      };
    default:
      return initState;
  }
}