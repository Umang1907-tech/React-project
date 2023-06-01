import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const redirect = useNavigate();

  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    let result = true;

    if (formvalue.email === "" || formvalue.email === null) {
      result = false;
      toast.error("email field is required !");
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
      const res = await axios.get(
        `http://localhost:3000/user?email=${formvalue.email}`
      );
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password === formvalue.password) {
          if (res.data[0].status === "Unblock") {
            localStorage.setItem("id", res.data[0].id);
            localStorage.setItem("name", res.data[0].name);
            redirect("/home");
            setFormvalue({ name: "", email: "", password: "", mobile: "" });
            toast.success("Login success");
          } else {
            redirect("/login");
            toast.error("User is Blocked !");
          }
        } else {
          toast.error("passoword is invalid");
        }
      } else {
        toast.error("Username is not valid !");
      }
    }
  };
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">Login Us</h1>
            <a href>Home</a>
            <i className="far fa-square text-primary px-2" />
            <a href>Contact</a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div className="container-fluid  px-5" style={{ marginTop: 90 }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 bg-secondary p-5">
              <form method="get">
                <div className="row g-3">
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
                      type="password"
                      name="password"
                      value={formvalue.password}
                      onChange={onchange}
                      className="form-control bg-light border-0 px-4"
                      placeholder="Password"
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary border-inner w-100 py-3"
                      type="submit"
                      onClick={onsubmit}
                    >
                      Login
                    </button>
                  </div>
                  <div className="col-sm-12">
                    <Link to="/signup" className="w-150 py-3">
                      If you Not Register then Click Here
                    </Link>
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

export default Login;
