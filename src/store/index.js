/*
 * @Author: fanjing
 * @Date: 2020-05-27 14:37:16
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-28 19:11:18
 * @Description:
 */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// redux-logger提供生成器createLogger，可以生成日志中间件logger
import { createLogger } from 'redux-logger'
// 允许dispatch()接受函数作为参数
import thunk from 'redux-thunk'
import reducer from './reducers'

const logger = createLogger();

const configureStore = () =>
  createStore(
    reducer,
    // 完成store.dispatch()的功能增强。
    composeWithDevTools(applyMiddleware(thunk, logger)),
  )

export default configureStore