import React from "react";
import resumePDf from "../resume/Resume.pdf";
const Resume = () => {
  return (
    <div className='container-fluid resume'>
      <div className='row'>
        <div id='resume' className='col-12  text-center mt-5 p-lag-5 mb-lg-2'>
          <a href={resumePDf} className='arrow-link'>
            View my resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
