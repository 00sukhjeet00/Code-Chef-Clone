import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
export default function Register(props) {
  return (
    <main className="main">
      <form className="form-signin" style={{ width: "40%" }} onSubmit={(e)=>props.handelRegister(e)}>
        <h1 className="h3 mb-3 fw-normal text-center">Register</h1>
        <div className="form-floating mb-3">
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Name"
            value={props.name}
            onChange={e=>props.setname(e.target.value)}
          />
          {/* <label for="name">Name</label> */}
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={props.email}
            onChange={e=>props.setemail(e.target.value)}
          />
          {/* <label for="email">Email address</label> */}
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={props.password}
            onChange={e=>props.setpassword(e.target.value)}
          />
          {/* <label for="floatingPassword">Password</label> */}
        </div>
        
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Country"
            value={props.company}
            onChange={e=>props.setcompany(e.target.value)}
          />
          {/* <label for="institue">Country</label> */}
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit" >
          Sign up
        </button>
        <p className="mt-5 mb-3 text-muted">
          <Link to="/login">Already have account ?</Link>
        </p>
      </form>
    </main>
  );
}
