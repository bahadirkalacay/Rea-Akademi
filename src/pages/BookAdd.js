import React from "react";
import { useState } from "react";
import axios from "axios";
import { Alert, Button } from "react-bootstrap";
import "./BookAdd.css"

const baseURL = "https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books";

function BookAdd() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      name: name,
      author: author,
      price: price,
    };

    axios
      .post(baseURL, data)
      .then((res) => {
        setData(res.data);
        setName("");
        setAuthor("");
        setPrice("");
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };
  return (
    <div className="container p-3 ">
      <h2 className="d-inline-block mb-3">Add To Book</h2>
      <div
       className="formInformation"
        style={{
          maxWidth: 350,
          marginLeft: "480px",
          marginTop: "30px",
          textAlign: "left",
        }}
      >
        <div className="form-group formInformation2" >
          <label htmlFor="name">Book Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group formInformation2">
          <label htmlFor="job" className="mt-2">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="job"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group formInformation2">
          <label htmlFor="price" className="mt-2">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="btn btn-primary mt-3 buttonInformation2"
          onClick={handleSubmit}
          style={{ width: "100%" }}
        >
          Add
        </Button>
      </div>
      {isError && (
        <small className="mt-3 d-inline-block text-danger">
          Something went wrong. Please try again later.
        </small>
      )}
      {data && (
        <div className="mt-3">
          <Alert style={{width:"500px", marginLeft:"400px", marginTop:"30px"}} variant="success">Successful</Alert>
        </div>
      )}
    </div>
  );
}

export default BookAdd;
