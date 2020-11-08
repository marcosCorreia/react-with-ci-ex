import axios from 'axios'

const apiKey = 'ea2fbf4606e2e9221826706f287c2785eaa0433a932f287eba8132f9ac809a24';

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `ApiKey ${apiKey}`
    }
});