const BASE_URL = 'https://61ba219448df2f0017e5a929.mockapi.io/api'

function fetcher (path, options) {
        return fetch(BASE_URL + path, options)
        .then(res => res.status < 400 ? res : Promise.reject())
        .then(res => res.json())
        .catch(err => console.error('Error fetching: ', err))
}

function getAll() {
    return fetcher('/patients')
}

const api = {
    getAll,
}

export default api;
