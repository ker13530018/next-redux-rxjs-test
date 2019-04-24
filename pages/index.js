/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { homeInit } from '../reduxs/home/action'

import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

class Home extends Component {
  static async getInitialProps() {
    let { API_URL } = serverRuntimeConfig
    const {
      data: { message },
    } = await axios.get(`${API_URL}/server`)
    return { message }
  }

  componentDidMount() {
    console.log('props..', this.props)
  }

  handleOnclick = () => {
    const { dispatch } = this.props
    dispatch(homeInit())
  }

  render() {
    const { message } = this.props
    // const { message: storeMessage } = testReducer
    // console.log('render =>', message)
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
  ({ homeReducer }) => homeReducer,
  dispatch => ({ dispatch }),
)(Home)
