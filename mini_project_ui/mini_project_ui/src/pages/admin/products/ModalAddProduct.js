import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createBook } from "../../../services/ProductService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalAddProduct(props) {
  const { show, handleClose } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [genre_id, setGenreId] = useState("");
  const handleSaveBook = async () => {
    let res = await createBook(name, price, description, genre_id);

    if (res && res.id) {
      handleClose();
      setName("");
      setPrice("");
      setDescription("");
      toast.success("Successfully");
    } else {
      toast.error("Error...");
    }
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tạo sách</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="body-add-product">
            <form>
              <div className="mb-3">
                <label className="form-label">Tên sách</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Giá</label>
                <input
                  type="text"
                  className="form-control"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Thể loại</label>
                <input
                  type="text"
                  className="form-control"
                  value={genre_id}
                  onChange={(event) => setGenreId(event.target.value)}
                />
              </div>
            </form>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleSaveBook()}>
            Tạo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAddProduct;
