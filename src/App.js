import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContactPage } from "./components/ContactPage/ContactPage";
import HomePage from "./pages/homePage/HomePage";import { Stack, Button } from "@mui/material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contact"
              element={
                <div>
                  <ContactPage />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
