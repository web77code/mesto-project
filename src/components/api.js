const configAPI = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-3',
  headers: {
    authorization: '27fae40c-b0f9-46c9-bf33-d2f2bfaeebe1',
    'Content-Type': 'application/json'
  }
}

const checkResponse = res => {
  if (res.ok) return res.json();

  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUserInfo = () => {
  return fetch(`${configAPI.baseUrl}/users/me`, {
    headers: configAPI.headers
  }).then(checkResponse);
}

export const changeUserInfo = (name, job) => {
  return fetch(`${configAPI.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: configAPI.headers,
    body: JSON.stringify({
      name: name,
      about: job
    })
  }).then(checkResponse);
}

export const editAvatar = (pic) => {
  return fetch(`${configAPI.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: configAPI.headers,
    body: JSON.stringify({
      avatar: pic
    })
  }).then(checkResponse);
}

export const getCards = () => {
  return fetch(`${configAPI.baseUrl}/cards`, {
    headers: configAPI.headers
  }).then(checkResponse);
}

export const postCard = (title, url) => {
  return fetch(`${configAPI.baseUrl}/cards`, {
    method: 'POST',
    headers: configAPI.headers,
    body: JSON.stringify({
      name: title,
      link: url
    })
  }).then(checkResponse);
}

export const deleteCard = (cardId) => {
  return fetch(`${configAPI.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: configAPI.headers
  }).then(checkResponse);
}

export const addLike = (cardId) => {
  return fetch(`${configAPI.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: configAPI.headers
  }).then(checkResponse);
}

export const removeLike = (cardId) => {
  return fetch(`${configAPI.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: configAPI.headers
  }).then(checkResponse);
}