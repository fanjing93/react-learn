/*
 * @Author: fanjing
 * @Date: 2020-05-08 14:21:45
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-08 14:47:27
 * @Description:
 */
import React, { Component } from 'react'
import DataSource from '../common/dataSource'

export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
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
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSource.getComments(),
    })
  }

  render() {
    return (
      <div>
        {this.state.comments.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    )
  }
}
