import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Words from '../../data/sightwords.json';
import './WordLists.css';

// console.log(typeof WordLists.listA)
// console.log(WordLists.listB)

const WordLists = ( ) => {

  const wordListA = Words.listA.map((word, index) => {
    return (<Col xs={6} sm={4} md={3} lg={2} key={index}>
              <p className='word'>{word}</p>
            </Col>);
  });
  const wordListB = Words.listB.map((word, index) => {
    return (<Col xs={6} sm={4} md={3} lg={2} key={index}>
              <p className='word'>{word}</p>
            </Col>);
  });


  return (
    <div className='wrapper'>
      <div className='float-left'>
        <h2>List A</h2>
        <Grid fluid>
          <Row>
            {wordListA}
          </Row>
        </Grid>
      </div>
      <div className='float-right'>
        <h2>List B</h2>
        <Grid fluid>
          <Row>
            {wordListB}
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default WordLists;
