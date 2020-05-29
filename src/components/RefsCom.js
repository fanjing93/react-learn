/*
 * @Author: fanjing
 * @Date: 2020-05-25 14:59:41
 * @LastEditors: fanjing
 * @LastEditTime: 2020-05-28 18:32:19
 * @Description:
 */
import React, { Component } from 'react'
import FancyButton from './FancyButton'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actions from '../store/action'
import { setDefaultState } from '../store/action'

const ref = React.createRef()
class RefsCom extends Component {
  componentDidMount() {
    //通过 ref.current 获取对该节点的引用
    ref && ref.current && ref.current.focus && ref.current.focus()
  }

  handleClick = () => {
    const { dispatch } = this.props
    dispatch(
      setDefaultState({
        defaultState: 11,
        label: 'ceShi',
      }),
    )
    // this.props.setDefaultState({
    //   defaultState: 11,
    //   label: 'ceShi',
    // })
  }

  render() {
    const { defaultState, label } = this.props
    return (
      <div>
        <p>{defaultState}</p>
        <FancyButton label={label} handleClick={this.handleClick} ref={ref} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    defaultState: state.defaultState,
    label: state.label,
  }
}

// const mapDispatchToProps = {
//   setDefaultState: (props) => ({
//     type: 'SET_STATE',
//     payload: props
//   })
// }
// const mapDispatchToProps = (dispatch, ownProps) =>
//   bindActionCreators(actions, dispatch)
export default connect(mapStateToProps /* mapDispatchToProps */)(RefsCom)
