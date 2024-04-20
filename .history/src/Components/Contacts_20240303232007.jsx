import React from "react";
import swal from 'sweetalert';

export default function Contacts() {

    const fo
  return (
    <div>
      <form
        id="form"
        className="row align-items-center vh-100 align-content-center"
      >
        <div className="col-md-6">
          <input
            className="form-control"
            name="name"
            id="nameInput"
            placeholder="Enter your Name"
          />
          <div
            className="nameMassage alert alert-danger mt-2 d-none"
            role="alert"
          >
            Special characters and numbers not allowed
          </div>
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            id="mailInput"
            placeholder="Enter your Email"
          />
          <div
            className="mailMassage alert alert-danger mt-2 d-none"
            role="alert"
          >
            Email not valid *exemple@yyy.zzz
          </div>
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="phoneInput"
            placeholder="Enter your Phone"
          />
          <div
            className="phoneMassage alert alert-danger mt-2 d-none"
            role="alert"
          >
            Enter valid Phone Number
          </div>
        </div>
        <div className="col-md-6 my-4">
          <input
            type="number"
            className="form-control"
            name="age"
            id="ageInput"
            placeholder="Enter your Age"
          />
          <div
            className="ageMassage alert alert-danger mt-2 d-none"
            role="alert"
          >
            Enter valid age
          </div>
        </div>
        <div className="col-md-6">
          <input
            type="password"
            className="form-control"
            name="password"
            id="passwordInput"
            placeholder="Enter your Password"
          />
          <div
            className="passwordMassage alert alert-danger mt-2 d-none"
            role="alert"
          >
            Enter valid password *Minimum eight characters, at least one letter
            and one number:*
          </div>
        </div>
        <div className="col-md-6">
          <input
            type="password"
            className="form-control"
            name="repassword"
            id="repasswordInput"
            placeholder=" Repassword"
          />
          <div
            className="repasswordMassage alert alert-danger mt-2 d-none"
            role="alert"
          >
            Enter valid rePassword
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center mt-5">
          <button type="submit" className="btn btn-outline-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
