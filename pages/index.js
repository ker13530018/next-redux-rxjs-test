/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { testInit } from '../reduxs/test/action'

class Index extends Component {
  static async getInitialProps() {
    const {
      data: { message },
    } = await axios.get('http://localhost:3000/api/server')
    return { message }
  }

  componentDidMount() {
    console.log('props..', this.props)
  }

  handleOnclick = () => {
    const { dispatch } = this.props
    console.log(dispatch(testInit()))
  }

  render() {
    const { message } = this.props
    return (
      <div>
        <div>{message}</div>
        <div>
          <button type="button" onClick={() => this.handleOnclick()}>
            Click!
          </button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ ...state }),
  dispatch => ({ dispatch }),
)(Index)
