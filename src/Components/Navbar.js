import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <ul>
        <Link to="/home"><li style={{fontSize: 30}}>Home</li></Link>
        <li style={{fontSize: 30}}>Profile</li>
      </ul>
    </div>
  );
};

export default Navbar;
