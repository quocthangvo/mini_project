import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllBook } from "../../../services/ProductService";
import ModalAddProduct from "./ModalAddProduct";
import ModalComfirm from "./ModalComfirm";
const ProductList = (props) => {
  const [listBooks, setListBooks] = useState([]);
  const [isShowModalAddProduct, setIsShowModalAddProduct] = useState(false);

  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataBookDelete, setDataBookDelete] = useState({});

  // const handleDeleteBookFormModal = (book) => {
  //   let cloneListBook = _.cloneDeep(listBooks);
  //   cloneListBook = cloneListBook.filter((item) => item.id !== book.id);

  //   setListBooks(cloneListBook);
  // };

  const handleClose = () => {
    setIsShowModalAddProduct(false);
    setIsShowModalDelete(false);
  };
  const handleDelete = (book) => {
    setIsShowModalDelete(true);
    setDataBookDelete(book);
    console.log(book);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    let res = await fetchAllBook();
    if (res && res.data) {
      setListBooks(res.data);
    }
    // console.log("check", res);
  };

  console.log(listBooks);
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Sách</h2>
      <div className="row mb-3">
        <div className="col">
          <Link
            className="btn btn-primary me-1"
            to="/admin/products/create"
            role="button"
          >
            Thêm sách
          </Link>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setIsShowModalAddProduct(true)}
          >
            Tạo sách
          </button>
        </div>
        <ModalAddProduct
          show={isShowModalAddProduct}
          handleClose={handleClose}
        />
        <div className="col"></div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sách</th>
              <th>Giá</th>
              <th>Mô tả</th>
              <th>Thể loại</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {listBooks.map((item, index) => {
              return (
                <tr key={`books-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.genresName}</td>
                  <td style={{ width: 10, whiteSpace: "nowrap" }}>
                    <Link
                      className="btn btn-dark btn-sm me-1"
                      to={`/admin/products/edit/${item.id}`} // Truyền ID vào URL
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(item)}
                      type="button"
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                    <ModalComfirm
                      show={isShowModalDelete}
                      handleClose={handleClose}
                      dataBookDelete={dataBookDelete}
                      // handleDeleteBookFormModal={handleDeleteBookFormModal}
                    />
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

export default ProductList;
