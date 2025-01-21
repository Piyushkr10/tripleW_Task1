import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
   const [name, setName] = useState("");
   const [socialMedia, setSocialMedia] = useState("");
   const [image, setImage] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("socialMedia", socialMedia);
      formData.append("image", image);

      try {
         await axios.post("http://localhost:5000/api/users", formData);
         alert("Submission Successful!");
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <h2>User Submission Form</h2>
         <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
         <input type="text" placeholder="Social Media Handle" onChange={(e) => setSocialMedia(e.target.value)} />
         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
         <button type="submit">Submit</button>
      </form>
   );
};

export default UserForm;
