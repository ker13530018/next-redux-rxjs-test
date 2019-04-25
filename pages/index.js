/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { homeInit } from '../reduxs/home/action'

import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()
import Link from 'next/link'

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
        <div>
          <ul>
            <li>
              <Link href="/content/example-1">
                <a>example-1</a>
              </Link>
            </li>
            <li>
              <Link href="/content/example-2">
                <a>example-2</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ homeReducer }) => homeReducer,
  dispatch => ({ dispatch }),
)(Home)
