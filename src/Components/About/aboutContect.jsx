import React from "react";
import "./aboutContect.css";
import bggimg from "../images/background/our-services.png"
import acsimg1 from "../images/background/001.svg"
import acsimg2 from "../images/background/002.svg"
import acsimg3 from "../images/background/003.svg"
import acsimg4 from "../images/background/004.svg"
import acsimg5 from "../images/background/005.svg"
import acsimg6 from "../images/background/006.svg"

const servicesData = [
    { img: acsimg1, text: " Quality First  " },
    { img: acsimg2, text: " Creative Approach " },
    { img: acsimg3, text: " On-Time Delivery " },
    { img: acsimg4, text: " Expert Developers " },
    { img: acsimg5, text: " Innovative Solutions " },
    { img: acsimg6, text: " End-to-End Support " }, // Fixed missing text
];

const AboutContact = () => {
    return (
        <div className="asc">
            <div className="container">


                <div className="services-section1 hero-service-wrap hero-section-wrap">
                    <div className="bg-services py-5">
                        <div className="custom-container">
                            {/* Mobile Section */}
                            <div className="hero-section-content-wrap p-0 d-lg-none d-block">
                                <div className="hero-section-content text-lg-start text-center mb-4">
                                    {/* <h5 className="section-subtitle mb-3">Contact Us</h5> */}
                                    <h2 className="section-title fade-in mb-0">
                                        Why Our Services are Better Than Others?
                                    </h2>
                                </div>
                            </div>

                            <div className="row gy-4 align-items-center h-100">
                                {/* Image Section */}
                                <div className="col-lg-6">
                                    <div className="services-img">
                                        <img src={bggimg} alt="Our Services" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="col-lg-6">
                                    <div className="hero-section-content-wrap p-0">
                                        {/* Desktop Heading */}
                                        <div className="hero-section-content text-lg-start text-center mb-lg-4 mb-3 d-lg-block d-none">
                                            {/* <h5 className="section-subtitle">Contact Us</h5> */}
                                            <h2 className="section-title fade-in mb-0">
                                                Why Our Services are Better Than Others?
                                            </h2>
                                        </div>

                                        {/* Service Items */}
                                        <div className="row gy-3">
                                            {servicesData.map((service, index) => (
                                                <div key={index} className="col-md-6">
                                                    <div className="services-icon-content d-flex align-items-center">
                                                        <div className="servi-icon">
                                                            <img src={service.img} alt={service.text} />
                                                        </div>
                                                        <div className="servi-content">
                                                            <p className="mb-0">{service.text}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>

                                        <div className="servi-content">
                                            <p className="mt-4" style={{ fontSize: "20px", fontWeight: "bold" }}>Let’s build something amazing together!  </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContact;
