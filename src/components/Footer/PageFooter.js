import React from 'react'
import { Footer } from './PageFooterStyles'

const PageFooter = () => {
  return (
    <Footer>
      <p>Design por Felipe Gomes</p>
      <span>{new Date().getFullYear()}</span>
    </Footer>
  )
}

export default PageFooter
