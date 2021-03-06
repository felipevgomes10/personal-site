const { createGlobalStyle } = require('styled-components')

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 31.25em) {
      font-size: 50%;
      line-height: 22px;
      letter-spacing: .5px;
    }
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    min-height: 100vh;
    background: #FFFFFF;
    line-height: 21px;
    letter-spacing: .5px;
  }

  img {
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    justify-self: stretch;
  }

  ul {
    list-style: none;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: #333;
  }

  button,
  input,
  textarea {
    font-family: 'Nunito', sans-serif;
  }

  form {
    @media (max-width: 50em) {
      width: 100%;
    }
  }

  .loading {
    margin: 2rem;
    color: #333;
  }
`
