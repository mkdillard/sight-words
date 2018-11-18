import React from 'react';
import './WordBox.css';

const WordBox = ({word}) => {
  return (
    <div className='wordBoxWrapper'>
      <p>{word}</p>
    </div>
  );
}

export default WordBox;
