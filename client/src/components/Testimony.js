import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteLeft } from "react-icons/fa";
import test1 from "../images/testimonial-1.jpg"
import test2 from "../images/testimonial-2.jpg"
import test3 from "../images/testimonial-3.jpg"
import test4 from "../images/testimonial-4.jpg"

const testimonials = [
  {
    id: 1,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. ",
    name: "Parent Name",
    profession: "Profession",
    image:  test1,
  },
  {
    id: 2,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.",
    name: "Parent Name",
    profession: "Profession",
    image: test2,
  },
  {
    id: 3,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.",
    name: "Parent Name",
    profession: "Profession",
    image: test3,
  },
  {
    id: 4,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.",
    name: "Parent Name",
    profession: "Profession",
    image: test4,
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,          // 👈 show 3 cards
    slidesToSlide: 1,
  },
};

export const Testimony = () => {
  return (
    <div className="container py-5">
      <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">Testimonial</span>
              </p>
              <h1 className="mb-4">What Parents Say!</h1>
            </div>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows={false}
      >
        
        {testimonials.map((item, index) => (
          <div key={index} className="px-3" style={{paddingBottom:'50px'}}>


            <div className="bg-light shadow-sm rounded mb-4 p-4">
              <FaQuoteLeft className="text-primary mr-3" size={28} />
              <p>{item.text}</p>
            </div>

            <div className="d-flex align-items-center">
              <img
                className="rounded-circle"
                src={item.image}
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
                alt="parent"
              />

              <div className="pl-3">
                <h5>item.name</h5>
                <i>item.profession</i>
              </div>
            </div>

          </div>
        ))}
      </Carousel>

    </div>

  /*  <div className="container-fluid py-5">
          <div className="container p-0">
            <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">Testimonial</span>
              </p>
              <h1 className="mb-4">What Parents Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item px-3">
                <div className="bg-light shadow-sm rounded mb-4 p-4">
                  <h3 className="fas fa-quote-left text-primary mr-3" />
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                  eirmod clita lorem. Dolor tempor ipsum clita
                </div>
                <div className="d-flex align-items-center">
                  <img className="rounded-circle" src={test1} style={{width: '70px', height: '70px'}} alt="Image" />
                  <div className="pl-3">
                    <h5>Parent Name</h5>
                    <i>Profession</i>
                  </div>
                </div>
              </div>
              <div className="testimonial-item px-3">
                <div className="bg-light shadow-sm rounded mb-4 p-4">
                  <h3 className="fas fa-quote-left text-primary mr-3" />
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                  eirmod clita lorem. Dolor tempor ipsum clita
                </div>
                <div className="d-flex align-items-center">
                  <img className="rounded-circle" src={test2} style={{width: '70px', height: '70px'}} alt="Image" />
                  <div className="pl-3">
                    <h5>Parent Name</h5>
                    <i>Profession</i>
                  </div>
                </div>
              </div>
              <div className="testimonial-item px-3">
                <div className="bg-light shadow-sm rounded mb-4 p-4">
                  <h3 className="fas fa-quote-left text-primary mr-3" />
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                  eirmod clita lorem. Dolor tempor ipsum clita
                </div>
                <div className="d-flex align-items-center">
                  <img className="rounded-circle" src={test3} style={{width: '70px', height: '70px'}} alt="Image" />
                  <div className="pl-3">
                    <h5>Parent Name</h5>
                    <i>Profession</i>
                  </div>
                </div>
              </div>
              <div className="testimonial-item px-3">
                <div className="bg-light shadow-sm rounded mb-4 p-4">
                  <h3 className="fas fa-quote-left text-primary mr-3" />
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                  eirmod clita lorem. Dolor tempor ipsum clita
                </div>
                <div className="d-flex align-items-center">
                  <img className="rounded-circle" src={test4}style={{width: '70px', height: '70px'}} alt="Image" />
                  <div className="pl-3">
                    <h5>Parent Name</h5>
                    <i>Profession</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
  )
}
