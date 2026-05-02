import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const TeacherList = () => {

const [teachers, setTeachers] = useState([]);
const navigate = useNavigate();

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/teachers");
      setTeachers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/teachers/${id}`);
      alert("Teacher Deleted Successfully");
      fetchTeachers();
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ EDIT
  const handleEdit = (id) => {
    navigate(`/dashboard/edit-teacher/${id}`);
  };


  return (
<Container className="mt-5">

      <h2 className="text-center mb-4">Teachers List</h2>

      <Row>
        {teachers.map((teacher) => (
          <Col md={6} lg={4} className="mb-4" key={teacher._id}>

            <Card className="shadow-sm h-100 text-center">

              <Card.Img
                variant="top"
                src={`http://localhost:5000/uploads/${teacher.image}`}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <Card.Body>
                <Card.Title>{teacher.name}</Card.Title>
                <Card.Text className="text-muted">
                  {teacher.position}
                </Card.Text>

                <div className="d-flex justify-content-center gap-2">

                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() =>
                      navigate(`/dashboard/edit-teacher/${teacher._id}`)
                    }
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(teacher._id)}
                  >
                    Delete
                  </Button>

                </div>

              </Card.Body>

            </Card>

          </Col>
        ))}
      </Row>

    </Container>

 /*   <div>
           <div className="container-fluid bg-primary mb-5">
             <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '100px'}}>
               <h3 className="display-3 font-weight-bold text-white">Our Teachers</h3>
             
             </div>
           </div>
   
   
         <div className="row">
           {teachers.map((teacher) => (
             <div className="col-md-6 col-lg-3 text-center team mb-5" key={teacher._id}>
               <div className="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}}>
   
                 <img
                   src={`http://localhost:5000/uploads/${teacher.image}`}
                   alt={teacher.name}
                   className='img-fluid w-100 '
                 />
   <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                       <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter" /></a>
                       <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-facebook-f" /></a>
                       <a className="btn btn-outline-light text-center px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-linkedin-in" /></a>
                     </div>
                      </div>
                 <h5 className="mt-3">{teacher.name}</h5>
                 <p>{teacher.position}</p>
   <div>
     <button
                    className="btn btn-warning btn-sm me-2"
                     onClick={() => navigate(`/dashboard/edit-teacher/${teacher._id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(teacher._id)}
                  >
                    Delete
                  </button>

   </div>
              
             </div>
           ))}
         </div>
           
       </div> */
  )
}
