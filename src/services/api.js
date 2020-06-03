import axios from "axios";

const api = axios.create({
  baseURL: "https://clube-aquarius.herokuapp.com/api",
});

export default api;
