import axios from 'axios';

const myAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET, PUT, POST",
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"
    }
})

export { myAxios }