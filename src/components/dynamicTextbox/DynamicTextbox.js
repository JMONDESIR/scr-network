import React from 'react';
import './DynamicTextbox.css';

const DynamicTextbox = ({ text }) => {
  return (
    <div className='textbox'>{text}
      <div className='textbox-polygon'>

      </div>
    </div>
  );
};

export default DynamicTextbox;