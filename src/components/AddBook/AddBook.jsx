import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./AddBook.css";
import { addBook } from "../../redux/actions/action";

const AddBook = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newBook, setnewBook] = useState({
    img: "",
    title: "",
  });
  const handleJoin = (e) => {
    setnewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  // console.log(newBook, "my new add");
  const dispatch = useDispatch();
  const handleSave = () => {
    if (newBook.img !== "" && newBook.title !== "") {
      dispatch(addBook(newBook));
      handleClose();
      setnewBook("");
    } else {
      alert("you cannot add an emty book !");
    }
  };

  return (
    <div>
      {" "}
      <Button variant="dark" onClick={handleShow} style={{ marginTop: "8px" }}>
        Add book
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        className="addcontainer"
        bg="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addmodal">
            <label htmlFor="">Book Cover URL </label>
            <input
              type="text"
              name="img"
              value={newBook.img}
              onChange={handleJoin}
            />
            <label htmlFor="">Book Name </label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleJoin}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBook;
