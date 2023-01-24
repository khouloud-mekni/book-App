import React, { useState, useEffect } from "react";
import Book from "../Book/Book";
import "./BooksList.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toogledone } from "../../redux/actions/action";

const BooksList = () => {
  const books = useSelector((state) => state.bookListReducer.bookList);
  const [bookDetails, setBookDetail] = useState([]);
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  console.log(bookDetails, "bookdetails");
  console.log(done, "done");
  console.log(notDone, "undo");
  const handleDone = () => {
    setDone(true);
    setNotDone(false);
  };
  const handleNotDone = () => {
    setDone(false);
    setNotDone(true);
  };
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(toogledone());
    setDone(false);
    setNotDone(false);
    
  };
  const handlefilter = () => {
    if (done === true) {
      setBookDetail(bookDetails.filter((bookdeta) => bookdeta.isDone === true));
    } else if (notDone === true) {
      setBookDetail(
        bookDetails.filter((bookdeta) => bookdeta.isDone === false)
      );
    }
  };
  useEffect(() => {
    setBookDetail(books);
    handlefilter();
  }, [done, notDone, books]);

  return (
    <div className="bookslist">
      <div className="filterbtn">
        <Button variant="success" onClick={handleDone}>
          {" "}
          filter by done{" "}
        </Button>
        <Button variant="danger" onClick={handleNotDone}>
          {" "}
          filter by not done{" "}
        </Button>
        <Button variant="info" onClick={handleReset}>
          {" "}
          Reset
        </Button>
      </div>
      <div className="bookss">
        {bookDetails.map((bookDetail) => (
          <Book bookDetail={bookDetail} />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
