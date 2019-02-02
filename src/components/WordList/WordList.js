import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './WordList.css'


const WordList = ({listA, listB, listC, listD}) => {

  const wordListA = listA.map((word, index) => {
    return (
      <p className='word' key={index} >{word}</p>
    );
  });

  const wordListB = listB.map((word, index) => {
    return (
      <p className='word' key={index} >{word}</p>
    );
  });

  const wordListC = listC.map((word, index) => {
    return (
      <p className='word' key={index} >{word}</p>
    );
  });

  const wordListD = listD.map((word, index) => {
    return (
      <p className='word' key={index} >{word}</p>
    );
  });

  return (
    <div className='wordListWrapper'>
      <div className='listWrapper'>
        <h3> List A: Q1 list </h3>
        <div className='wordWrapper'>
          {wordListA}
        </div>
      </div>
      <div className='listWrapper'>
        <h3> List B: Q2 list </h3>
        <div className='wordWrapper'>
          {wordListB}
        </div>
      </div>
      <div className='listWrapper'>
        <h3> List C: Q3 list </h3>
        <div className='wordWrapper'>
          {wordListC}
        </div>
      </div>
      <div className='listWrapper'>
        <h3> List D: Q4 list </h3>
        <div className='wordWrapper'>
          {wordListD}
        </div>
      </div>
      <Link className='wordListLink' to='/'>
        <Button name={'Home'} description={''} />
      </Link>
    </div>
  );
}
export default WordList;
