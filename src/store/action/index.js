/*
 * @Author: fanjing
 * @Date: 2020-05-27 14:40:55
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-28 18:16:52
 * @Description:
 */

/**
 * action 类型
 */
export const SET_STATE = 'SET_STATE'

/*
 * action 创建函数
 */
export const setDefaultState = (params) => {
  return { type: SET_STATE, payload: params } // action
}
