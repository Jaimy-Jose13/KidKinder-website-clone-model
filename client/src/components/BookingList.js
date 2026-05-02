import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BookingList = () => {
 const [bookings, setBookings] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

    // ✅ DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      alert("Booking Deleted Successfully");
      fetchBookings(); // refresh list
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ EDIT FUNCTION 
 const handleEdit = (id) => {
  navigate(`/dashboard/edit-booking/${id}`);
};

  return (
     <div className="container mt-5">
      <h2>Booking Details</h2>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Class Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking._id}>
              <td>{index + 1}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.className}</td>
               <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                   onClick={() => handleEdit(booking._id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(booking._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
