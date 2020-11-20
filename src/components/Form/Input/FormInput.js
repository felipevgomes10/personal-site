import React from 'react'
import { Input, Label } from './FormInputStyles'
import PropTypes from 'prop-types'
import ErrorText from '../../Helpers/Error/Error'

const FormInput = ({
  label,
  margin,
  type,
  error,
  id,
  labelInline,
  other,
  ...props
}) => {
  return (
    <>
      <Label htmlFor={id} margin={margin} labelInline={labelInline}>
        {label}
      </Label>
      <Input id={id} name={id} type={type} other={other} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}

export default FormInput

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelInline: PropTypes.bool,
  other: PropTypes.bool
}
