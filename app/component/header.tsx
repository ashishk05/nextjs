import Image from "next/image";

export default function Header() {
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

    </main>
  );
}
