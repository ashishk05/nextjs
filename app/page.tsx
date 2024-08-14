import Image from "next/image";
import { Input } from "postcss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
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
                    <h1 className="display-5 text-secondary m-0"><Image src="/img/brand-logo.png" alt="Logo" className="img-fluid" width={62} height={45} />Travisa</h1>
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
                        
                        <Image src="/img/carousel-1.jpg" alt="Image" className="img-fluid" width={1920} height={1080}/>
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
                        <Image src="/img/carousel-2.jpg" alt="Image" className="img-fluid" width={1920} height={1080} />
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

       



    </main>
  );
}
