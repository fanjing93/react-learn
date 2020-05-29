/*
 * @Author: fanjing
 * @Date: 2020-05-08 14:18:26
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-08 15:31:34
 * @Description:
 */

import React, { Component } from 'react'
import DataSource from '../common/dataSource'

export const withSubscription = (selectData) => (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: selectData(DataSource),
      }
    }
    componentDidMount() {
      // 订阅更改
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
      // 清除订阅
      DataSource.removeChangeListener()
    }

    handleChange = () => {
      this.setState({
        data: selectData(DataSource),
      })
    }

    render() {
      return (
        <div>
          <h1>This is a HOC Component...</h1>
          <WrappedComponent data={this.state.data} {...this.props} />
        </div>
      )
    }
  }
}
