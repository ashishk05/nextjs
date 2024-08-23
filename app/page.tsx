import Image from "next/image";
import { Input } from "postcss";


export default function Home() {
  return (
    <main>
      
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-secondary"  role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        
        <div className="container-fluid bg-primary px-5 d-none d-lg-block">
            <div className="row gx-0 align-items-center">
                <div className="col-lg-5 text-center text-lg-start mb-lg-0">
                    <div className="d-flex">
                        <a href="#" className="text-muted me-4"><i className="fas fa-envelope text-secondary me-2"></i>Example@gmail.com</a>
                        <a href="#" className="text-muted me-0"><i className="fas fa-phone-alt text-secondary me-2"></i>+01234567890</a>
                    </div>
                </div>
                <div className="col-lg-3 row-cols-1 text-center mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" >
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal text-secondary"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal text-secondary"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal text-secondary"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal text-secondary"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle" href=""><i className="fab fa-youtube fw-normal text-secondary"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" >
                        <a href="#" className="text-muted me-2"> Help</a><small> / </small>
                        <a href="#" className="text-muted mx-2"> Support</a><small> / </small>
                        <a href="#" className="text-muted ms-2"> Contact</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid nav-bar p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="display-5 text-secondary m-0"><Image src="/img/brand-logo.png" alt="Logo" className="img-fluid" width={83} height={60} />Travisa</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link" data-bs-toggle="dropdown"><span className="dropdown-toggle">Pages</span></a>
                            <div className="dropdown-menu m-0">
                                <a href="feature.html" className="dropdown-item">Feature</a>
                                <a href="countries.html" className="dropdown-item">Countries</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="training.html" className="dropdown-item">Training</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <button className="btn btn-primary btn-md-square border-secondary mb-3 mb-md-3 mb-lg-0 me-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                    <a href="" className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">Get A Quote</a>
                </div>
            </nav>
        </div>

        <div className="carousel-header">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        
                        <Image src="/img/carousel-1.jpg" alt="Image" className="img-fluid" width={1903} height={338}/>
                        <div className="carousel-caption">
                            <div className="text-center p-4" style={{ maxWidth: '900px' }}>
                                <h4 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Solution For All Type Of Visas</h4>
                                <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Immigration Process Starts Here!</h1>
                                <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </p>
                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp" data-wow-delay="0.7s" href="#">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/img/carousel-2.jpg" alt="Image" className="img-fluid" width={1903} height={338} />
                        <div className="carousel-caption">
                          <div className="text-center p-4" style={{ maxWidth: '900px' }}>
                                <h5 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Solution For All Type Of Visas</h5>
                                <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Best Visa Immigrations Services</h1>
                                <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </p>
                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp" data-wow-delay="0.7s" href="#">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-secondary wow fadeInLeft" data-wow-delay="0.2s" aria-hidden="false"></span>
                    <span className="visually-hidden-focusable">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-secondary wow fadeInRight" data-wow-delay="0.2s" aria-hidden="false"></span>
                    <span className="visually-hidden-focusable">Next</span>
                </button>
            </div>
        </div>

        
        <div
        className="modal fade"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
            <div className="modal-header">
                <h4 className="modal-title text-secondary mb-0" id="exampleModalLabel">
                Search by keyword
                </h4>
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div className="modal-body d-flex align-items-center">
                <div className="input-group w-75 mx-auto d-flex">
                <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                    value=''
                />
                <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                </span>
                </div>
            </div>
            </div>
        </div>
        </div>
        
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="bg-light rounded">
                        <Image
                            src="/img/about-2.png"
                            alt="Image"
                            className="img-fluid w-100"
                            width={512}
                            height={256}
                            style={{ marginBottom: '-7px' }}  // style should be an object
                        />
                        <Image
                            src="/img/about-3.jpg"
                            alt="Image"
                            className="img-fluid w-100 border-bottom border-5 border-primary"
                            width={512}
                            height={256}
                            style={{
                                borderTopRightRadius: '300px',  // CamelCase for CSS properties in JS
                                borderTopLeftRadius: '300px'
                            }}
                        />
                            
                        </div>
                    </div>
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
                        <h5 className="sub-title pe-3">About the company</h5>
                        <h1 className="display-5 mb-4">We’re Trusted Immigration Consultant Agency.</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto consectetur iusto perferendis blanditiis assumenda dignissimos, commodi fuga culpa earum explicabo libero sint est mollitia saepe! Sequi asperiores rerum nemo!</p>
                        <div className="row gy-4 align-items-center">
                            <div className="col-12 col-sm-6 d-flex align-items-center">
                                <i className="fas fa-map-marked-alt fa-3x text-secondary"></i>
                                <h5 className="ms-4">Best Immigration Resources</h5>
                            </div>
                            <div className="col-12 col-sm-6 d-flex align-items-center">
                                <i className="fas fa-passport fa-3x text-secondary"></i>
                                <h5 className="ms-4">Return Visas Availabile</h5>
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="bg-light text-center rounded p-3">
                                    <div className="mb-2">
                                        <i className="fas fa-ticket-alt fa-4x text-primary"></i>
                                    </div>
                                    <h1 className="display-5 fw-bold mb-2">34</h1>
                                    <p className="text-muted mb-0">Years of Experience</p>
                                </div>
                            </div>
                            <div className="col-8 col-md-9">
                                <div className="mb-5">
                                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> Offer 100 % Genuine Assistance</p>
                                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> It’s Faster & Reliable Execution</p>
                                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> Accurate & Expert Advice</p>
                                </div>
                                <div className="d-flex flex-wrap">
                                    <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                                        <a href="" className="position-relative wow tada" data-wow-delay=".9s">
                                            <i className="fa fa-phone-alt text-primary fa-3x"></i>
                                            <div className="position-absolute" >
                                                <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <span className="text-primary">Have any questions?</span>
                                        <span className="text-secondary fw-bold fs-5" >Free: +0123 456 7890</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid counter-facts py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="counter">
                            <div className="counter-icon">
                                <i className="fas fa-passport"></i>
                            </div>
                            <div className="counter-content">
                                <h3>Visa Categories</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value" data-toggle="counter-up">31</span>
                                    <h4
                                    className="text-secondary mb-0"
                                    style={{ fontWeight: 600, fontSize: '25px' }}  // style should be an object
                                    >
                                    +
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="counter">
                            <div className="counter-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="counter-content">
                                <h3>Team Members</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value" data-toggle="counter-up">377</span>
                                    <h4
                                    className="text-secondary mb-0"
                                    style={{ fontWeight: 600, fontSize: '25px' }}  // style should be an object
                                    >
                                    +
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="counter">
                            <div className="counter-icon">
                                <i className="fas fa-user-check"></i>
                            </div>
                            <div className="counter-content">
                                <h3>Visa Process</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value" data-toggle="counter-up">4.9</span>
                                    <h4
                                    className="text-secondary mb-0"
                                    style={{ fontWeight: 600, fontSize: '25px' }}  // style should be an object
                                    >
                                    K
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="counter">
                            <div className="counter-icon">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div className="counter-content">
                                <h3>Success Rates</h3>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="counter-value" data-toggle="counter-up">98</span>
                                    
                                    <h4
                                    className="text-secondary mb-0"
                                    style={{ fontWeight: 600, fontSize: '25px' }}  // style should be an object
                                    >
                                    %
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid service overflow-hidden pt-5">
            <div className="container py-5">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">Visa Categories</h5>
                    </div>
                    <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                    <Image
                                        src="/img/service-1.jpg"
                                        alt="Image"
                                        className="img-fluid w-100 rounded"
                                        width={416}
                                        height={333}
                                    />
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Job Visa</a>
                                        </div>
                                        <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                    </div>
                                    <div className="service-content pb-4">
                                        <a href="#"><h4 className="text-white mb-4 py-3">Job Visa</h4></a>
                                        <div className="px-4">
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5" href="#">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                <Image
                                    src="/img/service-2.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={416}
                                    height={333}
                                />
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Business Visa</a>
                                        </div>
                                        <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                    </div>
                                    <div className="service-content pb-4">
                                        <a href="#"><h4 className="text-white mb-4 py-3">Business Visa</h4></a>
                                        <div className="px-4">
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                            <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                <Image
                                    src="/img/service-3.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={416}
                                    height={333}
                                />
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Diplometic Visa</a>
                                        </div>
                                        <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                    </div>
                                    <div className="service-content pb-4">
                                        <a href="#"><h4 className="text-white mb-4 py-3">Diplometic Visa</h4></a>
                                        <div className="px-4">
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                            <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                <Image
                                    src="/img/service-1.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={416}
                                    height={333}
                                />
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Students Visa</a>
                                        </div>
                                        <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                    </div>
                                    <div className="service-content pb-4">
                                        <a href="#"><h4 className="text-white mb-4 py-3">Students Visa</h4></a>
                                        <div className="px-4">
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                            <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                <Image
                                    src="/img/service-2.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={416}
                                    height={333}
                                />
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Residence Visa</a>
                                        </div>
                                        <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                    </div>
                                    <div className="service-content pb-4">
                                        <a href="#"><h4 className="text-white mb-4 py-3">Residence Visa</h4></a>
                                        <div className="px-4">
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                            <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="service-inner">
                                <div className="service-img">
                                <Image
                                    src="/img/service-3.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={416}
                                    height={333}
                                />
                                </div>
                                <div className="service-title">
                                    <div className="service-title-name">
                                        <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                            <a href="#" className="h4 text-white mb-0">Tourist Visa</a>
                                        </div>
                                        <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="#">Explore More</a>
                                    </div>
                                    <div className="service-content pb-4">
                                        <a href="#"><h4 className="text-white mb-4 py-3">Tourist Visa</h4></a>
                                        <div className="px-4">
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.</p>
                                            <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid features overflow-hidden py-5">
            <div className="container">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
                    </div>
                    <h1 className="display-5 mb-4">Offer Tailor Made Services That Our Client Requires</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                </div>
                <div className="row g-4 justify-content-center text-center">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-dollar-sign fa-4x text-primary"></i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Cost-Effective</h5>
                                <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fab fa-cc-visa fa-4x text-primary"></i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Visa Assistance</h5>
                                <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-atlas fa-4x text-primary"></i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Faster Processing</h5>
                                <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-users fa-4x text-primary"></i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Direct Interviews</h5>
                                <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Features</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid country overflow-hidden py-5">
            <div className="container">
            <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: '70px' }} >
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
                    </div>
                    <h1 className="display-5 mb-4">Immigration & visa services following Countries</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                </div>
                <div className="row g-4 text-center">
                    <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="country-item">
                            <div className="rounded overflow-hidden">
                                <Image
                                    src="/img/country-1.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={306}
                                    height={367}
                                />
                            </div>
                            <div className="country-flag">
                                <Image
                                    src="/img/brazil.jpg"
                                    alt="Image"
                                    className="img-fluid rounded-circle"
                                    width={306}
                                    height={367}
                                />
                            </div>
                            <div className="country-name">
                                <a href="#" className="text-white fs-4">Brazil</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="country-item">
                            <div className="rounded overflow-hidden">
                                <Image
                                    src="/img/country-2.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={306}
                                    height={367}
                                />
                            </div>
                            <div className="country-flag">
                                <Image
                                    src="/img/india.jpg"
                                    alt="Image"
                                    className="img-fluid rounded-circle"
                                    width={306}
                                    height={367}
                                />
                            </div>
                            <div className="country-name">
                                <a href="#" className="text-white fs-4">india</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="country-item">
                            <div className="rounded overflow-hidden">
                                
                                <Image
                                    src="/img/country-3.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={306}
                                    height={367}
                                />
                            </div>
                            <div className="country-flag">
                                
                                <Image
                                    src="/img/usa.jpg"
                                    alt="Image"
                                    className="img-fluid rounded-circle"
                                    width={306}
                                    height={367}
                                />
                            </div>
                            <div className="country-name">
                                <a href="#" className="text-white fs-4">New York</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="country-item">
                            <div className="rounded overflow-hidden">
                                
                                <Image
                                    src="/img/country-4.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={306}
                                    height={367}
                                />
                            </div>
                            <div className="country-flag">
                                
                                <Image
                                    src="/img/italy.jpg"
                                    alt="Image"
                                    className="img-fluid rounded-circle"
                                    width={306}
                                    height={367}
                                />
                            </div>
                            <div className="country-name">
                                <a href="#" className="text-white fs-4">Italy</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Countries</a>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="container-fluid training overflow-hidden bg-light py-5">
            <div className="container py-5">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">CHECK OUR TRAINING</h5>
                    </div>
                    <h1 className="display-5 mb-4">Get the Best Coacing Service Training with Our Travisa</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="training-item">
                            <div className="training-inner">
                                <Image
                                    src="/img/training-1.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={255}
                                    height={128}
                                />
                                <div className="training-title-name">
                                    <a href="#" className="h4 text-white mb-0">IELTS</a>
                                    <a href="#" className="h4 text-white mb-0">Coaching</a>
                                </div>
                            </div>
                            <div className="training-content bg-secondary rounded-bottom p-4">
                                <a href="#"><h4 className="text-white">IELTS Coaching</h4></a>
                                <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="training-item">
                            <div className="training-inner">
                            
                                <Image
                                    src="/img/training-2.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={255}
                                    height={128}
                                />
                                <div className="training-title-name">
                                    <a href="#" className="h4 text-white mb-0">TOEFL</a>
                                    <a href="#" className="h4 text-white mb-0">Coaching</a>
                                </div>
                            </div>
                            <div className="training-content bg-secondary rounded-bottom p-4">
                                <a href="#"><h4 className="text-white">TOEFL Coaching</h4></a>
                                <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="training-item">
                            <div className="training-inner">
                            <Image
                                    src="/img/training-3.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={255}
                                    height={128}
                                />
                                <div className="training-title-name">
                                    <a href="#" className="h4 text-white mb-0">PTE</a>
                                    <a href="#" className="h4 text-white mb-0">Coaching</a>
                                </div>
                            </div>
                            <div className="training-content bg-secondary rounded-bottom p-4">
                                <a href="#"><h4 className="text-white">PTE Coaching</h4></a>
                                <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="training-item">
                            <div className="training-inner">
                            <Image
                                    src="/img/training-4.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={255}
                                    height={128}
                                />
                                <div className="training-title-name">
                                    <a href="#" className="h4 text-white mb-0">OET</a>
                                    <a href="#" className="h4 text-white mb-0">Coaching</a>
                                </div>
                            </div>
                            <div className="training-content bg-secondary rounded-bottom p-4">
                                <a href="#"><h4 className="text-white">OET Coaching</h4></a>
                                <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p>
                                <a className="btn btn-secondary rounded-pill text-white p-0" href="#">Read More <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">View More</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid contact overflow-hidden pb-5">
            <div className="container py-5">
                <div className="office pt-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Worlwide Offices</h5>
                        </div>
                        <h1 className="display-5 mb-4">Explore Our Office Worldwide</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="office-item p-4">
                                <div className="office-img mb-4">
                                    
                                    <Image
                                    src="/img/office-2.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={306}
                                    height={367}
                                />
                                </div>
                                <div className="office-content d-flex flex-column">
                                    <h4 className="mb-2">Australia</h4>
                                    <a href="#" className="text-secondary fs-5 mb-2">+123.456.7890</a>
                                    <a href="#" className="text-muted fs-5 mb-2">travisa@example.com</a>
                                    <p className="mb-0">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="office-item p-4">
                                <div className="office-img mb-4">
                                <Image
                                    src="/img/office-1.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={306}
                                    height={367}
                                />
                                </div>
                                <div className="office-content d-flex flex-column">
                                    <h4 className="mb-2">Canada</h4>
                                    <a href="#" className="text-secondary fs-5 mb-2">(012) 0345 6789</a>
                                    <a href="#" className="text-muted fs-5 mb-2">travisa@example.com</a>
                                    <p className="mb-0">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="office-item p-4">
                                <div className="office-img mb-4">
                                <Image
                                    src="/img/office-3.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={306}
                                    height={367}
                                />
                                </div>
                                <div className="office-content d-flex flex-column">
                                    <h4 className="mb-2">United Kingdom</h4>
                                    <a href="#" className="text-secondary fs-5 mb-2">01234.567.890</a>
                                    <a href="#" className="text-muted fs-5 mb-2">travisa@example.com</a>
                                    <p className="mb-0">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="office-item p-4">
                                <div className="office-img mb-4">
                                <Image
                                    src="/img/office-4.jpg"
                                    alt="Image"
                                    className="img-fluid w-100 rounded"
                                    width={306}
                                    height={367}
                                />
                                </div>
                                <div className="office-content d-flex flex-column">
                                    <h4 className="mb-2">India</h4>
                                    <a href="#" className="text-secondary fs-5 mb-2">+123.45.67890</a>
                                    <a href="#" className="text-muted fs-5 mb-2">travisa@example.com</a>
                                    <p className="mb-0">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </main>
  );
}
