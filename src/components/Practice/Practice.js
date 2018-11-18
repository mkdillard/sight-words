import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {WordBoxTimer} from '../WordBox/WordBox';
import Button from '../Button/Button';
import { Mod, Shuffle } from '../ListUtility/ListUtility';
import './Practice.css';

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      lista: props.listA,
      listb: props.listB,
      both: [...props.listA, ...props.listB],
      list: ['word', 'word2'],
      listIndex: 0,
      listName: 'none',
      listFinished: false
    }
  }

  componentWillUnmount() {
    if(this.timerHandle) {
      clearTimeout(this.timerHandle);
    }
  }

  getPreviousWord = () => {
    let index = this.state.listIndex;
    this.setState({
      listIndex: Mod((index-1), this.state.list.length)
    });
  }

  getNextWord = () => {
    let index = this.state.listIndex;
    this.setState({
      listIndex: Mod((index+1), this.state.list.length)
    });
  }

  setListType = (listName) => {
    let tempList = this.state[listName];
    this.setState({
      list: Shuffle(tempList),
      listIndex: 0,
      listName: listName
    });
  }

  checkWhichList = (list) => {
    if (this.state.listName === list) {
      return true;
    }
    return false;
  }

  toggleStartType = () => {
    if ( this.state.listName === 'lista' || this.state.listName === 'listb' || this.state.listName === 'both') {
      this.setState(
        this.state.start ? {
         listName: 'none',
         start: !this.state.start
       } : {
         start: !this.state.start
       }
     );
    } else {
      alert('Please Select which list you want to use before starting.');
    }
  }

  timer = () => {
    this.timerHandle = setTimeout(() => {
      if (this.state.listIndex < this.state.list.length-1) {
        this.setState({
          listIndex: this.state.listIndex + 1
        });
      } else {
        this.setState({
          listFinished: true
        });
      }
    }, 10000);
  }

  render() {
    if (this.state.listFinished) {
      return <Redirect to={{
        pathname: '/learn',
        state: {
          start: this.state.start,
          list: this.state.list,
          listIndex: this.state.listIndex,
          listName: this.state.listName
        }
      }} />
    }
    return !this.state.start ? (
      <div className='practiceWrapper'>
        <div>
          <h1>Practice</h1>
          <h4>Which List of words would you like to practice with?</h4>
        </div>
        <div className='selectListButtonDiv' >
          <Button
            name={'List A'} active={this.checkWhichList('lista')}
            cb={this.setListType} cbParam={'lista'}
          />
        </div>
        <div className='selectListButtonDiv' >
          <Button
            name={'List B'} active={this.checkWhichList('listb')}
            cb={this.setListType} cbParam={'listb'}
          />
        </div>
        <div className='selectListButtonDiv' >
          <Button
            name={'Both'} active={this.checkWhichList('both')}
            cb={this.setListType} cbParam={'both'}
          />
        </div>
        <div className='wordBoxMenu'>
          <Link className='practiceLink' to='/sight-words'>
            <Button name={'Home'} description={''} />
          </Link>
          <div className='practiceLink'>
            <Button name={'Start'} description={''} cb={this.toggleStartType} cbParam={null} />
          </div>
        </div>
      </div>
    ) : (
      <div className='practiceWrapper'>
        <WordBoxTimer className='wordBox' word={this.state.list[this.state.listIndex]} updateWord={this.timer} />
        <div className='wordBoxMenu' >
          <Link className='practiceLink' to='/sight-words'>
            <Button name={'Home'} description={''} />
          </Link>
          <div className='practiceLink'>
            <Button name={'Back'} description={''} cb={this.toggleStartType} cbParam={null}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Practice;
