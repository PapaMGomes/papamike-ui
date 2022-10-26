import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://papamike-ui.vercel.app/api',
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    }
})

export const httpClient = axiosClient
