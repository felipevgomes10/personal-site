import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Btn } from './ButtonStyles'

const Button = forwardRef(({ children, margin, ...props }, ref) => {
  return (
    <Btn margin={margin} ref={ref} {...props}>
      {children}
    </Btn>
  )
})

export default Button

Button.propTypes = {
  children: PropTypes.any,
  margin: PropTypes.string
}

Button.displayName = 'Button'
