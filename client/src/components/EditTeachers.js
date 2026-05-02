import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const EditTeachers = () => {
     const { id } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    name: "",
    position: ""
  });

  const [image, setImage] = useState(null);

  // Fetch teacher details
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/teachers/${id}`)
      .then(res => setTeacher(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", teacher.name);
    formData.append("position", teacher.position);

    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(
        `http://localhost:5000/api/teachers/${id}`,
        formData
      );

      alert("Teacher Updated Successfully");
      navigate("/dashboard/teachers-list");

    } catch (error) {
      console.log(error);
    }
  };

  return (
   <div className="container mt-5">
      <h2>Edit Teacher</h2>

      <form onSubmit={handleUpdate}>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={teacher.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Position</label>
          <input
            type="text"
            name="position"
            className="form-control"
            value={teacher.position}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Change Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Teacher
        </button>

      </form>
    </div>
  )
}
