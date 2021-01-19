import React from "react";
import aboutPic from "../img/about.svg";
function About() {
  return (
    <div className='container-fluid about'>
      <div className='row'>
        <div
          id='about'
          className='col-12 col-md-6 col-lg-6 text-center mt-5 p-lg-5 my-lg-5'
        >
          <h1>About Me</h1>
          <div className='text-center mt-3'>
            <img
              src={aboutPic}
              className='img-fluid mt-3 '
              width='200'
              height='200'
              alt='robot avg'
            />
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6 text-center p-lg-4 my-lg-5'>
          <div className='row'>
            <div className='col-12'>
              <p>
                I am <strong> Programmer, researcher and a novalist. </strong>.
                I am passionate about building excellent software that improves
                the lives of those around me while also keeping an eye on best
                coding practices. I also research in fields of Artifical
                intelligence and machine learning to find the best and optimised
                learning methods.
              </p>
              <p>
                <strong>Fun Fact:</strong> I am the type of guy that screams at
                computer, when I face an error in the hopes it will be fixed.
              </p>
            </div>
            {/* <div className='col-12 text-center'>
              <div className='row shadow about-contact'>
                <div className='col-12 col-lg-8 text-center'>
                  If your intrested in working together, or want to have a chat.
                  Feel free to shoot me a mail.
                </div>
                <div className='col-12 col-lg-4 text-center'>Say Hello</div>
              </div>
            </div> */}
            <div className='about-section mb-3 text-center'>
              <div>
                <h3>Self Proclaimed:</h3>
              </div>

              <div className='col-12 text-center'>
                <div className='row about-contact'>
                  <div className='col-12 col-lg-4 text-center'>
                    <i className='text-center fa fa-keyboard-o'></i>
                    <p className='text-center'>Software developer</p>
                  </div>
                  <div className='col-12 col-lg-4 text-center'>
                    <i className='text-center fa fa-android'></i>
                    <p className='text-center'>Researcher</p>
                  </div>
                  <div className='col-12 col-lg-4 text-center'>
                    <i className='text-center fa fa-pencil'></i>
                    <p className='text-center'>Novelist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
