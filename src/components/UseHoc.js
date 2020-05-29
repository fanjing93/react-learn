/*
 * @Author: fanjing
 * @Date: 2020-05-08 14:55:16
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-25 17:34:54
 * @Description:
 */

import React, { Component } from 'react'
import { withSubscription } from './WithSubscription'

@withSubscription((data) => data.getComments())
class CommentList extends Component {
  render() {
    const list = this.props.data || []
    return (
      <div>
        {list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    )
  }
}

@withSubscription((data) => data.getBlogPost())
class BlogPost extends Component {
  render() {
    return <div>{this.props.data}</div>
  }
}

export default class UseHoc extends Component {
  render() {
    return (
      <div>
        <CommentList />
        <BlogPost />
      </div>
    )
  }
}
