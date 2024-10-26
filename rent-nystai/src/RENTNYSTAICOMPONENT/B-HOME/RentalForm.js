import React, { useState,useEffect,useRef } from 'react';
import './RentalForm.css';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const RentalForm = () => {



    // form dropdown
    const durationInputRef = useRef(null);
    const locationInputRef = useRef(null);
    const durationDropdownRef = useRef(null);
    const locationDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                durationInputRef.current &&
                !durationInputRef.current.contains(event.target) &&
                durationDropdownRef.current &&
                !durationDropdownRef.current.contains(event.target)
            ) {
                durationDropdownRef.current.style.display = 'none';
            }
            if (
                locationInputRef.current &&
                !locationInputRef.current.contains(event.target) &&
                locationDropdownRef.current &&
                !locationDropdownRef.current.contains(event.target)
            ) {
                locationDropdownRef.current.style.display = 'none';
            }
        };

        // Add event listener for clicks outside dropdowns
        document.addEventListener('click', handleClickOutside);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const showDurationDropdown = () => {
        durationDropdownRef.current.style.display = 'block';
    };

    const showLocationDropdown = () => {
        locationDropdownRef.current.style.display = 'block';
    };

    const selectDurationOption = (event) => {
        durationInputRef.current.value = event.target.textContent;
        durationDropdownRef.current.style.display = 'none';
    };

    const selectLocationOption = (event) => {
        locationInputRef.current.value = event.target.textContent;
        locationDropdownRef.current.style.display = 'none';
    };

    return (
        <>

            <section className=" main-form-section-rent">

                <div className="container">

                    <div className=" heading-form-rent">

                        <div className="col-lg-6">
                            <h2>CONTACT US</h2>
                            <span>Whether you have a question about features, pricing, configuration, or anything else, our team is ready to answer all your questions. Please fill the below form, so that our experts can assist you.</span>
                        </div>

                    </div>

                    <form class="col-12 form-rent">
                        <div className="row">
                            <div className="col-lg-6">
                                <div class="group ">
                                    <input type="text" required />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Name</label>
                                </div>
                                <div class="group ">
                                    <input type="text" required />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Email</label>
                                </div>

                                {/* Location Input */}
                                <div className="group">
                                    <input
                                        type="text"
                                        id="locationInput"
                                        ref={locationInputRef}
                                        onClick={showLocationDropdown}
                                        required
                                    />
                                    <span className="highlight"></span>
                                    <label htmlFor="locationInput">Location</label>
                                    {/* Dropdown */}
                                    <div className="dropdown" ref={locationDropdownRef}>
                                        <ul>
                                            <li onClick={selectLocationOption}>Coimbatore</li>
                                            <li onClick={selectLocationOption}>Trichy</li>
                                            <li onClick={selectLocationOption}>Chennai</li>
                                            <li onClick={selectLocationOption}>Madurai</li>
                                            <li onClick={selectLocationOption}>San Francisco</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <div class="group ">
                                    <input type="text" required />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label> Mobile Number</label>
                                </div>
                                <div class="group ">
                                    <input type="text" required />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>What are you Looking for ?</label>
                                </div>

                                {/* Duration Input */}
                                <div className="group">
                                    <input
                                        type="text"
                                        id="durationInput"
                                        ref={durationInputRef}
                                        onClick={showDurationDropdown}
                                        required
                                    />
                                    <span className="highlight"></span>
                                    <label htmlFor="durationInput">Duration</label>
                                    {/* Dropdown */}
                                    <div className="dropdown" ref={durationDropdownRef}>
                                        <ul>
                                            <li onClick={selectDurationOption}>1 hour</li>
                                            <li onClick={selectDurationOption}>2 hours</li>
                                            <li onClick={selectDurationOption}>3 hours</li>
                                            <li onClick={selectDurationOption}>4 hours</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div class="group message-form col-12">
                                <input type="text" required />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Message</label>
                            </div>


                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary submit-button-rent col-lg-2 col-md-4 col-sm-6 col-xs-12">Submit</button>
                            </div>

                        </div>
                    </form>

                </div>

            </section>






        </>
    );
};

export default RentalForm;
