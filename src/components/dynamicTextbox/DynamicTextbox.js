import React from 'react';
import './DynamicTextbox.css';

const DynamicTextbox = React.memo(({ text }) => {
  console.log('DynamicTextbox rendered');

  return (
    <div className='textbox'>
      {text}
      <div className='textbox-polygon'></div>
    </div>
  );
});

export default DynamicTextbox;
