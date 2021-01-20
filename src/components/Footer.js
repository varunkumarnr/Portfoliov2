import React from "react";
import rocket from "../img/rocket.png";
const Footer = () => {
  return (
    <footer>
      <div className='container-fluid footer'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h3>Other places you can find me</h3>
            <ul className='list-inline social-buttons animated fadeIn'>
              <li>
                <a id='facebook' href='https://www.facebook.com'>
                  <i className='fa fa-facebook'></i>
                </a>
              </li>
              <li>
                <a id='twitter' href='https://twitter.com/varuncodes'>
                  <i className='fa fa-twitter'></i>
                </a>
              </li>
              <li>
                <a id='instagram' href='https://instagram.com/urstrulyvarun'>
                  <i className='fa fa-instagram'></i>
                </a>
              </li>
              <li>
                <a id='spotify' href='https://play.spotify.com/user'>
                  <i className='fa fa-spotify'></i>
                </a>
              </li>
              <li>
                <a
                  id='codepen'
                  href='https://www.linkedin.com/in/varun-kumar-n-r-357369199/'
                >
                  <i className='fa fa-codepen'></i>
                </a>
              </li>
              <li>
                <a id='github' href='https://github.com/varunkumarnr'>
                  <i className='fa fa-github'></i>
                </a>
              </li>
              <li>
                <a
                  id='linkedin'
                  href='https://www.linkedin.com/in/varun-kumar-n-r-357369199/'
                >
                  <i className='fa fa-linkedin'></i>
                </a>
              </li>
            </ul>
            <div className='page-scroll'>
              <a id='to-top' className='page-scroll' href='#about'>
                <img id='rocket' src={rocket} alt='rocket' />
              </a>
              <p id='to-top-copy'>Beam me up!</p>
            </div>
            <div className='copyright'>
              <p>
                <i className='fa fa-copyright'></i> Varun Kumar N.R 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
