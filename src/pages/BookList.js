import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./BookList.css";


const baseURL = "https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books";
function BookList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data);
    });
  }, []);

  const removeData = (id) => {
    axios.delete(`${baseURL}/${id}`).then((res) => {
      const del = items.filter((employee) => id !== employee.id);
      setItems(del);
    });
  };
  return (
    <div className="container">
      {items.map(function (item, index) {
        return (
          <Card
            style={{ width: "18rem" }}
            className="d-inline-flex p-2 card-item"
            key={item.id}
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.author}</Card.Text>
              <Link to={`./detail/${item.id}`}>
                <Button variant="primary">Detail</Button>
              </Link>

              <Link to={`./update/${item.id}`}>
                <Button className="second-button" variant="success">Update</Button>
              </Link>
              <br></br>
              <Button
                className="third-button"
                variant="danger"
                onClick={() => removeData(item.id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default BookList;
