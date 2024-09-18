import React from 'react';

// import { modalContext } from './modalContext/modalContext';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 컴포넌트들
import Home from './Home';
import Index from './Index';
import Project from './Project';

const router = createBrowserRouter([{
  path : '/',
  element : <Index />,
  children : [
    {
      index : true,
      element : <Home />
    },
    {
      path : '/project',
      element : <Project />
    }
  ]
}]);

function Router(props) {

  // const {isModalUse} = useContext(modalContext);

  // console.log(isModalUse);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;