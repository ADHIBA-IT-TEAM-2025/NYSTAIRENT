import  React, { useState, useEffect, useRef } from "react";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faEnvelope, faLocationDot, faPhone, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import  { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import  AnchorLink from "react-anchor-link-smooth-scroll";
import  './RENTHOME.css'
import  { Swiper, SwiperSlide } from 'swiper/react';
import  'swiper/css';
import  'swiper/css/pagination';
import  'swiper/css/autoplay';
import  { Pagination, Autoplay } from 'swiper/modules';
import  RentalForm from "./RentalForm";
import  Isotope from 'isotope-layout';
import  Carousel from 'react-bootstrap/Carousel';
import  'bootstrap/dist/css/bootstrap.css';
import  'bootstrap/dist/js/bootstrap.js';
import  'bootstrap/dist/css/bootstrap.min.css';
// nav bar-logo
import  navbarlogonys from '../IMAGE/nystai for rental-01 (1).png'
// pro ductlogo
import  productlogo from '../IMAGE/Tri-01.png'
// lan dingbanner1      
import  landingbanner1 from '../IMAGE/BANNER-1 (1).png'
import  landingbanner2 from '../IMAGE/BANNER-1 (2).png'
import  landingbanner3 from '../IMAGE/BANNER-1 (3).png'
// abo utus
import  aboutus from '../IMAGE/aboutus.png'
// why we
import  whywe from '../IMAGE/question.png'
//SERV ICEPROVIDERS
import  SERVICEPROVIDERS from '../IMAGE/SERVICEPROVIDERS.png'
// div idegreen
import  dividegreen1 from '../IMAGE/dividegreen (1).png'
import  dividegreen2 from '../IMAGE/dividegreen (2).png'
// ste ps
import  step1img from '../IMAGE/card-1-img.png'
import  step2img from '../IMAGE/card-2-img.png'
import  step3img from '../IMAGE/card-3-img.png'
import  step4img from '../IMAGE/card-4-img.png'
// ser viceprovider
import  serviceprovider1 from '../IMAGE/serviceprovider1 (1).png'
import  serviceprovider2 from '../IMAGE/serviceprovider1 (2).png'
import  serviceprovider3 from '../IMAGE/serviceprovider1 (3).png'
import  serviceprovider4 from '../IMAGE/serviceprovider1 (4).png'
// ban nericon
import  bannericon1 from '../IMAGE/icons-banner-rent/icon-1.png'
import  bannericon2 from '../IMAGE/icons-banner-rent/icon-2.png'
import  bannericon3 from '../IMAGE/icons-banner-rent/icon-3.png'
import  bannericon4 from '../IMAGE/icons-banner-rent/icon-4.png'
// are a1img
import  area1img from '../IMAGE/AREAS/Warehouse.png'
import  area2img from '../IMAGE/AREAS/Bank.png'
import  area3img from '../IMAGE/AREAS/EducationalInstitute.png' 
import  area4img from '../IMAGE/AREAS/Mall.png'
import  area5img from '../IMAGE/AREAS/society.png'
import  area6img from '../IMAGE/AREAS/Exhibition.png'
import  area7img from '../IMAGE/AREAS/Factory & Office.png'
import  area8img from '../IMAGE/AREAS/Construction site.png'
import  area9img from '../IMAGE/AREAS/Transport.png'
import  area10img from '../IMAGE/AREAS/hospital.png'
import  area11img from '../IMAGE/AREAS/Road traffic.png'
import  area12img from '../IMAGE/AREAS/Telecom.png'
import  area13img from '../IMAGE/AREAS/Agriculture land.png'
import  area14img from '../IMAGE/AREAS/Assessment agency.png'
import  area15img from '../IMAGE/AREAS/City surveillance.png'
//NVR 
import  NVR from '../IMAGE/CAMERA/NYSTAI AI-IoT Hybrid NVR.png'
// cam era product
import  camera1 from '../IMAGE/CAMERA/AI Fish Eye Camera 3MP+IR.png'
import  camera2 from '../IMAGE/CAMERA/AI Indoor Motion Camera.png'
import  camera3 from '../IMAGE/CAMERA/AI Motion Camera with Battery.png'
import  camera4 from '../IMAGE/CAMERA/AI Motion Outdoor Camera with Battery.png'
import  camera5 from '../IMAGE/CAMERA/AI Outdoor Motion Camera.png'
import  camera6 from '../IMAGE/CAMERA/AI+4G Fixed Dome Camera.png'
import  camera7 from '../IMAGE/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.png'
import  camera8 from '../IMAGE/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.png'
import  camera9 from '../IMAGE/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.png'
import  camera10 from '../IMAGE/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.png'
import  camera11 from '../IMAGE/CAMERA/AI-WiFi+LAN PT Camera.png'
import  camera12 from '../IMAGE/CAMERA/Fish Eye Camera 2MP+IR.png'
import  camera13 from '../IMAGE/CAMERA/IR Motion Camera.png'
import  camera14 from '../IMAGE/CAMERA/Solar Intruder Camera.png'
// ste ps
import  access1 from '../IMAGE/ACCESSORIES/Remote Control B.png'
import  access2 from '../IMAGE/ACCESSORIES/Remote Control W.png'
import  access3 from '../IMAGE/ACCESSORIES/SOS - Emergency Button Switch.png'
import  access4 from '../IMAGE/ACCESSORIES/SOS - Emergency Wall Switch.png'
import  access5 from '../IMAGE/ACCESSORIES/Solar Wireless Siren.png'
import  access6 from '../IMAGE/ACCESSORIES/Wired Siren with Battery B.png'
import  access7 from '../IMAGE/ACCESSORIES/Wireless Repeator.png'
import  access8 from '../IMAGE/ACCESSORIES/Wireless Siren with Battery S.png'
import  access9 from '../IMAGE/ACCESSORIES/Wireless Siren with Battery.png'
import  Box from '@mui/material/Box';
import  Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    border: "none",

    outline: "none"
};

