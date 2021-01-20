import React from "react";

function Skills() {
  return (
    <div className='container-fluid skills'>
      <div className='row'>
        <div
          id='skills'
          className='col-12 col-md-12 col-lg-4 text-center mt-3 my-lg-5'
        >
          <h3>Skills</h3>
        </div>
        <div className='col-6 col-md-6 col-lg-2 skills-cat my-lg-5'>
          <div className='skills-cat-name'>Languages</div>
          <ul>
            <li className='skills-cat-item'>Java Script</li>
            <li className='skills-cat-item'>C</li>
            <li className='skills-cat-item'>C++</li>
            <li className='skills-cat-item'>HTML</li>
            <li className='skills-cat-item'>CSS</li>
            <li className='skills-cat-item'>Python</li>
            <li className='skills-cat-item'>SQL</li>
            <li className='skills-cat-item'>Java</li>
          </ul>
        </div>
        <div className='col-6 col-md-6 col-lg-2 skills-cat my-lg-5'>
          <div className='skills-cat-name'>FrameWork/libraries</div>
          <ul>
            <li className='skills-cat-item'>React</li>
            <li className='skills-cat-item'>Node/Express</li>
            <li className='skills-cat-item'>Bootstrap</li>
            <li className='skills-cat-item'>MongoDB</li>
            <li className='skills-cat-item'>JQuery</li>
            <li className='skills-cat-item'>three.js</li>
            <li className='skills-cat-item'>redux</li>
            <li className='skills-cat-item'>Styled components</li>
          </ul>
        </div>
        <div className='col-6 col-md-6 col-lg-2 skills-cat my-lg-5'>
          <div className='skills-cat-name'>Tools</div>
          <ul>
            <li className='skills-cat-item'>Git/Git hub</li>
            <li className='skills-cat-item'>Bash</li>
            <li className='skills-cat-item'>Postman</li>
            <li className='skills-cat-item'>Vs Code</li>
            <li className='skills-cat-item'>Devtools</li>
            <li className='skills-cat-item'>Vim</li>
            <li className='skills-cat-item'>AWS/Heroku</li>
            <li className='skills-cat-item'>Pycharm</li>
          </ul>
        </div>
        <div className='col-6 col-md-6 col-lg-2 skills-cat my-lg-5'>
          <div className='skills-cat-name'>AI/Ml libraries</div>
          <ul>
            <li className='skills-cat-item'>Numpy</li>
            <li className='skills-cat-item'>Pandas</li>
            <li className='skills-cat-item'>Tensorflow</li>
            <li className='skills-cat-item'>pytorch</li>
            <li className='skills-cat-item'>OpenCV</li>
            <li className='skills-cat-item'>Keras</li>
            <li className='skills-cat-item'>Sci-kit Learn</li>
            <li className='skills-cat-item'>matplot</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
