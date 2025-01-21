import React, { useState } from "react";
import axios from "axios";
import AdminDashboard from "./AdminDashboard";

const AdminLogin = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [token, setToken] = useState(null);

   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post("http://localhost:5000/api/admin/login", { username, password });
         setToken(response.data.token);
      } catch {
         alert("Invalid Credentials");
      }
   };

   if (token) {
      return <AdminDashboard token={token} />;
   }

   return (
      <form onSubmit={handleLogin}>
         <h2>Admin Login</h2>
         <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
         <button type="submit">Login</button>
      </form>
   );
};

export default AdminLogin;
