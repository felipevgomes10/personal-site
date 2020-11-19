const baseUrl = 'https://webdevfelipe.com/json'

export const TOKEN_POST = body => {
  return {
    url: `${baseUrl}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const TOKEN_VALIDATE = token => {
  return {
    url: `${baseUrl}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}
