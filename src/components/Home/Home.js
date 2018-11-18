import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Home.css';

const Home = () => {

  return (
    <div className='homeContent'>
      <div>
        <h1>Sight Words:</h1>
        <h3>Practice Application</h3>
        <p>
          Welcome to the Sight Words Practice Application.
        </p>
        <p>
          This app allows you to study Sight Words and test
          your knowledge to see how many you have learned.
        </p>
        <p>
          You can use this app to:
        </p>
        <ul>
          <li>View a list of all Sight Words.</li>
          <li>Study Sight Words in learning mode.</li>
          <li>Practice identifying Sight Words in practice
              mode using a longer 10 second timer</li>
          <li>Practice identifying Sight Words in test
              mode using a 3 second timer to imitate
              classroom testing conditions.
          </li>
        </ul>
        <div className='homeMenu'>
          <Link className='homeLink' to="/wordlist">
            <Button name={'Word List'} description={'All 50 Words'} />
          </Link>
          <Link className='homeLink' to="/learn">
            <Button name={'Learn'} description={'Flashcards'} />
          </Link>
          <Link className='homeLink' to="/practice">
            <Button name={'Practice'} description={'10 second timer'} />
          </Link>
          <Link className='homeLink' to="/test">
            <Button name={'Test'} description={'3 second timer'} />
          </Link>
        </div>
      </div>
    </div>
  );

}
export default Home;
