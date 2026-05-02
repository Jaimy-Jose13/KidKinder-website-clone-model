import React from 'react'
import { Information } from './Information'
import { Link } from "react-router-dom";
import image1 from "../images/header.png"
import { Learn } from './Learn';
import { Popular } from './Popular';
import { BookSeat } from './BookSeat';
import { OurTeachers } from './OurTeachers';
import { Testimony } from './Testimony';
import { LatestBlog } from './LatestBlog';

export const Home = () => {
  return (
    <div>
         <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
          <div className="row align-items-center px-3">
            <div className="col-lg-6 text-center text-lg-left">
              <h4 className="text-white mb-4 mt-5 mt-lg-0" style={{textAlign:'left'}}>Kids Learning Center</h4>
              <h1 className="display-3 font-weight-bold text-white" style={{textAlign:'left'}}>
                New Approach to Kids Education
              </h1>
              <p className="text-white mb-4" style={{textAlign:'left'}}>
                Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed
                sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed
                ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo
                dolore.
              </p>
              <a href className="btn btn-secondary mt-1 py-3 px-5" >Learn More</a>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <img className="img-fluid mt-5" src={image1} alt="" style={{paddingBottom:'20px'}} />
            </div>
          </div>
        </div>
        <div><Information/></div>
        <div><Learn/></div>
        <div><Popular/></div>
        <div><BookSeat/></div>
        <div><OurTeachers/></div>
        <div><Testimony/></div>
        <div><LatestBlog/></div>
        
    </div>
  )
}
