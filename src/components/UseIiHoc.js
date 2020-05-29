/*
 * @Author: fanjing
 * @Date: 2020-05-25 10:46:27
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-25 14:35:54
 * @Description:
 */
import React, { Component } from 'react'

const IiHoc = (wrapperComponent) =>
  class Enhanced extends wrapperComponent {
    constructor(props) {
      super(props)
      this.state = {
        num: 0,
      }
    }

    componentDidMount() {
      console.log('didMountHoc')
      // super.componentDidMount()
    }

    handleClick = () => {
      this.setState({
        num: this.state.num + 1,
      })
    }

    render() {
      console.log('renderHoc')
      // 核心代码
      let renderTree = super.render()
      let newProps = {
        ...renderTree.props,
        onClick: this.handleClick,
      }
      const newRenderTree = React.cloneElement(
        renderTree,
        newProps,
        this.state.num,
      )
      console.log(this);
      
      return newRenderTree
    }
  }

@IiHoc
class IiHocCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 3,
    }
  }

  componentDidMount() {
    console.log('didMount1')
  }

  render() {
    console.log('render1')
    // console.log(this.state.num)
    console.log(this);
    return <button />
  }
}

export default class UseIiHoc extends Component {
  render() {
    return <IiHocCom />
  }
}
