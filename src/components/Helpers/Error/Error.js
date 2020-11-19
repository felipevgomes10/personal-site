import React from 'react'
import PropTypes from 'prop-types'
import { SpanError } from './ErrorStyles'

const ErrorText = ({ children }) => {
  return <SpanError>{children}</SpanError>
}

export default ErrorText

ErrorText.propTypes = {
  children: PropTypes.string
}
