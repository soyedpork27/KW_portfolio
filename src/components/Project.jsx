import React, { useEffect, useState, useContext } from 'react';

import { modalContext } from './modalContext/modalContext';

import '../style/project.css';

function Project(props) {

  const {handleModalUse } = useContext(modalContext);

  const handleProjectModal = (_,i) => {
    handleModalUse(i.id);
  }


  const [tab, setTab] = useState(0);
  

  const tabList = ['전체', '개인' , '팀'];

  const selected = {
    color : '#f00'
  }

  const handleTab = (_,index) => {
    setTab(index);
  }


  const [projects, setProjects] = useState([]);


  useEffect(()=>{
    fetch('./json/project.json')
      .then((res) => (res.json()))
      .then((res) => {
        if(!tab){
          setProjects(res.projects);
        }else{
          const list = res.projects.filter((i) => i.kind===tab);
          setProjects([...list]);
        }
      });
  },[tab]);


  return (
    <div className='page project_page'>
      <h2>MY PROJECT</h2>

      <nav className='project-tab_wrap'>
        <ul className='project-tab_box'>
          {tabList.map((i,idx) => (<li key={idx} className='project-tab_list'><button className='project-tab_btn' style={idx===tab?selected:{}} onClick={(e)=>handleTab(e,idx)}>{i}</button></li>))}
        </ul>
      </nav>

      <ul className='project_list_wrap'>
        {
          projects.map((i,idx) => (<li key={idx} className='project_list_box' onClick={(_)=>handleProjectModal(_,i)} >
            <span className='project_label'>{i.kind===1?'PERSONAL':'TEAM'}</span>
            <div className='project_list_frame'>
              <img src={`${process.env.PUBLIC_URL}${i.img}`} alt="" className='project_list_img' />
            </div>
            <p className='project_list_title'>
              {i.name}
            </p>
          </li>))
        }
      </ul>


    </div>
  );
}

export default Project;