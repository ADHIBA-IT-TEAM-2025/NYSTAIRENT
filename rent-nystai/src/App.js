import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './App.css'
import RentHome from "./RENTNYSTAICOMPONENT/B-HOME/RENTHOME";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>

      <RentHome/>

    </>
  );
}

export default App;
