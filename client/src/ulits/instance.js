import axios from "axios"

const baseURL = "https://barbershop-information-system-kfi7.vercel.app"; 
// const baseURL = "http://data.advokat-sarnavskyi.com.ua"; 
// const baseURL = "http://localhost:3000"; 


const instance = axios.create({
  baseURL: baseURL,
});

export default instance;





