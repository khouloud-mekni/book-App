import React, { useState } from "react";
import "./Book.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editbook, toogledone } from "../../redux/actions/action";
const Book = ({ bookDetail }) => {
  // console.log(bookDetail , 'bookdetail in book')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //for the edit i go to preapaer the state and the handle edit to restore my mdified task then the submit

  const [editedBook, seteditedBook] = useState({ ...bookDetail });
  // console.log(editedBook, "the edited book");
  const handleEdit = (e) => {
    seteditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(editbook(editedBook));
    // console.log(editedBook, "edit in the submit");
    handleClose();
    // toogledone
  };
  const handleToggle = () => {
    dispatch(toogledone(bookDetail.id));
  };

  return (
    <div className="book-card ">
      <img src={bookDetail.img} alt={bookDetail.title} className="book-cover" />
      <h1 className="book-title"> {bookDetail.title} </h1>

      <button
        className={`read-button ${bookDetail.isDone ? "read" : "Done"}`}
        onClick={handleToggle}
      >
        {bookDetail.isDone ? "Done" : "Read"}
      </button>
      <button className="editbtn" onClick={handleShow}></button>

      {/* edit modal */}
      <Modal show={show} onHide={handleClose} className="themed-modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <label>Book Cover</label>
          <input
            type="text"
            name="img"
            onChange={handleEdit}
            defaultValue={editedBook.img}
          />
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            onChange={handleEdit}
            defaultValue={editedBook.title}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Book;
