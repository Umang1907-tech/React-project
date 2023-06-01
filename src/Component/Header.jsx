import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const redirect = useNavigate();

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    toast.success("Logout successfully !");
    redirect("/home");
  };
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid px-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-envelope fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-primary border-inner py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <Link to="/" className="navbar-brand">
                <h1 className="m-0 text-uppercase text-white">
                  <i className="fa fa-birthday-cake fs-1 text-dark me-3" />
                  CakeZone
                </h1>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
                <br />
                {(() => {
                  if (localStorage.getItem("id")) {
                    return <span>Hi..{localStorage.getItem("name")}</span>;
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="/" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 text-uppercase text-white">
            <i className="fa fa-birthday-cake fs-1 text-primary me-3" />
            CakeZone
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto mx-lg-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About Us
            </Link>
            <Link to="/menu" className="nav-item nav-link">
              Menu &amp; Pricing
            </Link>
            <Link to="/team" className="nav-item nav-link">
              Master Chefs
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/service" className="dropdown-item">
                  Our Service
                </Link>
                <Link to="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact Us
            </Link>
            {(() => {
              if (localStorage.getItem("id")) {
                return (
                  <>
                    <Link to="/profile" className="nav-item nav-link">
                      Profile
                    </Link>
                    <Link to="/" className="nav-item nav-link" onClick={logout}>
                      Logout
                    </Link>
                  </>
                );
              } else {
                return (
                  <Link to="/login" className="nav-item nav-link">
                    Login
                  </Link>
                );
              }
            })()}
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
}

export default Header;
