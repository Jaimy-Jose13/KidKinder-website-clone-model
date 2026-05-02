import React from 'react'

import { useState } from 'react'
import axios from "axios";

export const TeacherForm = () => {
     const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/teachers/add", formData);
      alert("Teacher Added Successfully");

      // Clear form
      setName("");
      setPosition("");
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Add Teacher</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Teacher Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Position</label>
            <input
              type="text"
              className="form-control"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Add Teacher
          </button>
        </form>
      </div>
    </div>
  )
}
