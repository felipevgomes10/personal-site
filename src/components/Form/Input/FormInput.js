import React from 'react'
import { Input, Label } from './FormInputStyles'
import PropTypes from 'prop-types'
import ErrorText from '../../Helpers/Error/Error'

const FormInput = ({ label, margin, type, error, ...props }) => {
  return (
    <>
      <Label margin={margin}>{label}</Label>
      <Input type={type} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}

export default FormInput

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string
}
