import React from 'react'
import { Video } from './IframeStyles'
import PropTypes from 'prop-types'

const Iframe = ({ src }) => {
  return <Video src={src} allow="autoplay; fullscreen" allowfullscreen></Video>
}

export default Iframe

Iframe.propTypes = {
  src: PropTypes.string
}
