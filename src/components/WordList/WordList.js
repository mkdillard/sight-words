import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Words from '../../data/sightwords.json';
import './WordList.css'


const WordList = () => {

  const wordListA = Words.listA.map((word, index) => {
    return (
      <p className='word' key={index} >{word}</p>
    );
  });

  const wordListB = Words.listB.map((word, index) => {
    return (
      <p className='word' key={index} >{word}</p>
    );
  });


  return (
    <div className='wordListWrapper'>
      <div className='listWrapper'>
        <h3> List A: Mid year list </h3>
        <div className='wordWrapper'>
          {wordListA}
        </div>
      </div>
      <div className='listWrapper'>
        <h3> List B: End of year list </h3>
        <div className='wordWrapper'>
          {wordListB}
        </div>
      </div>
      <Link className='wordListLink' to="/">
        <Button name={'Home'} description={''} />
      </Link>
    </div>
  );
}
export default WordList;
