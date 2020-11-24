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

export const PROJECTS_GET = (page, total, user) => {
  return {
    url: `${baseUrl}/api/project/?page=${page}&total=${total}&user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export const PROJECTS_ALL_GET = () => {
  return {
    url: `${baseUrl}/api/project-all`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export const PROJECT_GET = id => {
  return {
    url: `${baseUrl}/api/project/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export const USER_GET = token => {
  return {
    url: `${baseUrl}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}
