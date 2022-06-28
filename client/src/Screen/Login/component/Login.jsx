import React from "react";
import {Link} from 'react-router-dom'
import './styles.css'
export default function LoginComponent(props) {
  return (
    <main className="main">
      <form className="form-signin" style={{ width: "40%" }}>
        <h1 className="h3 mb-3 fw-normal text-center">LOGIN</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            value={props.state.email}
            onChange={e=>props.setstate({...props.state,email:e.target.value})}
          />
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={props.state.password}
            onChange={e=>props.setstate({...props.state,password:e.target.value})}
          />
        </div>
        {/* <div style={{marginBottom:"10px",float:"right"}}>
            <a href='/forgetPassword'>Forget Password?</a>
          </div> */}
        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={(e)=>props.handleLogin(e)}>
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">
          <Link to="/register">Create new account</Link>
        </p>
      </form>
    </main>
  );
}
