import React, {useContext} from 'react';

import { modalContext } from './modalContext/modalContext';

import {Outlet} from 'react-router-dom';

import Header from './Header';
import Modal from './modalContext/Modal';



function Index(props) {

  const {isModalUse} = useContext(modalContext);

  return (
    <div className='content-wrap'>
      {isModalUse&&<Modal />}
      <Header />
      <main>
        <Outlet />
      </main>


    </div>
  );
}

export default Index;