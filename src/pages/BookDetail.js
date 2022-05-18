import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {  Card } from "react-bootstrap";

const baseURL = "https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books";

function BookDetail(props) {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}/${id}`).then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="container">
      <Card
        style={{ width: "18rem" }}
        className="d-inline-flex p-2 card-item"
        key={items.id}
      >
        <Card.Img variant="top" src={items.image} />
        <Card.Body>
           <Card.Title>Book Id : {items.id}</Card.Title>
          <Card.Text>Book name : {items.name}</Card.Text>
          <Card.Text>Book Author : {items.author}</Card.Text>
          <Card.Text>Book Price : {items.price} $</Card.Text>
          <Card.Text>Book Create : {items.createdAt}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookDetail;
