import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [data, setData] = useState({});
  // console.log(data)
  const redirect = useNavigate();

  useEffect(() => {
    console.log("useeffect of profile...");
    if (!localStorage.getItem("id")) {
      return redirect("/");
    }
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/user/${localStorage.getItem("id")}`
    );
    console.log(res);
    setData(res.data);
  };

  console.log("render profile...");
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">
              Master Chefs
            </h1>
            <a href>Home</a>
            <i className="far fa-square text-primary px-2" />
            <a href>Master Chefs</a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: 600 }}
          >
            <h2 className="text-primary font-secondary">Manage Profile</h2>
            <h1 className="display-4 text-uppercase">
              You can edit and update your profile
            </h1>
          </div>
          <div className="row g-5">
            <div className="offset-md-4 col-lg-4 offset-md-3 col-md-6">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/team-1.jpg"
                    alt=""
                  />
                  <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-start">
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-dark border-inner text-center p-4">
                  <h4 className="text-uppercase text-primary">
                    Name : {data.name}
                  </h4>
                  <p className="text-white m-0">Id : {data.id} </p>
                  <p className="text-white m-0">Email : {data.email} </p>
                  <p className="text-white m-0">Mobile : {data.mobile} </p>
                  <p className="text-white m-0">Password : {data.password} </p>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => redirect(`/viewprofile/${data.id}`)}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </div>
  );
}

export default Profile;
