import React from 'react'
import { CardText, CardTitle, CardWrapper } from './CardStyles'
import Arrow from '../../../public/arrow.svg'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Card = ({ projectName, projectDescription, id }) => {
  return (
    <CardWrapper>
      <CardTitle>{projectName}</CardTitle>
      <CardText>
        <p>{projectDescription}</p>
      </CardText>
      <Link href={{ pathname: '/projects/[id]', query: { id } }}>
        <a>
          Detalhes <Arrow />
        </a>
      </Link>
    </CardWrapper>
  )
}

export default Card

Card.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
