import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


export const EditBooking = () => {
 const { id } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    name: "",
    email: "",
    className: ""
  });

  // Fetch single booking
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/bookings/${id}`)
      .then((res) => setBooking(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/bookings/${id}`,
        booking
      );

      alert("Booking Updated Successfully");
      navigate("/dashboard/bookings");
    } catch (error) {
      console.log(error);
    }
  };


  return (
     <div className="container mt-5">
      <h2>Edit Booking</h2>

      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={booking.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={booking.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Class Name</label>
          <input
            type="text"
            className="form-control"
            name="className"
            value={booking.className}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Booking
        </button>
      </form>
    </div>
  )
}
