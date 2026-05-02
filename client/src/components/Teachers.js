import React from 'react'
import { OurTeachers } from './OurTeachers'
import { OurTeachers2 } from './OurTeachers2'
import { Testimony } from './Testimony'
import axios from "axios";
import { useState,useEffect } from 'react';

export const Teachers = () => {
/* const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/teachers");
      setTeachers(res.data);
    } catch (error) {
      console.log(error);
    } */



  return (
    <div>
        <div className="container-fluid bg-primary mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '400px'}}>
            <h3 className="display-3 font-weight-bold text-white">Our Teachers</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0"><a className="text-white" href>Home</a></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0">Our Teachers</p>
            </div>
          </div>
        </div>


  
        <div><OurTeachers/></div>
        <div><OurTeachers2/></div>
        <div><Testimony/></div>
    </div>
  )

  };