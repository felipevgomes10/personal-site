const baseUrl = 'https://webdevfelipe.com/json'

export const GET_LOCAL_TOKEN = () => {
  const token = window.localStorage.getItem('userToken')
  return token
}

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

export const PROJECT_POST = (formData, token) => {
  return {
    url: `${baseUrl}/api/project`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData
    }
  }
}
