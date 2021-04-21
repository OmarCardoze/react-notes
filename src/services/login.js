import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/login'

const login = async Credentials => {
    const { data } = await axios.post(baseUrl, Credentials)
    return data
}

export default { login }
