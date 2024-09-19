import React, { useState, useContext, useEffect } from 'react';

import { modalContext } from './modalContext';

import '../../style/modal.css';


import { IoIosCloseCircleOutline } from "react-icons/io";



function Modal(props) {

  const {handleModalUse, modalData} = useContext(modalContext);

  const [data, setData] = useState({});

  useEffect(()=>{
    fetch('./json/project.json')
      .then((res) => (res.json()))
      .then((res) => {

        const getData = res.projects.filter(i => i.id===modalData)[0];

        setData(getData);
      });
  },[modalData]);





  return (
    <article className='modal_wrap'>

      <div className='modal_bg' onClick={handleModalUse} >

      </div>
      
      <div className='modal_box'>
        <IoIosCloseCircleOutline className='modal_close' onClick={handleModalUse} />

        <h2 className='modal_title'>{data.name}</h2>
        <div className='modal_frame'>
          <img src={`${process.env.PUBLIC_URL}${data.img}`} alt="프로젝트 이미지" />
        </div>

        <div className='modal_role'>
          <h3 className='modal-content_title'>역할</h3>
          <p className='modal-content'>
            {data.role}
          </p>
        </div>

        <div className='modal_desc'>
          <h3 className='modal-content_title'>설명</h3>
          <p className='modal-content'>
            {data.desc}
          </p>
        </div>

        <nav className='modal-skill_wrap'>
          <h3 className='modal-content_title'>
            {/* <FaCode className='content_icon skill_icon'/> */}
            사용 기술
          </h3>
          <ul className='modal-skill_box'>

            {data.skills?.map((i,idx) => (<li key={idx} className='modal-skill_list'>
              {i}
            </li>))}
            
          </ul>

        </nav>

        <div className='modal-link_box'>
          <a href={`${data.link}`} title="모달제목 바로가기" target='_blank' rel="noreferrer" className='modal_link' >홈페이지 바로가기</a>

          <a href={`${data.desc_link}`} title="프로젝트 상세설명 바로가기" target='_blank' rel='noreferrer' className='modal_link'  >상세설명 보기</a>
        </div>


      </div>

    </article>
  );
}

export default Modal;