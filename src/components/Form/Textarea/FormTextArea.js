import React from 'react'
import ErrorText from '../../Helpers/Error/Error'
import { Label } from '../Input/FormInputStyles'
import { TextArea } from './FormTextAreaStyles'
import PropTypes from 'prop-types'

const FormTextArea = ({ label, margin, error, id, ...props }) => {
  return (
    <>
      <Label htmlFor={id} margin={margin}>
        {label}
      </Label>
      <TextArea id={id} name={id} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}

export default FormTextArea

FormTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string.isRequired
}
