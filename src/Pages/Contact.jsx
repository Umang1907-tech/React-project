import axios from "axios";
import React, { useState } from "react";

function Contact() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      contactid: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:3000/contact`, formvalue);
    console.log(res);
  };
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">Contact Us</h1>
            <a href>Home</a>
            <i className="far fa-square text-primary px-2" />
            <a href>Contact</a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div
        className="container-fluid contact position-relative px-5"
        style={{ marginTop: 90 }}
      >
        <div className="container">
          <div className="row g-5 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-geo-alt fs-1 text-white" />
                <h6 className="text-uppercase my-2">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-envelope-open fs-1 text-white" />
                <h6 className="text-uppercase my-2">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-phone-vibrate fs-1 text-white" />
                <h6 className="text-uppercase my-2">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form method="post">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      value={formvalue.name}
                      onChange={onchange}
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      value={formvalue.email}
                      onChange={onchange}
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      name="subject"
                      value={formvalue.subject}
                      onChange={onchange}
                      className="form-control bg-light border-0 px-4"
                      placeholder="Subject"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3"
                      name="message"
                      value={formvalue.message}
                      onChange={onchange}
                      rows={4}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary border-inner w-100 py-3"
                      type="submit"
                      onClick={onsubmit}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}

export default Contact;
