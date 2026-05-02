import React, { useEffect, useState } from "react";
import axios from "axios";

export const ClassList = () => {
 const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    const res = await axios.get("http://localhost:5000/api/classes");
    setClasses(res.data);
  };

  return (
    <div className="container mt-5">
        <h2 style={{paddingBottom:"20px"}} >List Of Classes</h2>
      <div className="row">
        {classes.map((item) => (
 <div className="col-lg-4 mb-5" key={item._id}>
                <div className="card border-0 bg-light shadow-sm pb-2">
                  <img className="card-img-top mb-2" src={`http://localhost:5000/uploads/${item.image}`} alt="" />
                  <div className="card-body text-center">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">
                      {item.description}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Age of Kids</strong>
                      </div>
                      <div className="col-6 py-1">{item.ageGroup}</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Total Seats</strong>
                      </div>
                      <div className="col-6 py-1">{item.totalSeats} Seats</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Class Time</strong>
                      </div>
                      <div className="col-6 py-1">{item.classTime}</div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Tution Fee</strong>
                      </div>
                      <div className="col-6 py-1">{item.tuitionFee}</div>
                    </div>
                  </div>
                  {/* <a href className="btn btn-primary px-4 mx-auto mb-4">Join Now</a> */}
                </div>
              </div>
            ))}
              </div>
      </div>
  )
}
