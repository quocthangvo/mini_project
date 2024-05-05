import axios from "axios";
const fetchAllGenres = () => {
  // Gọi API GET và trả về một Promise
  return axios.get("http://localhost:8080/api/v1/genres");
};
export { fetchAllGenres };
