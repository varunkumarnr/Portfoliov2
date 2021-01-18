import React from "react";
import menu from "../icons/menu.png";
import me from "../img/me.png";

function Header() {
  return (
    <div className='container-fluid header'>
      <div className='row'>
        <div className='col-12 deform'>
          <div className='col-12 deform-one'></div>
          <div className='col-12 deform-two'></div>
        </div>
        <div className='col-12 mb-5'>
          <nav id='navbar_top' className='navbar navbar-expand-lg'>
            <a className='navbar-brand' href='github.com'>
              varun
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <img
                src={menu}
                className='img-fluid'
                width='40'
                height='40'
                alt='logo'
              />
            </button>
            <div
              className='collapse navbar-collapse  justify-content-center'
              id='navbarNav'
            >
              <ul className='navbar-nav text-lg-center'>
                <li className='nav-item active'>
                  <a className='nav-item' href='#about'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#skills'>
                    ❤ Skills
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#resume'>
                    Resume
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link' href='#porfolio'>
                    projects ↗
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    style={{ color: "#6a6f7c" }}
                    className='nav-link'
                    href='#blog'
                  >
                    Blog
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#hireme'>
                    Hire me ↻
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='col-12 text-center mt-4'>
          <div className='text-center'>
            <img
              src={me}
              className='rounded-circle img-fluid shadow'
              width='140'
              height='140'
              alt='me'
            />
          </div>
        </div>
        <div className='col-12 text-center mt-5'>
          <div className='text-center'>
            <p
              id='spin'
              className='animate__animated animate__fadeInDown animate__delay-1s'
            ></p>
          </div>
        </div>
        <div className='col-12 text-center mt-2'>
          <div className='text-center'>
            <p className='name animate__animated animate__fadeInDown animate__delay-2s'>
              I am VARUN KUMAR N.R
            </p>
          </div>
        </div>
        <div className='col-12 text-center mt-2'>
          <div className='text-center'>
            <p className='profession animate__animated animate__fadeInDown animate__delay-3s'>
              FULL STACK DEVELOPER | AI/ML ENGINEER
            </p>
          </div>
        </div>
        <div className='col-12 text-center mt-2'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 col-md-8 text-center mt-4 socials animate__animated animate__fadeInDown animate__delay-2s '>
                <div className='row my-5'>
                  <div className='col-4 col-lg-2 mt-5 mb-lg-3'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='icon-social'
                      href='https://github.com/varunkumarnr'
                    >
                      <i className='fa fa-github mr-2'></i>
                    </a>
                  </div>

                  <div className='col-4 col-lg-2 mt-5 mb-lg-3'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='icon-social'
                      href='https://twitter.com/varuncodes'
                    >
                      <i className='fa fa-twitter mr-2'></i>
                    </a>
                  </div>
                  <div className='col-4 col-lg-2 mt-5 mb-lg-3'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='icon-social'
                      href='https://www.linkedin.com/in/varun-kumar-n-r-357369199/'
                    >
                      <i className='fa fa-linkedin mr-2'></i>
                    </a>
                  </div>
                  <div className='col-4 col-lg-2 mt-5 mb-lg-3'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='icon-social'
                      href='https://www.instagram.com/urstrulyvarun/'
                    >
                      <i className='fab fa-hackerrank mr-2'></i>
                    </a>
                  </div>

                  <div className='col-4 col-lg-2 mt-5 mb-lg-3'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='icon-social'
                      href='https://www.instagram.com/urstrulyvarun/'
                    >
                      <i className='fa fa-instagram mr-2'></i>
                    </a>
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

export default Header;
