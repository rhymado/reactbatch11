import React from 'react';

function Greeting (props) {
  return (
    <div>
      <p style={{fontSize: 40}}>
        Hello {props.company} batch {props.batch}
      </p>
    </div>
  );
}

export default Greeting;
