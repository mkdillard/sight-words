import React from 'react';
import './SightWords.css';

const ListButton = ({name, buttonClass, active, cb}) => (

  <div className={`${buttonClass} ${active}`}
       onClick={() => {cb(name.replace(/\s/g,'').toLowerCase())}}>
    <h2>{name}</h2>
  </div>
);

export default ListButton;
