/*
 * @Author: fanjing
 * @Date: 2020-05-27 14:40:50
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-29 14:42:34
 * @Description:
 */

import { SET_STATE } from '../action'

const initialState = {
  defaultState: 0,
  label: 'Click Me',
}

/**
 * Reducer 生成器
 * @param {*} initialState 默认state
 * @param { [action.type](state, action) { return { //... } } } handlers: 同switch
 * @description 自定义函数接受一个事件处理函数列表，同switch
 */
const createReducer = (initialState, handlers) => (
  state = initialState,
  action,
) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action)
  } else {
    return state
  }
}

export default createReducer(initialState, {
  [SET_STATE](state, action) {
    return { ...state, ...action.payload }
  },
})

/* export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload  }
    default:
      return state
  }
} */
