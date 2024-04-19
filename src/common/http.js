import axios from "axios";

export const laravelUrl = 'http://127.0.0.1:8000'

const instance = axios.create({
    baseURL: `${laravelUrl}/api`,
    headers: {
      "Accept": "application/json",
    }
  });
  
  export default instance;