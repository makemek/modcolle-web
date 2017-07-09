import fetch from 'unfetch'

export function loginByDmmAccount() {
  const email = document.getElementById('dmm-email')
  const password = document.getElementById('dmm-password')

  login('/dmm-account', {
    username: email.value,
    password: password.value
  })
  return false
}

export function loginByDmmSession() {
  const { value } = document.getElementById('dmm-session')

  login('/dmm-session', {
    username: value
  })
  return false
}

function login(api, jsonPayload) {
  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeJson(jsonPayload)
  })
    .then(res => res.json())
    .then(({success, flashUrl}) => {
      success? redirect(`/kancolle.html?kc=${flashUrl}`) : redirect('?fail#login')
    })
}

function redirect(url) {
  window.location.replace(url)
}

function encodeJson(json) {
  const params = []
  Object.keys(json).map(key => params.push(`${key}=${encodeURIComponent(json[key])}`))
  return params.join('&')
}
