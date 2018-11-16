import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './WordLists.css';

const WordLists = ({styleClass, listA, listB} ) => {

  const wordListA = listA.map((word, index) => {
    return (<Col xs={6} sm={4} md={3} lg={2} key={index}>
              <p className='word'>{word}</p>
            </Col>);
  });
  const wordListB = listB.map((word, index) => {
    return (<Col xs={6} sm={4} md={3} lg={2} key={index}>
              <p className='word'>{word}</p>
            </Col>);
  });

  return (
    <div  className={`wrapper ${styleClass}`}>
      <h2>List A</h2>
      <Grid fluid>
        <Row>
          {wordListA}
        </Row>
      </Grid>
      <h2>List B</h2>
      <Grid fluid>
        <Row>
          {wordListB}
        </Row>
      </Grid>
    </div>
  );
};

export default WordLists;
