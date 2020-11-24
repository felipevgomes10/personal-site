import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Img, Skeleton, SkeletonWrapper } from './ImageStyles'

const Image = ({
  alt,
  className,
  height,
  width,
  overflowHidden,
  radius,
  margin,
  ...props
}) => {
  const [show, setShow] = useState(false)
  const [skeleton, setSkeleton] = useState(true)
  const handleLoad = () => {
    setSkeleton(false)
    setShow(true)
  }

  return (
    <SkeletonWrapper
      className={className}
      height={height}
      width={width}
      overflowHidden={overflowHidden}
      radius={radius}
      margin={margin}
    >
      {skeleton && <Skeleton />}
      <Img onLoad={handleLoad} show={show} alt={alt} {...props} />
    </SkeletonWrapper>
  )
}

export default Image

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  overflowHidden: PropTypes.bool,
  radius: PropTypes.string,
  margin: PropTypes.string
}