export default function RentHome() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // click to top
    const [pathLength, setPathLength] = useState(0);
    const [offsetActive, setOffsetActive] = useState(false);

    useEffect(() => {
        const progressPath = document.querySelector(".progress-wrap path");
        if (progressPath) {
            const length = progressPath.getTotalLength();
            setPathLength(length);

            progressPath.style.transition = "none";
            progressPath.style.strokeDasharray = `${length} ${length}`;
            progressPath.style.strokeDashoffset = `${length}`;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = "stroke-dashoffset 10ms linear";
        }

        const updateProgress = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            if (progressPath) {
                progressPath.style.strokeDashoffset = `${progress}`;
            }
        };

        const handleScroll = () => {
            updateProgress();

            if (window.scrollY > 50) {
                setOffsetActive(true);
            } else {
                setOffsetActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathLength]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // //////////////
    const [active, setActive] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: 'Help',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const toggleMenu = () => setActive(!active);
    const closeMenu = () => setActive(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validateForm = () => {
        let errorMessages = {};
        if (!formValues.name) {
            errorMessages.name = 'Please enter your name';
        }
        if (!formValues.email || !formValues.email.includes('@') || formValues.email.length < 6) {
            errorMessages.email = 'Please enter a valid email';
        }
        if (!formValues.message) {
            errorMessages.message = 'Please enter your message';
        }
        setErrors(errorMessages);
        return Object.keys(errorMessages).length === 0;
    };

    const sendToWhatsApp = () => {
        if (!validateForm()) return;

        const { name, email, subject, message } = formValues;
        const postLink = window.location.href;

        const whatsappMessage = `New message from ${name}\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}\n\n=============================\n*Form:* ${postLink}\n=============================`;

        const phoneNumber = '+91 81899 77700'; // Your WhatsApp number
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <>

            <section className="navbar-rent-nys-sec sticky-top">

                <nav id="mainNavbar" className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img
                                src={navbarlogonys}
                                alt="company Logo"
                                width="fit-content"
                                height="40"
                                className="d-inline-block align-text-top"
                            />
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            aria-controls="navbarNav"
                            aria-expanded={!isNavCollapsed ? true : false}
                            aria-label="Toggle navigation"
                            onClick={handleNavCollapse}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <AnchorLink className="AnchorLink" href="#HOME">
                                        <a className="nav-link ">
                                            HOME
                                        </a>
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink className="AnchorLink" href="#ABOUTUS">
                                        <a className="nav-link ">
                                            ABOUT US
                                        </a>
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink className="AnchorLink" href="#WHYCHOOSEUS">
                                        <a className="nav-link ">
                                            WHY CHOOSE US
                                        </a>
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink className="AnchorLink" href="#RENTALPRODUCTS">
                                        <a className="nav-link ">
                                            RENTAL  PRODUCTS
                                        </a>
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink className="AnchorLink" href="#AREASWECOVER">
                                        <a className="nav-link ">
                                            AREAS WE COVER
                                        </a>
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink className="AnchorLink" href="#CONTACTUS">
                                        <a className="nav-link ">
                                            CONTACT US
                                        </a>
                                    </AnchorLink>
                                </li>

                            </ul>
                        </div>

                        <div className="navbar-nav" onClick={handleOpen}>
                            <a className="nav-link" >
                                <a class="button-gradient">Get Quote</a>
                            </a>
                        </div>
                    </div>
                </nav>

                <div
                    className={`progress-wrap ${offsetActive ? "active-progress" : ""}`}
                    id="progress-scroll"
                    onClick={scrollToTop}
                >
                    <svg
                        className="progress-circle svg-content"
                        width="100%"
                        height="100%"
                        viewBox="-1 -1 102 102"
                    >
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>

                <div className={`nav-whatsapp ${active ? 'active' : ''}`}>
                    <div className='wrapperWA'>
                        <div className='wrapperWA-header'>
                            <h2>WhatsApp Live Chat</h2>
                            <div className='closeWA' onClick={closeMenu}>
                                <svg className='h-6 w-6' fill='none' stroke='#f40076' viewBox='0 0 24 24'>
                                    <path d='M6 18L18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'></path>
                                </svg>
                            </div>
                        </div>
                        <div className='form-container' id='waform-IT'>
                            <div className='formC'>
                                <div className='Fcontrol'>
                                    <input
                                        className='cName'
                                        id='cName'
                                        name='name'
                                        required
                                        type='text'
                                        value={formValues.name}
                                        onChange={handleChange}
                                    />
                                    <span className='nameC'>Name</span>
                                    <span className='valid' id='error_name'>{errors.name}</span>
                                </div>
                                <div className='Fcontrol'>
                                    <input
                                        className='cEmail'
                                        id='cEmail'
                                        name='email'
                                        required
                                        type='email'
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                    <span className='emailC'>Email</span>
                                    <span className='valid' id='error_email'>{errors.email}</span>
                                </div>
                            </div>
                            <div className='formC'>
                                <div className='Fcontrol'>
                                    <select
                                        className='cSubject'
                                        id='cSubject'
                                        name='subject'
                                        value={formValues.subject}
                                        onChange={handleChange}
                                    >
                                        <option value='Help'>Help</option>
                                        <option value='Question'>Question</option>
                                        <option value='Request'>Request</option>
                                    </select>
                                    <span className='subjectC'>Select Subject</span>
                                </div>
                                <div className='Fcontrol'>
                                    <textarea
                                        className='cMessage'
                                        id='cMessage'
                                        name='message'
                                        required
                                        value={formValues.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    <span className='messageC'>Message</span>
                                    <span className='valid' id='error_message'>{errors.message}</span>
                                </div>
                            </div>
                            <div className='formB'>
                                <a className='whatsapp-send' onClick={sendToWhatsApp}>
                                    <FontAwesomeIcon icon={faWhatsapp} /> Send WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='whatsapp-float' onClick={toggleMenu}>
                        <div className='whatsapp-icon'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                        <span className='whatsapp-text'>Talk to us?</span>
                    </div>
                </div>

                <a class="fh-button-sticky" onClick={handleOpen}>Book Online</a>

            </section>

            <div>

                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <div class="click-form-rent" id="container">
                            <div class="container" id="container">

                                <div class="form-container sign-in-container">
                                    <form action="#">
                                        <h1>Get Quote</h1>
                                        <div class="social-container">
                                            <a href="#" class="social"><FontAwesomeIcon icon={faYoutube} /></a>
                                            <a href="#" class="social"><FontAwesomeIcon icon={faYoutube} /></a>
                                            <a href="#" class="social"><FontAwesomeIcon icon={faYoutube} /></a>
                                        </div>

                                        <input type="email" placeholder="NAME" />
                                        <input type="password" placeholder="Password" />
                                        <input type="password" placeholder="Password" />
                                        <input type="password" placeholder="Password" />

                                        <button>SUBMIT</button>
                                    </form>
                                </div>

                                <div class="overlay-container" style={{ marginLeft: "-15PX" }}>
                                    <div class="overlay">
                                        <div class="overlay-panel overlay-right">
                                            <h1>GET IN TOUCH</h1>
                                            <p>Enter your personal details and start journey with us</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>

            <HOME />
            <ABOUTUS />
            <WHYCHOOSEUS />
            <RENTALPRODUCTS />
            <AREASWECOVER />
            <CONTACTUS />

        </>
    );
}

const HOME = () => {
    return (
        <>
            <section id="HOME">

                <section className="header-rent ">
                    <section className="main-banner-rent ">
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={landingbanner1}
                                    alt="First slide"
                                />
                                <Carousel.Caption className="text-white blurInBottom">
                                    <h5>Enhance your safety effortlessly</h5>
                                    <p>We provide rental CCTV & IP security as an affordable solution for property monitoring and protection, enhancing safety while eliminating long-term commitments.</p>
                                    <div className="col-lg-4 text-center bg-white p-3 rounded-3" style={{ color: "#1b6763" }}>Request Quote</div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={landingbanner2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption className="text-white blurInBottom">
                                    <h5>Enhance your safety effortlessly</h5>
                                    <p>We provide rental CCTV & IP security as an affordable solution for property monitoring and protection, enhancing safety while eliminating long-term commitments.</p>
                                    <div className="col-lg-4 text-center bg-white p-3 rounded-3" style={{ color: "#1b6763" }}>Request Quote</div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={landingbanner3}

                                    alt="Third slide"
                                />
                                <Carousel.Caption className="text-white blurInBottom">
                                    <h5>Enhance your safety effortlessly</h5>
                                    <p>We provide rental CCTV & IP security as an affordable solution for property monitoring and protection, enhancing safety while eliminating long-term commitments.</p>
                                    <div className="col-lg-4 text-center bg-white p-3 rounded-3" style={{ color: "#1b6763" }}>Request Quote</div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </section>
                    <div class="features">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 mb-4">
                                    <a href="#">
                                        <div class="item">
                                            <div class="image">
                                                <img src={bannericon1} alt="RENTAL IMAGE" style={{ maxWidth: "44px" }} />
                                            </div>
                                            <h4>RENTAL JOURNEY</h4>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-6 mb-4">
                                    <a href="#">
                                        <div class="item">
                                            <div class="image">
                                                <img src={bannericon2} alt="RENTAL IMAGE" style={{ maxWidth: "44px" }} />
                                            </div>
                                            <h4>
                                                COST EFFICIENT
                                            </h4>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-6 mb-4">
                                    <a href="#">
                                        <div class="item">
                                            <div class="image">
                                                <img src={bannericon3} alt="RENTAL IMAGE" style={{ maxWidth: "44px" }} />
                                            </div>
                                            <h4>BETTER SERVICE</h4>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-6 mb-4">
                                    <a href="#">
                                        <div class="item">
                                            <div class="image">
                                                <img src={bannericon4} alt="RENTAL IMAGE" style={{ maxWidth: "44px" }} />
                                            </div>
                                            <h4>FASTER PICK UP</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
};

const ABOUTUS = () => {
    return (
        <>
            <section id="ABOUTUS">
                <section className="container aboutus-rent-nys">

                    <div class="mini-block-statement w-clearfix">
                        <p class="text-block-60">NYSTAI / ABOUT US </p>
                        <h2 class="heading-34">WELCOME TO NYSTAI</h2>
                        <p class="text-block-60">Nystai is a trusted provider of CCTV rental services and installation support, with over 15 years of industry experience. We specialize in delivering high-quality surveillance solutions tailored to meet a wide range of security needs. Our dedicated team not only ensures seamless installation but also offers ongoing support, empowering clients with peace of mind. By choosing Nystai, you gain access to reliable, innovative security systems that enhance safety and protect your assets effectively, day and night.
                        </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={aboutus} alt="landingbanner" className="col-10 ABOUTUS-IMG-RENT" />
                    </div>

                </section>
            </section>;
        </>
    )
};

const WHYCHOOSEUS = () => {
    return (
        <>
            <section id="WHYCHOOSEUS">
                <section className="container whywe-rent-nys">
                    <div class="mini-block-statement w-clearfix">
                        <img src={whywe} alt="landingbanner" className="img-fluid" style={{ height: "180px", width: "fit-content" }} />
                        <h2 class="heading-34">WHY CHOOSE US</h2>
                        <p class="text-block-60">At Nystai, we stand out for our unparalleled expertise and commitment to customer satisfaction. With over 15 years of experience in the CCTV rental and installation industry, we provide tailored solutions to meet your unique security needs. Our team of skilled professionals ensures seamless installation and ongoing support, guaranteeing that your surveillance system operates flawlessly. We prioritize quality, reliability, and affordability, making security accessible for everyone. Choose Nystai for peace of mind, knowing your safety is our top priority. Experience exceptional service and innovative solutions that keep you secure, day and night.
                        </p>
                    </div>

                </section>

                <section className="CCTV CAMERA SERVICE PROVIDERT ">

                    <section className="container card-4-heading-rent ">
                        <div class="card mb-3" >
                            <div class="row g-0">

                                <div class="col-md-4">
                                    <img src={SERVICEPROVIDERS} class="img-fluid rounded-start" alt="..." />
                                </div>

                                <div class="col-md-8 ">
                                    <div className="camera-service-rent">
                                        <div class="card " style={{ display: "flex", alignItems: "center" }}>
                                            <h2 class="heading-34">CCTV CAMERA SERVICE PROVIDERS</h2>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-3 " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={serviceprovider1} class="img-fluid rounded-start serviceprovider1-icon" alt="..." />
                                                </div>
                                                <div class="col-md-9" >
                                                    <div class="card-body">
                                                        <h5 class="card-title">CCTV Rentals for Enhanced Security</h5>
                                                        <p class="card-text">Enhance your premises' security with Nystai's high-tech CCTV camera rentals, offering live and recorded surveillance for complete protection.r.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-3 " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={serviceprovider2} class="img-fluid rounded-start serviceprovider1-icon" alt="..." />
                                                </div>
                                                <div class="col-md-9" >
                                                    <div class="card-body">
                                                        <h5 class="card-title">Expert Installation and Support</h5>
                                                        <p class="card-text">Our installation services guarantee proper setup, with a support team available for any queries related to installation, data storage, and troubleshooting.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-3 " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={serviceprovider3} class="img-fluid rounded-start serviceprovider1-icon" alt="..." />
                                                </div>
                                                <div class="col-md-9" >
                                                    <div class="card-body">
                                                        <h5 class="card-title">Quality CCTV Systems</h5>
                                                        <p class="card-text">Nystai provides professional camera rentals, including NVRs and accessories, ensuring clear footage and comprehensive surveillance for any setting.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-3 " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <img src={serviceprovider4} class="img-fluid rounded-start serviceprovider1-icon" alt="..." />
                                                </div>
                                                <div class="col-md-9" >
                                                    <div class="card-body">
                                                        <h5 class="card-title">Integrated and Branded Solutionsle</h5>
                                                        <p class="card-text">Choose from high-quality integrated CCTV systems or reliable branded cameras, designed for seamless monitoring and ease of use.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section className="container">

                        <div class="mini-block-statement w-clearfix">
                            <h2 class="heading-34">OUR RECENT PROJECTS</h2>
                            <p class="text-block-60">We're excited to introduce our latest project: a comprehensive CCTV camera rental service designed for seamless security solutions. Whether for events, construction sites, or temporary installations, our high-quality cameras provide reliable surveillance without the hassle of long-term commitment.
                            </p>
                        </div>

                        <div class="RECENT-project-rent">
                            <div class="container">
                                <div class="box">
                                    <div class="imgBx"><img src="https://images.unsplash.com/photo-1558993468-4f71e02a64b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" alt="RENTAL IMAGE" /></div>
                                    <div class="content">
                                        <h2>Title</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum mollitia rem facere nostrum illo distinctio officiis numquam quo ratione quidem ipsam sint consequuntur, ex minima similique fugit velit nobis at.</p>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="imgBx"><img src="https://images.unsplash.com/photo-1558960765-b675e332ae35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" alt="RENTAL IMAGE" /></div>
                                    <div class="content">
                                        <h2>Title</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum mollitia rem facere nostrum illo distinctio officiis numquam quo ratione quidem ipsam sint consequuntur, ex minima similique fugit velit nobis at.</p>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="imgBx"><img src="https://images.unsplash.com/photo-1558993468-4f71e02a64b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" alt="RENTAL IMAGE" /></div>
                                    <div class="content">
                                        <h2>Title</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum mollitia rem facere nostrum illo distinctio officiis numquam quo ratione quidem ipsam sint consequuntur, ex minima similique fugit velit nobis at.</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>
                    {/* 5 cards */}

                    <section className="card-5-rent-nys bg-white container mt-5 mb-5">
                        <div className="col-12 row">
                            <div className="col-lg-4 position-relative">
                                <img src={dividegreen2} className="img-fluid cards-5-main-img rounded-2" />
                                <div className="overlay-text-rent">
                                    <h3>CAMERA INSTALLATION SERVICE PROVIDER</h3>
                                    <p>A camera installation service provider specializes in the setup and configuration of CCTV and IP camera systems, ensuring optimal placement, quality, and functionality to enhance security for residential and commercial properties.</p>
                                    <button className="btn-rent-main-card-rent  mt-2">Request Quote</button>
                                </div>
                            </div>

                            <div className="col-lg-8 row">
                                <div className="col-lg-6 position-relative mb-3">
                                    <img src={dividegreen1} className="img-fluid w-100 h-100 rounded-2 " />
                                    <div className="overlay-text-4cards-rent">
                                        <h4>CCTV  Camera Installation:</h4>
                                        <p>Nystai specializes in professional CCTV and IP camera installation, using over a decade of expertise to ensure efficient setups and maximum coverage.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6  position-relative">
                                    <img src={dividegreen1} className="img-fluid w-100 h-100 rounded-2" />
                                    <div className="overlay-text-4cards-rent">
                                        <h4>Get the Best Picture Quality:</h4>
                                        <p>Nystai prioritizes optimal picture quality in CCTV and IP camera installations, ensuring precise placement for maximum effectiveness while respecting your privacy.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 position-relative mt-3">
                                    <img src={dividegreen1} className="img-fluid w-100 h-100 rounded-2" />
                                    <div className="overlay-text-4cards-rent">
                                        <h4>Save Time and Efforts:</h4>
                                        <p>Nystai offers expert CCTV and IP camera installation services, ensuring precision to avoid costly repairs and inefficiencies. Our knowledgeable team follows a proven process for optimal system performance</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 position-relative mt-3">
                                    <img src={dividegreen1} className="img-fluid w-100 h-100 rounded-2" />
                                    <div className="overlay-text-4cards-rent">
                                        <h4>Boost Your Premises' Security:</h4>
                                        <p> Nystai's expert team collaborates with you to identify optimal camera locations and seamlessly integrate them with your network. We are dedicated to providing advanced, cutting-edge CCTV and IP camera installation services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>


            </section>
        </>
    );
};

const RENTALPRODUCTS = () => {

    const isotopeRef = useRef(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        isotopeRef.current = new Isotope('.isotope-box', {
            itemSelector: '.isotope-item',
        });
        return () => isotopeRef.current.destroy();
    }, []);


    useEffect(() => {
        if (isotopeRef.current) {
            const filterValue = filterKey === '*' ? '*' : `[data-type="${filterKey}"]`;
            isotopeRef.current.arrange({ filter: filterValue });
        }
    }, [filterKey]);

    const handleFilter = (key) => {
        setFilterKey(key);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <section id="RENTALPRODUCTS">

                <section className="container product">

                    <div class="mini-block-statement w-clearfix">
                        <h2 class="heading-34">WHAT WE DEAL WITH</h2>
                    </div>

                    <section className=" mainContainer">

                        <div className="isotope-toolbar">
                            <button
                                className={`filter-btn ${filterKey === '*' ? 'active' : ''}`}
                                onClick={() => handleFilter('*')}
                            >
                                <span> Show All</span>
                            </button>
                            <button
                                className={`filter-btn ${filterKey === 'CAMERA' ? 'active' : ''}`}
                                onClick={() => handleFilter('CAMERA')}
                                data-type="CAMERA"
                            >
                                CAMERA
                            </button>
                            <button
                                className={`filter-btn ${filterKey === 'NVR' ? 'active' : ''}`}
                                onClick={() => handleFilter('NVR')}
                                data-type="NVR"
                            >
                                NVR
                            </button>
                            <button
                                className={`filter-btn ${filterKey === 'DISPLAY' ? 'active' : ''}`}
                                onClick={() => handleFilter('DISPLAY')}
                                data-type="DISPLAY"
                            >
                                DISPLAY
                            </button>
                            <button
                                className={`filter-btn ${filterKey === 'ACCESSORIES' ? 'active' : ''}`}
                                onClick={() => handleFilter('ACCESSORIES')}
                                data-type="ACCESSORIES"
                            >
                                ACCESSORIES
                            </button>
                        </div>

                        <div className="isotope-box">

                            <div className="isotope-item" data-type="CAMERA">
                                <div class="features">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera1} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera2} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera3} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera4} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera5} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera6} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera7} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera8} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera9} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera10} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera11} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera12} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera13} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={camera14} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="isotope-item" data-type="NVR">
                                <div class="features">
                                    <div class="container">
                                        <div class="row">
                                            <div class=" mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} />
                                                        </div>
                                                        <div class="main-images" >
                                                            <img id="blue" class="" src={NVR} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="isotope-item" data-type="DISPLAY">
                                3
                            </div>

                            <div className="isotope-item" data-type="ACCESSORIES">
                                <div class="features">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} />
                                                        </div>
                                                        <div class="main-images" >
                                                            <img id="blue" class="" src={access1} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={access2} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={access3} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={access4} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} />
                                                        </div>
                                                        <div class="main-images" >
                                                            <img id="blue" class="" src={access5} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={access6} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={access7} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} className="icon-pro-rent-nys" />
                                                        </div>
                                                        <div class="main-images">
                                                            <img id="blue" class="blue active" src={access8} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-6 mb-4">
                                                <section className="product-card-rent-nys">
                                                    <div class="product-card">
                                                        <div class="logo-cart">
                                                            <img id="blue" class="blue active" src={productlogo} alt="blue" />
                                                            <FontAwesomeIcon icon={faShoppingBag} />
                                                        </div>
                                                        <div class="main-images" >
                                                            <img id="blue" class="" src={access9} alt="blue" />
                                                        </div>
                                                        <div class="shoe-details">
                                                            <span class="shoe_name">AI Fish Eye Camera 3MP+IR</span>
                                                            <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>

                                                        </div>
                                                        <div class="color-price">
                                                            <div class="color-option">
                                                                <span class="color">WIRELESS</span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price_num">NYSTAI</span>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <div class="button-layer"></div>
                                                            <button onClick={handleOpen}    >
                                                                Get Quote</button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>
                </section>

                <div>

                    <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box sx={style}>
                            <div class="click-form-rent" id="container">
                                <div class="container" id="container">

                                    <div class="form-container sign-in-container">
                                        <form action="#">
                                            <h1>Get Quote</h1>
                                            <div class="social-container">
                                                <a href="#" class="social"><FontAwesomeIcon icon={faYoutube} /></a>
                                                <a href="#" class="social"><FontAwesomeIcon icon={faYoutube} /></a>
                                                <a href="#" class="social"><FontAwesomeIcon icon={faYoutube} /></a>
                                            </div>

                                            <input type="email" placeholder="NAME" />
                                            <input type="password" placeholder="MOBILE NUMBER" />
                                            <input type="password" placeholder="EMAIL ID" />
                                            <input type="password" placeholder="LOOKING FOR" />
                                            <input type="password" placeholder="SELECTING CITY" />

                                            <button>SUBMIT</button>
                                        </form>
                                    </div>

                                    <div class="overlay-container" style={{ marginLeft: "-15PX" }}>
                                        <div class="overlay">
                                            <div class="overlay-panel overlay-right">
                                                <h1>GET IN TOUCH</h1>
                                                <p>Enter your personal details and start journey with us</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>


                <section className="step-rent-nys">

                    <div class="mini-block-statement w-clearfix">
                        <h2 class="heading-34">HOW TO RENT YOUR EQUIPMENT</h2>
                        <p class="text-block-60">We are a professionally managed organization providing affordable camera rental services, specializing in top-quality CCTV camera rentals. Our solutions cater to all your surveillance needs without the hassle of long-distance travel. We ensure that our reliable and efficient services are delivered right to your doorstep, making it easy for you to secure your premises with the <br /> latest technology.
                        </p>
                    </div>



                    <div class="wrapper-rent-nys">

                        <div class="profile-card js-profile-card">
                            <div class="profile-card__img">
                                <h2>1</h2>
                            </div>
                            <div class="profile-card__cnt js-profile-cnt">
                                <div class="profile-card__img-big"><img src={step1img} className="img-fluid" alt="step1img" /></div>
                                <div class="profile-card__name">Get a Personalized Quote</div>
                                <div class="profile-card-loc">
                                    <span class="profile-card-loc__txt">
                                        Connect with our experts to explore tailored plans that meet your specific business needs. We’ll provide you with quotes that suit your requirements, ensuring you find the perfect fit.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="profile-card js-profile-card">
                            <div class="profile-card__img">
                                <h2>2</h2>
                            </div>
                            <div class="profile-card__cnt js-profile-cnt">
                                <div class="profile-card__img-big"><img src={step2img} className="img-fluid" alt="step1img" /></div>
                                <div class="profile-card__name">Flexible Payment Solutions</div>
                                <div class="profile-card-loc">
                                    <span class="profile-card-loc__txt">
                                        We offer convenient and customized payment options for all your CCTV camera rentals. Our goal is to make the process as seamless as possible for our customers.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="profile-card js-profile-card">
                            <div class="profile-card__img">
                                <h2>3</h2>
                            </div>
                            <div class="profile-card__cnt js-profile-cnt">
                                <div class="profile-card__img-big"><img src={step3img} className="img-fluid" alt="step1img" /></div>
                                <div class="profile-card__name">Quick and Reliable Delivery</div>
                                <div class="profile-card-loc">
                                    <span class="profile-card-loc__txt">
                                        We are dedicated to delivering everything you need directly to your doorstep in the shortest possible time. Your convenience is our priority.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="profile-card js-profile-card">
                            <div class="profile-card__img">
                                <h2>4</h2>
                            </div>
                            <div class="profile-card__cnt js-profile-cnt">
                                <div class="profile-card__img-big"><img src={step4img} className="img-fluid" alt="step1img" /></div>
                                <div class="profile-card__name">Post-rental assistance</div>
                                <div class="profile-card-loc">
                                    <span class="profile-card-loc__txt">
                                        Our commitment to you doesn’t end with the rental. We offer robust support for all our products, and we’re just a call away! Reach out to us anytime for assistance, and we’ll resolve any issues promptly.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

            </section>
        </>
    )
};

