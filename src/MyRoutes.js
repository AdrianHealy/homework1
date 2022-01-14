import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnterForm from "./components/EnterForm";
import FormEmail from "./components/FormEmail";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormEmail />} />
        <Route path="/enter" element={<EnterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
