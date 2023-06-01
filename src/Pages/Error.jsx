import React from 'react'

function Error() {
  return (
    <div>
        {/* Page Header Start */}
        <div className="container-fluid bg-dark bg-img p-5 mb-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="display-4 text-uppercase text-white">Page Not Found</h1>
                        <a href>Home</a>
                        <i className="far fa-square text-primary px-2" />
                        <a href>404</a>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* Contact Start */}
            <div className="container-fluid contact position-relative px-5" style={{ marginTop: 90 }}>
                <div className="container">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-12 col-md-12">
                            <div className="bg-primary border-inner text-center text-white p-5">
                                <i className="bi bi-geo-alt fs-1 text-white" />
                                <h1 className="text-uppercase my-2">Page Not Found</h1>
                                <h3 className="text-uppercase my-2">404</h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Contact End */}
    </div>
  )
}

export default Error