import React from 'react'
import { Text } from './ConfirmationTextStyles'
import PropTypes from 'prop-types'

const ConfirmationText = ({ children, confirm }) => {
  return <Text confirm={confirm}>{children}</Text>
}

export default ConfirmationText

ConfirmationText.propTypes = {
  children: PropTypes.string,
  confirm: PropTypes.bool
}
