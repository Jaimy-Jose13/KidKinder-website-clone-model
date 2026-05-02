import React from 'react'
import { Learn } from './Learn'
import { Information } from './Information'
import { OurTeachers } from './OurTeachers'

export const About = () => {
  return (
    <div>
         <div className="container-fluid bg-primary mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '400px'}}>
            <h3 className="display-3 font-weight-bold text-white">About Us</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0"><a className="text-white" href>Home</a></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0">About Us</p>
            </div>
          </div>
        </div>
        <div><Learn/></div>
        <div><Information/></div>
        <div><OurTeachers/></div>
    </div>
  )
}
