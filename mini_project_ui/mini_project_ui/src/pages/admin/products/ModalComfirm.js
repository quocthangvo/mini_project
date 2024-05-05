import { Modal, Button } from "react-bootstrap";
import { deleteBook } from "../../../services/ProductService";
import { toast } from "react-toastify";
function ModelComfirm(props) {
  const { show, handleClose, dataBookDelete } = props;
  const comfirmDelete = async () => {
    let res = await deleteBook(dataBookDelete.id);
    if (res && res.data) {
      toast.success("delete book success");
      handleClose();
    } else {
      toast.error("error delete ");
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
          <Modal.Title>Xóa sách</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="body-delete">
            Bạn có muốn xóa sách không ? <b>Sách= {dataBookDelete.name}</b>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng{" "}
          </Button>
          <Button variant="primary" onClick={() => comfirmDelete()}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModelComfirm;
