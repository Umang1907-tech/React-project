import React from 'react'

function Testimonial() {
  return (
    <div>
  {/* Page Header Start */}
  <div className="container-fluid bg-dark bg-img p-5 mb-5">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-4 text-uppercase text-white">Testimonial</h1>
        <a href>Home</a>
        <i className="far fa-square text-primary px-2" />
        <a href>Testimonial</a>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: 600}}>
        <h2 className="text-primary font-secondary">Testimonial</h2>
        <h1 className="display-4 text-uppercase">Our Clients Say!!!</h1>
      </div>
      <div className="owl-carousel testimonial-carousel">
        <div className="testimonial-item bg-dark text-white border-inner p-4">
          <div className="d-flex align-items-center mb-3">
            <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" style={{width: 60, height: 60}} alt="img" />
            <div className="ps-3">
              <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </p>
        </div>
        <div className="testimonial-item bg-dark text-white border-inner p-4">
          <div className="d-flex align-items-center mb-3">
            <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" style={{width: 60, height: 60}} alt="img" />
            <div className="ps-3">
              <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </p>
        </div>
        <div className="testimonial-item bg-dark text-white border-inner p-4">
          <div className="d-flex align-items-center mb-3">
            <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" style={{width: 60, height: 60}} alt="img" />
            <div className="ps-3">
              <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </p>
        </div>
        <div className="testimonial-item bg-dark text-white border-inner p-4">
          <div className="d-flex align-items-center mb-3">
            <img className="img-fluid flex-shrink-0" src="img/testimonial-4.jpg" style={{width: 60, height: 60}} alt="img" />
            <div className="ps-3">
              <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </div>
          <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</div>

  )
}

export default Testimonial