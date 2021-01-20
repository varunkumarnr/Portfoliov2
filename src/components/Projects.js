import React from "react";
import codeBuddy from "../img/codeBuddy.jpg";
import YourResume from "../img/yourResume.jpg";
import Object from "../img/object.jpg";
const Projects = () => {
  return (
    <div className='container-fluid projects'>
      <div className='row'>
        <div id='projects' className='col-12 text-center mt-5 p-lg-5'>
          <h3>Projects</h3>
        </div>
        <div className='col-12 text-center my-4 my-lg-0 p-lg-5'>
          <h6>
            <span
              id='show-portfolio-web'
              className='portfolio-web make-green-bg'
            >
              🌍 Web
            </span>{" "}
            <span
              id='show-portfolio-design'
              className='portfolio-design make-gray-bg'
            >
              Artifical Intelligence
            </span>
            {/* <span
              id='show-portfolio-design'
              className='portfolio-design make-gray-bg'
            >
              Other Softwares
            </span>
            <span
              id='show-portfolio-design'
              className='portfolio-design make-gray-bg'
            >
              Novels
            </span> */}
          </h6>
        </div>
        <div className='col-12'>
          <div className='row'>
            <div className='col-12 col-lg-1'></div>
            <div className='col-12 col-lg-10'>
              <div className='row row-cols-1 row-cols-md-3'>
                <div className='col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4'>
                  <div className='card'>
                    <img src={codeBuddy} className='card-img-top' alt='comba' />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        Code Buddy{" "}
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Live
                        </a>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Code
                        </a>
                      </h5>
                      <p className='card-text mt-3'>
                        Code Buddy is a social media for developers, where you
                        can find friends to work together
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>React</span>
                        <span className='text-center'>Express</span>
                        <span className='text-center'>Mongodb</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4'>
                  <div className='card'>
                    <img
                      src={YourResume}
                      className='card-img-top'
                      alt='getquote'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        YourResume
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Live
                        </a>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Code
                        </a>
                      </h5>
                      <p className='card-text mt-3'>
                        Resume template generater build using React and Node.
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>React</span>
                        <span className='text-center'>MongoDb </span>
                        <span className='text-center'>NodeJs </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4'>
                  <div className='card'>
                    <img
                      src={YourResume}
                      className='card-img-top'
                      alt='getquote'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        One Minute{" "}
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Live
                        </a>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Code
                        </a>
                      </h5>
                      <p className='card-text mt-3'>
                        Productuctivity built to help achieve daily goals and
                        keep record of new ones.
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>React</span>
                        <span className='text-center'>MongoDb </span>
                        <span className='text-center'>NodeJs </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-design-block col-md-6 col-lg-4 mb-4'>
                  <div className='card'>
                    <img src={Object} className='card-img-top' alt='getquote' />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        Object Detection{" "}
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Live
                        </a>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Code
                        </a>
                      </h5>
                      <p className='card-text mt-3'>
                        AI model trained to detect the objects in the
                        surrondings.
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>Open CV</span>
                        <span className='text-center'>Pandas</span>
                        <span className='text-center'>tensorflow</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
