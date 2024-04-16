import axios from "axios"

// const baseURL = "https://barbershop-information-systems-server.vercel.app"; 
const baseURL = "http://data.advokat-sarnavskyi.com.ua"; 
// const baseURL = "http://localhost:3000"; 

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;





