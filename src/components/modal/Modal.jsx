import React from "react";
import "./modal.css";

export default function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button className="button" onClick={() => {props.handleShow(false)}}>X</button>
          <h1 className="modal-title">SignUp</h1>
        </div>
        <div className="modal-body">
          <label className="label">Email</label>
          <input className="input" type={"email"} placeholder = "John@example.com"/>
          <br />
          <br />
          <label className="label">Name</label>
          <input className="input" type = {"text"}/>
          <br />
          <br />
          <label className="label">Password</label>
          <input className="input" type={"password"} style={{marginLeft : "5%"}}/>
        </div>
        <div className="modal-footer">
        <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
}
