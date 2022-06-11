import axios from 'axios';

const http = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

const Api = {
    getAll: async () => {
        const response = await http.get('/character')
        return response.data
    }
}

export default Api