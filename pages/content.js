/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import getConfig from 'next/config'
import { contentGet } from '../reduxs/content/action'

const { serverRuntimeConfig } = getConfig()

class Content extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query
    const { API_URL } = serverRuntimeConfig
    const {
      data: { title, body },
    } = await axios.get(`${API_URL}/contents/${slug}`)
    return { title, body }
  }

  componentDidMount() {
    console.log('props..', this.props)
  }

  render() {
    const { title, body } = this.props
    return (
      <div>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ contentReducer }) => contentReducer,
  dispatch => ({ dispatch }),
)(Content)
