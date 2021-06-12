import React from "react";
import codeBuddy from "../img/codeBuddy.jpg";
import YourResume from "../img/yourResume.jpg";
import Movie from "../img/download.jpg";
import Spotify from "../img/Spotify.jpg";
import Pegion from "../img/pegion.jpg";
import DevCI from "../img/DevCI.jpg";
import Covid from "../img/CovidTracker.jpg";
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
                    <img src={DevCI} className='card-img-top' alt='getquote' />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        DevCI
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://dev-ci.vercel.app/'
                          className='text-center'
                        >
                          Live
                        </a>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/varunkumarnr/DevCI'
                          className='text-center'
                        >
                          Code
                        </a>
                      </h5>
                      <p className='card-text mt-3'>
                        DevCI is a open source app that tries to bring all
                        developer tools to one place.
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>React</span>
                        <span className='text-center'>CSS </span>
                        <span className='text-center'>API </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4'>
                  <div className='card'>
                    <img
                      src={Spotify}
                      className='card-img-top'
                      alt='getquote'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        Spotify Clone
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://spotify-clone-816a1.web.app/'
                          className='text-center'
                        >
                          Live
                        </a>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/varunkumarnr/Spotify-frontend'
                          className='text-center'
                        >
                          Code
                        </a>
                      </h5>
                      <p className='card-text mt-3'>
                        A Spotify clone build using React and spotify developer
                        api
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>React</span>
                        <span className='text-center'>CSS </span>
                        <span className='text-center'>API </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4'>
                  <div className='card'>
                    <img src={Covid} className='card-img-top' alt='getquote' />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        Covid Tracker
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://varunkumarnr.github.io/covidtraker/'
                          className='text-center'
                        >
                          Live
                        </a>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/varunkumarnr/covidtraker'
                          className='text-center'
                        >
                          Code
                        </a>
                      </h5>
                      <p className='card-text mt-3'>
                        Track live Covid Cases and deaths around the world.
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>React</span>
                        <span className='text-center'>CSS </span>
                        <span className='text-center'>HTML </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4'>
                  <div className='card'>
                    <img src={Pegion} className='card-img-top' alt='getquote' />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        PMessenger
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://tranquil-spire-85474.herokuapp.com/'
                          className='text-center'
                        >
                          Live
                        </a>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/varunkumarnr/pigeon-video-chat'
                          className='text-center'
                        >
                          Code
                        </a>
                      </h5>
                      <p className='card-text mt-3'>
                        A peer to peer video chat app build using nodejs, socket
                        and webrtc
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>Nodejs</span>
                        <span className='text-center'>Sockets </span>
                        <span className='text-center'>WebRTC </span>
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
                          href='https://github.com/varunkumarnr/objectDetection'
                          className='text-center'
                        >
                          Code
                        </a>
                        {/* <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://desolate-sea-41245.herokuapp.com/'
                          className='text-center'
                        >
                          Code
                        </a> */}
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
                <div className='col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-design-block col-md-6 col-lg-4 mb-4'>
                  <div className='card'>
                    <img src={Movie} className='card-img-top' alt='getquote' />
                    <div className='card-body'>
                      <h5 className='card-title'>
                        Movie Recommender
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/varunkumarnr/Movie_Recommender'
                          className='text-center'
                        >
                          Code
                        </a>
                        {/* <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/varunkumarnr/pigeon-video-chat'
                          className='text-center'
                        >
                          Code
                        </a> */}
                      </h5>
                      <p className='card-text mt-3'>
                        A movie recommendation system build using KNN algorithm
                      </p>
                      <p className='mt-3'>
                        <span className='text-center'>Sklearn</span>
                        <span className='text-center'>KNN </span>
                        <span className='text-center'>Numpy </span>
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
