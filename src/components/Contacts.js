import React from "react";

const Contacts = () => {
  return (
    <div id='contact' className='container-fluid contact'>
      <div className='row'>
        <div className='col-md-12 col-md-offset-1 text-center'>
          <div className='email-icon'>
            <i className='fa fa-paper-plane-o wp6  animate__bounce'></i>
          </div>
          <div className='col-12 text-center'>
            <h2>Get In Touch!</h2>
            <p>
              Whether you have an idea for a project or just want to<br></br>{" "}
              chat, feel free to shoot me an email!
            </p>
          </div>
          <div className='col-12 text-center my-4 mt-3 my-md-5 my-lg-5 '>
            <a href='mailto:varunnrk@gmail.com'>
              Say Hello!
              <i className='text-center fa fa-location-arrow'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
