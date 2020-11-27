import React from 'react'
import { Input, InputWrapper, Label } from './FormInputStyles'
import PropTypes from 'prop-types'
import ErrorText from '../../Helpers/Error/Error'

const FormInput = ({
  label,
  margin,
  marginInput,
  type,
  error,
  id,
  labelInline,
  otherWrapper,
  other,
  ...props
}) => {
  return (
    <InputWrapper otherWrapper={otherWrapper}>
      <Label htmlFor={id} margin={margin} labelInline={labelInline}>
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        marginInput={marginInput}
        other={other}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  )
}

export default FormInput

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  marginInput: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelInline: PropTypes.bool,
  other: PropTypes.bool,
  otherWrapper: PropTypes.bool
}
