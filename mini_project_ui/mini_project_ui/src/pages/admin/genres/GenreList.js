import { Link } from "react-router-dom";
import { fetchAllGenres } from "../../../services/GenreService";
import { useEffect, useState } from "react";
const GenreList = (props) => {
  const [listGenres, setlistGenres] = useState([]);
  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    let res = await fetchAllGenres();
    if (res && res.data) {
      setlistGenres(res.data);
    }
    // console.log("check", res);
  };

  console.log(listGenres);
  return (
    <div className="container my-4 ">
      <h2 className="text-center mb-4">Thể loại</h2>
      <div className="row mb-3">
        <div className="col">
          <Link
            className="btn btn-primary me-1"
            to="/admin/genres/create"
            role="button"
          >
            Thêm thể loại
          </Link>
          <button type="button" className="btn btn-outline-primary">
            Refresh
          </button>
        </div>
        <div className="col"></div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên thể loại</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>
            {listGenres.map((item, index) => {
              return (
                <tr key={`books-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td style={{ width: 10, whiteSpace: "nowrap" }}>
                    <Link
                      className="btn btn-dark btn-sm me-1"
                      to={`/admin/products/edit/${item.id}`} // Truyền ID vào URL
                    >
                      Edit
                    </Link>

                    <button type="button" className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default GenreList;
