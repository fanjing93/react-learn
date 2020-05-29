/*
 * @Author: fanjing
 * @Date: 2020-05-08 14:47:56
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-08 14:53:15
 * @Description:
 */
import React, { Component } from 'react';
import DataSource from '../common/dataSource';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPost: ''
    };
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
      blogPost: DataSource.getBlogPost()
    });
  }

  render() {
    return <div>{this.state.blogPost}</div>
  }
}