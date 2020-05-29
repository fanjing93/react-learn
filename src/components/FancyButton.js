/*
 * @Author: fanjing
 * @Date: 2020-05-25 15:42:41
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-27 15:29:02
 * @Description:
 */
import React, { Component } from 'react'
/* const logPropsHoc = (WrappedComponent) =>
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps)
      console.log('new props:', this.props)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  } */

const logPropsHoc = (WrappedComponent) => {
  class LogProps extends Component {
   /*  componentDidUpdate(prevProps) {
      console.log('old props:', prevProps)
      console.log('new props:', this.props)
    } */

    render() {
      const { forwardedRef, ...rest } = this.props

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名。
  // 例如 “ForwardRef(logProps(MyComponent))”
  const name = WrappedComponent.displayName || WrappedComponent.name
  forwardRef.displayName = `logProps(${name})`

  return React.forwardRef(forwardRef)

  /*  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />
  }) */

  /* return React.forwardRef(function FancyButton(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />
  }) */
}

export default logPropsHoc(
  class FancyButton extends Component {
    focus() {
      console.log('FancyButton focus')
    }

    render() {
      return (
        <button onClick={this.props.handleClick}>{this.props.label}</button>
      )
    }
  },
)
