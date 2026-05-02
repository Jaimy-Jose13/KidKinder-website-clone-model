import React from 'react'
import axios from "axios";
import { useState } from 'react';


export const BookSeat = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    className: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/book", formData);
      alert("Seat Booked Successfully!");
    } catch (error) {
      alert("Error booking seat");
    }
  };


  return (
    <div className="container-fluid py-5" style={{textAlign:'left'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <p className="section-title pr-5">
                  <span className="pr-2">Book A Seat</span>
                </p>
                <h1 className="mb-4">Book A Seat For Your Kid</h1>
                <p>
                  Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                  dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                  Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                  dolor
                </p>
                <ul className="list-inline m-0">
                  <li className="py-2">
                    <i className="fa fa-check text-success mr-3" />Labore eos amet
                    dolor amet diam
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-success mr-3" />Etsea et sit dolor
                    amet ipsum
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-success mr-3" />Diam dolor diam
                    elitripsum vero.
                  </li>
                </ul>
                <a href className="btn btn-primary mt-4 py-2 px-4">Book Now</a>
              </div>
              <div className="col-lg-5">
                <div className="card border-0">
                  <div className="card-header bg-secondary text-center p-4">
                    <h1 className="text-white m-0">Book A Seat</h1>
                  </div>
                  <div className="card-body rounded-bottom bg-primary p-5">
                   
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input type="text" name="name" className="form-control border-0 p-4" placeholder="Your Name" required="required" onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <select className="custom-select border-0 px-4" style={{height: '47px'}} name="className" onChange={handleChange}>
                          <option selected>Select A Class</option>
                          <option value={1}>Class 1</option>
                          <option value={2}>Class 2</option>
                          <option value={3}>Class 3</option>
                        </select>
                      </div>
                      <div>
                        <button className="btn btn-secondary btn-block border-0 py-3" type="submit">
                          Book Now
                        </button>
                      </div>
                    </form>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
