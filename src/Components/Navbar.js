import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <ul>
        <Link to="/home"><li style={{fontSize: 30}}>Home</li></Link>
        <Link to="/store"><li style={{fontSize: 30}}>Store</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
