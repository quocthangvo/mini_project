import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, Navbar } from "./components/layout";

import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import ProductList from "./pages/admin/products/ProductList";
import GenreList from "./pages/admin/genres/GenreList";
import { ToastContainer } from "react-bootstrap";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/genres" element={<GenreList />} />
            <Route path="/admin/products" element={<ProductList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
