import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = ({ token }) => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      axios
         .get("http://localhost:5000/api/admin/users", { headers: { Authorization: token } })
         .then((res) => setUsers(res.data))
         .catch((err) => console.error(err));
   }, [token]);

   return (
      <div>
         <h2>Admin Dashboard</h2>
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Social Media Handle</th>
                  <th>Image</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr key={user._id}>
                     <td>{user.name}</td>
                     <td>{user.socialMedia}</td>
                     <td>
                        {user.image ? <a href={`http://localhost:5000/${user.image}`}>View Image</a> : "No Image"}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default AdminDashboard;