const AREASWECOVER = () => {
    return (
        <>
            <section id="AREASWECOVER">

                <section className="area-rent-nys">

                    <div class="mini-block-statement w-clearfix">
                        <h2 class="heading-34">AREAS / INDUSTRIES WE HAVE COVERED</h2>
                    </div>

                    <div>
                        <ul class="cards areawhatwe-rent-nys">
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area1img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area1img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Warehouse</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">Expertise in optimizing warehouse operations for efficiency and productivity.</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area2img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area2img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Bank</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">Specialized in enhancing banking processes for improved customer service. </p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area3img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area3img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Educational
                                                    Instituter</h3>

                                            </div>
                                        </div>
                                        <p class="card__description"> Focused on transforming educational practices for better student outcomes.
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area4img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area4img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Mall</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">Innovating retail experiences to boost shopper engagement and satisfaction</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area5img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area5img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Residential
                                                    Society</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">Enhancing community living through improved services and amenities. </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="cards areawhatwe-rent-nys">
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area6img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area6img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Exhibition</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">CCTV rental for exhibitions, enhancing security and event monitoring effectively.
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area7img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area7img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Factory & Office </h3>

                                            </div>
                                        </div>
                                        <p class="card__description"> CCTV rental for factories and offices, ensuring safety and productivity. </p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area8img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area8img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Construction siter</h3>

                                            </div>
                                        </div>
                                        <p class="card__description"> Ensuring safety and monitoring progress at construction sites effectively. </p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area9img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area9img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Transport</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">Enhancing security and monitoring logistics for efficient transport operations. </p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area10img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area10img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Hospital</h3>

                                            </div>
                                        </div>
                                        <p class="card__description"> Improving patient safety and monitoring within hospital environments effectively.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="cards areawhatwe-rent-nys">
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area11img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area11img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Road traffic</h3>

                                            </div>
                                        </div>
                                        <p class="card__description"> Monitoring Road traffic to enhance safety and improve congestion management.</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area12img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area12img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Telecom</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">Enhancing security and monitoring operations within the telecom industry effectively.</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area13img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area13img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Agriculture landr</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">Monitoring agriculture land for improved security and crop management. </p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area14img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area14img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Assessment agency</h3>

                                            </div>
                                        </div>
                                        <p class="card__description"> Enhancing security and monitoring operations for assessment agencies effectively.</p>
                                    </div>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a class="card card-rent-nys "  >
                                    <img src={area15img} class="card__image" alt="RENTAL IMAGE" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={area15img} alt="RENTAL IMAGE" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">City surveillance</h3>

                                            </div>
                                        </div>
                                        <p class="card__description">Improving safety and monitoring urban areas through comprehensive surveillance solutions. </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </section>

                <section className="WHAT THEY SAY ABOUT ">

                    <div class="mini-block-statement w-clearfix">
                        <h2 class="heading-34">WHAT THEY SAY ABOUT US</h2>
                    </div>

                    <section class="testimonial_section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="about_content">
                                        <div class="background_layer"></div>
                                        <div class="layer_content">
                                            <div class="section_title">
                                                <h5>CLIENTS</h5>
                                                <h2>Happy with<strong>Customers & Clients</strong></h2>
                                                <div class="heading_line"><span></span></div>
                                                <p>Need a reliable industrial solution? We're here for you! Whether you require short-term or long-term CCTV rental services, our team provides high-quality equipment tailored to your needs. From enhanced security to seamless monitoring, we ensure hassle-free installation and support. Let us help safeguard your operations with the best surveillance technology.</p>
                                            </div>
                                            <a href="#">Contact Us<i class="icofont-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="testimonial_box">
                                        <div class="testimonial_container">
                                            <div class="background_layer"></div>
                                            <div class="layer_content">

                                                <div class="testimonial_owlCarousel owl-carousel">
                                                    <Swiper
                                                        modules={[Pagination, Autoplay]}
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        navigation={true}
                                                        loop={true}
                                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                                    >
                                                        <SwiperSlide>
                                                            <div class="testimonials">
                                                                <div class="testimonial_content">
                                                                    <div class="testimonial_caption">
                                                                        <h6>Emily Johnson</h6>
                                                                        <span>Manager, SecureHomes</span>
                                                                    </div>
                                                                    <p>The CCTV rental service from SafeVision exceeded our expectations. Their equipment is top-notch, and their customer service is excellent.</p>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div class="testimonials">
                                                                <div class="testimonial_content">
                                                                    <div class="testimonial_caption">
                                                                        <h6>Michael Williams</h6>
                                                                        <span>CEO, TechGuard Solutions</span>
                                                                    </div>
                                                                    <p>We rented CCTV cameras for an event, and the installation was quick and professional. The clarity of the footage was outstanding!</p>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div class="testimonials">
                                                                <div class="testimonial_content">
                                                                    <div class="testimonial_caption">
                                                                        <h6>Sarah Lee</h6>
                                                                        <span>Director, UrbanSafe</span>
                                                                    </div>
                                                                    <p>SafeVision provided reliable, high-quality CCTV cameras for our office. Their service team is always responsive and helpful.</p>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div class="testimonials">
                                                                <div class="testimonial_content">
                                                                    <div class="testimonial_caption">
                                                                        <h6>James Anderson</h6>
                                                                        <span>Operations Manager, CitySec</span>
                                                                    </div>
                                                                    <p>The CCTV rental was easy to set up, and the customer support made sure everything was running smoothly. Highly recommended!</p>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div class="testimonials">
                                                                <div class="testimonial_content">
                                                                    <div class="testimonial_caption">
                                                                        <h6>Linda Carter</h6>
                                                                        <span>Owner, Carter Retail</span>
                                                                    </div>
                                                                    <p>I was impressed by the professionalism of SafeVision's team. The cameras were of high quality, and the rental process was hassle-free.</p>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>

                                                    </Swiper>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </section>

            </section>
        </>
    );
};

