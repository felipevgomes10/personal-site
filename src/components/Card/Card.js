import React, { useCallback, useEffect } from 'react'
import { CardButton, CardText, CardTitle, CardWrapper } from './CardStyles'
import Arrow from '../../../public/arrow.svg'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const Card = ({ projectName, projectDescription, id }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch(`/projects/${id}`)
  }, [id, router])

  const cardClick = useCallback(() => {
    router.push(`/projects/${id}`)
  }, [id, router])

  return (
    <CardWrapper>
      <CardTitle>{projectName}</CardTitle>
      <CardText>
        <p>{projectDescription}</p>
      </CardText>
      <CardButton onClick={cardClick}>
        Detalhes <Arrow />
      </CardButton>
    </CardWrapper>
  )
}

export default Card

Card.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
