import React from 'react'
import PropTypes from 'prop-types'
import { Text } from './TitleStyles'

const Title = ({ text }) => {
  return <Text>{text}</Text>
}

export default Title

Title.propTypes = {
  text: PropTypes.string.isRequired
}
