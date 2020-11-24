import React from 'react'
import { CardText, CardTitle, CardWrapper } from './CardStyles'
import Link from 'next/link'
import Arrow from '../../../public/arrow.svg'
import { Layout } from '../Helpers/Layout'
import Image from '../Helpers/Image/Image'
import PropTypes from 'prop-types'

const CardFeatured = ({ projectName, projectDescription, id, src }) => {
  return (
    <CardWrapper padding="0" overflow="hidden">
      <Layout grid columns="249px 1fr" resetHeight minHeight="inherit">
        <Image alt="imagem" src={src} />
        <Layout
          flex
          justify="center"
          align="center"
          direction="column"
          padding="2.5rem"
          resetHeight
        >
          <CardTitle>{projectName}</CardTitle>
          <CardText>
            <p>{projectDescription}</p>
          </CardText>
          <Link href={{ pathname: '/projects/[id]', query: { id } }}>
            <a>
              Detalhes <Arrow />
            </a>
          </Link>
        </Layout>
      </Layout>
    </CardWrapper>
  )
}

export default CardFeatured

CardFeatured.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string
}
