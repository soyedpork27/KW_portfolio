import React from 'react';
import { Link, useLocation } from 'react-router-dom';




function Header({props}) {

  const {pathname} = useLocation();

  const GNB = [
    {
      text : 'Home',
      to : '/'
    },
    {
      text : 'About Me',
      to : '/About'
    },
    {
      text : 'Project',
      to : '/project'
    }
  ];

  const select = {
    list : {
      backgroundColor : '#000',
      height : '65px',
      zIndex : '9990'
    },
    font : {
      color : '#f00'
    }
  }

  return (
    <header>

      <h1>
        CH's
      </h1>

      <ul className='gnb'>
        {GNB.map((i,idx) => <li key={idx}  className={`${pathname===i.to?`selected_gnb`:''}`} ><Link to={i.to} style={pathname===i.to?select.font:{}} >{i.text}</Link></li>)}
      </ul>

    </header>
  );
}

export default Header;