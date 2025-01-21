import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";
import AdminLogin from "./components/AdminLogin";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<UserForm />} />
            <Route path="/admin" element={<AdminLogin />} />
         </Routes>
      </Router>
   );
};

export default App;

