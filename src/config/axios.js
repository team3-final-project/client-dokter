import axios from "axios";

const instance = axios.create({
  baseURL: "http://20.20.22.92:3000",
});

export default instance;
