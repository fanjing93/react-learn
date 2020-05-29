/*
 * @Author: fanjing
 * @Date: 2020-05-25 16:08:22
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-25 16:10:53
 * @Description:
 */
import React, { Component } from 'react'

const CompHoc = (params) => (WrappedComponent) => {
  return class extends Component {
    render() {
      const newProps = { disabled: true, type: 'HOC' }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

// @CompHoc({params: true})
class MyInput extends Component {
  render() {
    return (
      <input
        type="text"
        data-type={this.props.type}
        disabled={this.props.disabled}
        value={this.props.value}
      />
    )
  }
}

// export default class App extends Component {
//   render() {
//     return <MyInput value="测试"/>;
//   }
// }

const Comp = CompHoc({ params: true })(MyInput)
export default class HocComp extends Component {
  render() {
    return <Comp value="测试" />
  }
}
