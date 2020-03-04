import axios from 'axios'

const axiosWithAuth2 = () => {
    const token = localStorage.getItem('token')
    
    return axios.create({
        baseURL: 'https://unburied-medcab.herokuapp.com/predictions',
        headers: {
            Authorization: `${token}`
        }
    })
}

export default axiosWithAuth2;