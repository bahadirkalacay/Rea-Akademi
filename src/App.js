import React from "react";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import BookUpdate from "./pages/BookUpdate";
import BookAdd from "./pages/BookAdd";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<BookList />} />
        <Route path="/detail/:id" element={<BookDetail />} />
        <Route path="/update/:id" element={<BookUpdate />} />
        <Route path="/add" element={<BookAdd />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
