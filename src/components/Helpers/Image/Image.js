import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Img, Skeleton, SkeletonWrapper } from './ImageStyles'

const Image = ({ alt, className, ...props }) => {
  const [show, setShow] = useState(false)
  const handleLoad = () => {
    setShow(true)
  }

  return (
    <SkeletonWrapper className={className}>
      <Skeleton />
      <Img onLoad={handleLoad} show={show} alt={alt} {...props} />
    </SkeletonWrapper>
  )
}

export default Image

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string
}
