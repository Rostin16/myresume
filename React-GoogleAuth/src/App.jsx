import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import AuthPage from "./components/AuthPage";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
