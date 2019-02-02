import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {WordBoxTimer} from '../WordBox/WordBox';
import Button from '../Button/Button';
import { Mod, Shuffle } from '../ListUtility/ListUtility';
import './Timed.css';

class Timed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      lista: props.listA,
      listb: props.listB,
      listc: props.listC,
      listd: props.listD,
      listab: [...props.listA, ...props.listB],
      listcd: [...props.listC, ...props.listD],
      all: [...props.listA, ...props.listB, ...props.listC, ...props.listD],
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

  toggleStart = (list) => {
    if (['lista', 'listb', 'listc', 'listd', 'listab', 'listcd', 'all'].includes(list)) {
      let tempList = this.state[list];
      this.setState({
         list: Shuffle(tempList),
         listIndex: 0,
         listName: list,
         start: !this.state.start
       });
    } else {
     this.setState({
       listName: 'none',
       start: !this.state.start
     })
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
    }, 3000);
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
      <div className='timedWrapper'>
        <div>
          <h1>Timed Practice</h1>
          <h4>Which List of words would you like to do a timed practice with?</h4>
        </div>
        <div className='timedMenu' >
          <div className='timedMenuButton'>
            <Button
              name={'List A'} cb={this.toggleStart} cbParam={'lista'}
            />
          </div>
          <div className='timedMenuButton'>
            <Button
              name={'List B'} cb={this.toggleStart} cbParam={'listb'}
            />
          </div>
        </div>
        <div className='timedMenu' >
          <div className='timedMenuButton'>
            <Button
              name={'List C'} cb={this.toggleStart} cbParam={'listc'}
            />
          </div>
          <div className='timedMenuButton'>
            <Button
              name={'List D'} cb={this.toggleStart} cbParam={'listd'}
            />
          </div>
        </div>
        <div className='timedMenu' >
          <div className='timedMenuButton'>
            <Button
              name={'Lists A&B'} cb={this.toggleStart} cbParam={'listab'}
            />
          </div>
          <div className='timedMenuButton'>
            <Button
              name={'Lists C&D'} cb={this.toggleStart} cbParam={'listcd'}
            />
          </div>
        </div>
        <div className='timedMenu' >
          <div className='timedMenuButtonLong'>
            <Button
              name={'All Lists'} cb={this.toggleStart} cbParam={'all'}
            />
          </div>
        </div>
        <div className='timedMenu'>
          <Link className='timedMenuButtonLong link' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
        </div>
      </div>
    ) : (
      <div className='timedWrapper'>
        <WordBoxTimer className='wordBox' word={this.state.list[this.state.listIndex]} updateWord={this.timer} />
        <div className='timedMenu' >
          <Link className='timedMenuButton link' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
          <div className='timedMenuButton link'>
            <Button name={'Back'} description={''} cb={this.toggleStart} cbParam={'none'}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Timed;
