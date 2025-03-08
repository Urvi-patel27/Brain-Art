import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../HomeFirst/HeroSection1.css";
import roundImage from "../images/background/frame-hero-2-1.png";

const Herosection = () => {
    return (
        <div className="HeroSection-Start h-screen flex items-center justify-center">
            <section className="banner-section-two h-screen w-full justify-center relative">


                <div className="container">
                    <div className="main-div-r-t-s">

                        <div className="roundImageRotateDiv">
                            <img
                                src={roundImage}
                                alt="Hero"
                                className="Rondded"
                            />
                        </div>

                        <div className="taxxxessss">
                            <span className="sub-title animate-2 text-lg " style={{ color: '#ee8624' }}>
                                IT Software Solution
                            </span>
                            <h1 className="title animate-3  font-bold text-white leading-tight">
                                IT SOFTWARE <br /> TECH & SOLUTIONS
                            </h1>
                            <div className="flex flex-col sm:flex-row gap-4 mt-6 bts-hpage">
                                <Link
                                    to="/about"
                                    className="ostech-btn bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition"
                                >
                                    Discover More
                                </Link>
                                <Link
                                    to="/services"
                                    className="why-choose-one__link__btn ostech-btn bg-green-500 text-white px-6 py-3 hover:bg-green-600 transition"
                                >
                                    Take Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">


                    <img
                        src={roundImage}
                        alt="Hero"
                        className="home-round-img w-full max-w-md md:max-w-lg"
                    />



                    <div className="content-box w-full md:w-1/2  md:text-left tect-it-s-a absolute" >
                        <span className="sub-title animate-2 text-lg  text-gray-200">
                            IT Software Solution
                        </span>
                        <h1 className="title animate-3  font-bold text-white leading-tight">
                            IT SOFTWARE <br /> TECH & SOLUTIONS
                        </h1>


                        <div className="flex flex-col sm:flex-row gap-4 mt-6 bts-hpage">
                            <Link
                                to="/about"
                                className="ostech-btn bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition"
                            >
                                Discover More
                            </Link>
                            <Link
                                to="/services"
                                className="why-choose-one__link__btn ostech-btn bg-green-500 text-white px-6 py-3 hover:bg-green-600 transition"
                            >
                                Take Service
                            </Link>
                        </div>
                    </div>
                </div> */}
            </section >
        </div >
    );
};

export default Herosection;