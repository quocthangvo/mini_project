import axios from "axios";
const fetchAllBook = () => {
  // Gọi API GET và trả về một Promise
  return axios.get("http://localhost:8080/api/v1/books");
};
const createBook = (name, price, description, genre_id) => {
  // Gọi API POST và truyền dữ liệu sách cần tạo qua tham số data
  return axios.post("http://localhost:8080/api/v1/books", {
    name,
    price,
    description,
    genre_id,
  });
};
const deleteBook = (id) => {
  return axios.delete(`http://localhost:8080/api/v1/books/delete/${id}`);
};
export { fetchAllBook, createBook, deleteBook };
