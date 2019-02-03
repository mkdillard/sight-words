import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {WordBoxTimer} from '../WordBox/WordBox';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
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
      checkedLists: [],
      list: ['word', 'word2'],
      listIndex: 0,
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


  updateCheckedLists = (active, list) => {
    let newCheckedLists = this.state.checkedLists;
    if(active && !newCheckedLists.includes(list)) {
      newCheckedLists.push(list);
    } else if (!active && newCheckedLists.includes(list)) {
      newCheckedLists = newCheckedLists.filter((element) => {return element !== list});
    }
    this.setState({
      checkedLists: newCheckedLists
    });
  }

  toggleStart = () => {
    if(this.state.start) {
      this.setState({
        start: !this.state.start,
        checkedLists: [],
        list: ['word', 'word2'],
        listIndex: 0,
        listFinished: false
      });
    } else {
      let tempList = [];
      let alreadyAddedList = [];
      for(const list of this.state.checkedLists) {
        if (['lista', 'listb', 'listc', 'listd'].includes(list) && !alreadyAddedList.includes(list)) {
          tempList = [...tempList, ...this.state[list]];
          alreadyAddedList.push(list);
        }
      }
      if (tempList.length > 0) {
        this.setState({
          list: Shuffle(tempList),
          listIndex: 0,
          start: !this.state.start
        });
      } else {
        alert("Please select at least one list before starting.");
      }
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
          listIndex: this.state.listIndex
        }
      }} />
    }
    return !this.state.start ? (
      <div className='timedWrapper'>
        <div>
          <h1>Timed Practice</h1>
          <h4>Select one or more word lists you would like to do a timed practice with.</h4>
        </div>
        <div className='timedMenu' >
          <div className='timedMenuCheckbox'>
            <Checkbox
              name={'List A'} size={'large'} cb={this.updateCheckedLists} cbParam={'lista'}
            />
          </div>
          <div className='timedMenuCheckbox'>
            <Checkbox
              name={'List B'} size={'large'} cb={this.updateCheckedLists} cbParam={'listb'}
            />
          </div>
          <div className='timedMenuCheckbox'>
            <Checkbox
              name={'List C'} size={'large'} cb={this.updateCheckedLists} cbParam={'listc'}
            />
          </div>
          <div className='timedMenuCheckbox'>
            <Checkbox
              name={'List D'} size={'large'} cb={this.updateCheckedLists} cbParam={'listd'}
            />
          </div>
        </div>
        <div className='timedMenu' >
          <div className='timedMenuButton'>
            <Button
              name={'Start'} cb={this.toggleStart}
            />
          </div>
        </div>
        <div className='timedMenu'>
          <Link className='timedMenuButton link' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
        </div>
      </div>
    ) : (
      <div className='timedWrapper'>
        <WordBoxTimer className='wordBox' word={this.state.list[this.state.listIndex]} updateWord={this.timer} />
        <div className='timedWordMenu' >
          <Link className='timedMenuButton link' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
          <div className='timedMenuButton link'>
            <Button name={'Back'} description={''} cb={this.toggleStart} />
          </div>
        </div>
      </div>
    );
  }
}
export default Timed;
