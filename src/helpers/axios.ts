import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.API_URL || "http://127.0.0.1:1337"
});

export default axios;
