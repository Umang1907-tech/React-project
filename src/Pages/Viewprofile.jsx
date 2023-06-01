import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Viewprofile() {
  const { userid } = useParams();
  const redirect = useNavigate();
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("render useeffect of viewprofile...");
    if (!localStorage.getItem("id")) {
      return redirect("/");
    }
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user/${userid}`);
    console.log(res);
    setFormvalue({
      ...formvalue,
      name: res.data.name,
      email: res.data.email,
      mobile: res.data.mobile,
      password: res.data.password,
    });
  };

  const validate = () => {
    let result = true;
    if (formvalue.name === "" || formvalue.name === null) {
      result = false;
      toast.error("name field is required !");
      return result;
    }
    if (formvalue.email === "" || formvalue.email === null) {
      result = false;
      toast.error("email field is required !");
      return result;
    }
    if (formvalue.mobile === "" || formvalue.mobile === null) {
      result = false;
      toast.error("mobile field is required !");
      return result;
    }
    if (formvalue.password === "" || formvalue.password === null) {
      result = false;
      toast.error("password field is required !");
      return result;
    }
    return result;
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const res = await axios.patch(
        `http://localhost:3000/user/${userid}`,
        formvalue
      );
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("name", res.data.name);
        setFormvalue({
          name: "",
          email: "",
          mobile: "",
        });
        toast.success("Profile edit succesfully !");
        redirect("/profile");
      }
    }
  };

  console.log("render viewprofile...");
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">
              Edit Profile
            </h1>
            <a href>Home</a>
            <i className="far fa-square text-primary px-2" />
            <a href>Edit Profile</a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div className="container-fluid  px-5" style={{ marginTop: 90 }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 bg-secondary p-5">
              <form method="post">
                <div className="row g-3">
                  <div className="col-sm-12">
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
                  <div className="col-sm-12">
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
                      type="number"
                      name="mobile"
                      value={formvalue.mobile}
                      onChange={onchange}
                      className="form-control bg-light border-0 px-4"
                      placeholder="mobile"
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-sm-12">
                    <input
                      type="number"
                      name="password"
                      value={formvalue.password}
                      onChange={onchange}
                      className="form-control bg-light border-0 px-4"
                      placeholder="mobile"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary border-inner w-100 py-3"
                      type="submit"
                      onClick={onsubmit}
                    >
                      Save
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

export default Viewprofile;
