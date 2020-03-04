import axios from 'axios'

const axiosWithAuth2 = () => {
    const token = localStorage.getItem('token')
    
    return axios.create({
        baseURL: '',
        headers: {
            Authorization: `${token}`
        }
    })
}

export default axiosWithAuth2