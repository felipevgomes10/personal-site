import React from 'react'
import { CardButton, CardText, CardTitle, CardWrapper } from './CardStyles'
import Arrow from '../../../public/arrow.svg'
import PropTypes from 'prop-types'

const Card = ({ projectName, projectDescription, cardClick }) => {
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
  cardClick: PropTypes.func
}
