import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
  headers: { "X-Custom-Header": "X-Custom-Header" },
});
export default instance; // Only For Default We can get it by any keyword
