import React from 'react'
import { useState } from 'react'
import axios from "axios";


export const AddClasses = () => {
const [formData, setFormData] = useState({
    title: "",
    description: "",
    ageGroup: "",
    totalSeats: "",
    classTime: "",
    tuitionFee: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let key in formData) {
      data.append(key, formData[key]);
    }

    data.append("image", image);

    await axios.post("http://localhost:5000/api/classes/add", data);

    alert("Class Added Successfully");
  };

  return (
     <div className="container mt-5">
      <h2>Add Class</h2>

      <form onSubmit={handleSubmit}>

        <input name="title" placeholder="Class Name" onChange={handleChange} className="form-control mb-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="form-control mb-2" />
        <input name="ageGroup" placeholder="Age Group " onChange={handleChange} className="form-control mb-2" />
        <input name="totalSeats" type="number" placeholder="Total Seats" onChange={handleChange} className="form-control mb-2" />
        <input name="classTime" placeholder="Class Time " onChange={handleChange} className="form-control mb-2" />
        <input name="tuitionFee" placeholder="Tuition Fee " onChange={handleChange} className="form-control mb-2" />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control mb-3" />

        <button className="btn btn-primary">Add Class</button>

      </form>
    </div>
  )
}
