import React from 'react'

export default function Contacts() {
  return (
    <div>
    <div className='row  vh-100 '></div>
    <form >
    <div class="col-md-6">
      <input class="form-control" name="name" id="nameInput" placeholder="Enter your Name"/>
      <div class="nameMassage alert alert-danger mt-2 d-none" role="alert">
        Special characters and numbers not allowed
      </div>
    </div>
   
    <div class="col-md-6">
      <input type="email" class="form-control" name="email" id="mailInput" placeholder="Enter your Email"/>
      <div class="mailMassage alert alert-danger mt-2 d-none" role="alert">
        Email not valid *exemple@yyy.zzz
      </div>
    </div>
    <div class="col-md-6">
        <input type="tel" class="form-control" name="phone" id="phoneInput" placeholder="Enter your Phone"/>
        <div class="phoneMassage alert alert-danger mt-2 d-none" role="alert">
            Enter valid Phone Number
          </div>
      </div>
      <div class="col-md-6">
        <input type="number" class="form-control" name="age" id="ageInput" placeholder="Enter your Age"/>
        <div class="ageMassage alert alert-danger mt-2 d-none" role="alert">
            Enter valid age
          </div>
      </div>
      <div class="col-md-6">
        <input type="password" class="form-control" name="password" id="passwordInput" placeholder="Enter your Password"/>
        <div class="passwordMassage alert alert-danger mt-2 d-none" role="alert">
            Enter valid password *Minimum eight characters, at least one letter and one number:*
          </div>
      </div>
      <div class="col-md-6">
        <input type="password" class="form-control" name="repassword" id="repasswordInput" placeholder=" Repassword"/>
        <div class="repasswordMassage alert alert-danger mt-2 d-none" role="alert">
            Enter valid rePassword                              
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-center">
        <button type="submit" class="btn btn-outline-danger" disabled >Submit</button>
        </div>


    </form>
    </div>
  )
}