const CONTACTUS = () => {
    return (
        <>
            <section id="CONTACTUS" className="mt-5">

                <section className="RentalForm">

                    <div>
                        <RentalForm />
                    </div>

                </section>

                <section className="footer-rent-nys">
                    <section className="footer-rent">
                        <footer class="footer-section">
                            <div class="container">
                                <div class="footer-cta pt-5 pb-5">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-4 mb-30">
                                            <div class="single-cta">
                                                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#1b6763", fontSize: "30px" }} className="mb-2" />
                                                <div class="cta-text ms-4">
                                                    <h4 className="mb-2" >Follow us</h4>
                                                    <span> <div class="footer-social-icon">
                                                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                                        <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                                        <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                                                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                                    </div></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-md-4 mb-30">
                                            <div class="single-cta">
                                                <FontAwesomeIcon icon={faPhone} style={{ color: "#1b6763", fontSize: "30px" }} className="mb-2" />
                                                <div class="cta-text ms-4">
                                                    <h4 className="mb-2" >Call us</h4>
                                                    <span>+ 91 8189977700</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-md-4 mb-30">
                                            <div class="single-cta">
                                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#1b6763", fontSize: "30px" }} className="mb-2" />
                                                <div class="cta-text ms-4">
                                                    <h4 className="mb-2" >Mail us</h4>
                                                    <span>sales@nystai.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-content pt-5 pb-5">
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-3 mb-50">
                                            <div class="footer-widget">
                                                <div class="footer-logo">
                                                    <a href="index.html"><img src={navbarlogonys} class="img-fluid" alt="logo" /></a>
                                                </div>
                                                <div class="footer-text">
                                                    <p><span>ADDRESS:</span><br />
                                                        2/153, Padmalaya nagar, Narasimhanaickenpalayam,<br /> Coimbatore, Tamilnadu,<br /> India -641031.</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-xl-2 col-lg-3 col-md-6 mb-30">
                                            <div class="footer-widget">
                                                <div class="footer-widget-heading">
                                                    <h3>QUICK LINKS</h3>
                                                </div>
                                                <ul>
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">Products</a></li>
                                                    <li><a href="#">Guide</a></li>
                                                    <li><a href="#">Contact us</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-xl-2 col-lg-3 col-md-6 mb-30">
                                            <div class="footer-widget">
                                                <div class="footer-widget-heading">
                                                    <h3>LOCATIONS</h3>
                                                </div>
                                                <ul>
                                                    <li><a href="#">Coimbatore</a></li>
                                                    <li><a href="#">Mettupalayam</a></li>
                                                    <li><a href="#">Coonoor</a></li>
                                                    <li><a href="#">Ooty</a></li>
                                                    <li><a href="#">Pollachi</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-3 col-md-6 mb-50">
                                            <div class="footer-widget">
                                                <div class="footer-widget-heading">
                                                    <h3>Follow us</h3>
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.226238707773!2d76.96463007572169!3d11.021645254621335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85856f8741bf1%3A0xd8c2b6ec9d24e6b7!2s96%2C%205th%20St%20Ext%2C%205th%20Street%20Extension%2C%20Doctor&#39;s%20Colony%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1729255539439!5m2!1sen!2sin" width="85%" height="175" style={{ borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="copyright-area">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-10  text-lg-left">
                                            <div class="copyright-text">
                                                <p>Copyright © 2024 All Rights Reserved by ADHIBA TECHNOLOGIES PRIVATE LIMITED</p>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-2 d-none d-lg-block text-end">
                                            <div class="footer-menu">
                                                <ul>
                                                    <li><a href="#">Terms</a></li>
                                                    <li><a href="#">Privacy</a></li>
                                                    <li><a href="#">Policy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>

                    </section>
                </section>
            </section>
        </>
    )
};










