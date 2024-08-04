import React from 'react';

import '../style/about.css';

function About(props) {
  return (
    <div className='page'>
      <h2>ABOUT ME</h2>

      <h3 className='about-name'>
        JEON CHAN HYEOK
        {/* 전찬혁 */}
        <span className='about_birth01'>birth</span> <span className='about_birth02'>1994</span> </h3>

      <div>
        <div className='about-content_box'>
          <h4 className='content_title'>
            Education
            {/* 교육 */}
            <span className='horizontal_line'>
              &nbsp;
            </span>
          </h4>
          <p className='content_text'>
            그린 컴퓨터 아카데미 웹 프론트엔드 과정 : 2022.11 ~ 2023.05
          </p>
        </div>

        <div className='about-content_box'>
          <h4 className='content_title'>
            Certification
            {/* 자격증 */}
            <span className='horizontal_line'>
              &nbsp;
            </span>
          </h4>
          <p className='content_text'>
            웹 디자인 기능사 : 2023.07
          </p>

        </div>

        <div className='about-content_box'>
          <h4 className='content_title'>
            SKILLS
            <span className='horizontal_line'>
              &nbsp;
            </span>
          </h4>
          <div className='skill_box'>

            <div className='skill'>
              <p className='skill_name'>
                JavaScript
              </p>
              <img src={`${process.env.PUBLIC_URL}/images/languages/javascript.svg`} alt="" className='skill_img' />
            </div>

            <div className='skill'>
              <p className='skill_name'>
                React.js
              </p>
              <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" className='skill_img' />

            </div>

            {/* <div className='skill'>
              react-native  
            </div> */}

            <div className='skill'>
              <p className='skill_name'>
                node.js
              </p>
              <img src={`${process.env.PUBLIC_URL}/images/languages/node.png`} alt="" className='skill_img' />


            </div>

            <div className='skill'>
              <p className='skill_name'>
                php
              </p>
              <img src={`${process.env.PUBLIC_URL}/images/languages/php.png`} alt="" className='skill_img' />


            </div>

            <div className='skill'>
              <p className='skill_name'>
                mysql
              </p>
              <img src={`${process.env.PUBLIC_URL}/images/languages/mysql.png`} alt="" className='skill_img' />


            </div>

          </div>

        </div>

      </div>

      
    </div>
  );
}

export default About;