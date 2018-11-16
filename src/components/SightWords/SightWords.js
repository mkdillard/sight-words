import React, { Component } from 'react';
import ListButton from './ListButton';
import {WordBoxButton, WordBoxTimer} from './WordBox';
import './SightWords.css';

//{type, listA, listB}
class SightWords extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      list: 'none',
      start: false,
      lista: props.listA,
      listb: props.listB,
      both: [...props.listA, ...props.listB],
      currentlist: [],
      currentlistindex: 0
    };
  };

  componentWillUnmount() {
    if(this.timerHandle) {
      clearTimeout(this.timerHandle);
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.type !== this.state.type){
      this.setState({
        type: nextProps.type
      });
    }
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  shuffle = (array) => {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

  selectSightWordsDescription = (type) => {
    if (type === 'learn') {
      return (
        <p>
          You will be able to say each words at your own pace.
        </p>
      );
    } else if (type === 'practice') {
      return (
        <p>
          You will have 10 seconds to say each word.
        </p>
      );
    } else if (type === 'test') {
      return (
        <p>
          You will have 3 seconds to say each word.
        </p>
      );
    };

    return ( //assume learn
      <p>
        You will be able to progress through the words at your own pace.
      </p>
    );
  }

  setListType = (listName) => {
    let tempList = this.state[listName];
    this.setState({
      list: listName,
      currentlist: this.shuffle(tempList),
      currentlistindex: 0
    });
  }

  toggleStartType = () => {
    if ( this.state.list === 'lista' || this.state.list === 'listb' || this.state.list === 'both') {
      this.setState(
        this.state.start ? {
         list: 'none',
         start: !this.state.start
       } : {
         list: this.state.list,
         start: !this.state.start
       }
     );
    } else {
      alert("Please Select which list you want to use before starting.");
    }
  }

  checkWhichList = (list) => {
    if (this.state.list === list) {
      return true;
    }
    return false;
  }

  updateWordButton = (direction) => {
    let index = this.state.currentlistindex;

    if (direction === 'next') {
      index = this.mod((index + 1), this.state.currentlist.length);
    } else if (direction === 'previous') {
      index = this.mod((index - 1), this.state.currentlist.length);
    }
    this.setState ({
      currentlistindex: index
    });
  }

  timer = (waitTime) => {
    this.timerHandle = setTimeout(() => {
      this.setState(
        (this.state.currentlistindex < this.state.currentlist.length-1) ? {
          currentlistindex: this.state.currentlistindex + 1
        } : {
          type: 'learn'
        }
      );
    }, waitTime);
  }

  updateWordTimer = (type) => {
    if (type === 'practice') {
      this.timer(10000);
    } else if (type === 'test') {
      this.timer(3000);
    }
  }

  showLearnButtons = (type) => {
    if (type === 'learn') {
      return (
        <div className='word-box-wrapper'>
          <WordBoxButton type={type}
                   word={this.state.currentlist[this.state.currentlistindex]}
          />
          <ListButton
            name={'Previous'} buttonClass={'word-box-button'} active={false} cb={this.updateWordButton}
          />
          <ListButton
            name={'Next'} buttonClass={'word-box-button'} active={false} cb={this.updateWordButton}
          />
        </div>
      );
    }
    return (
      <div className='word-box-wrapper'>
        <WordBoxTimer type={type}
                 word={this.state.currentlist[this.state.currentlistindex]}
                 updateWord={this.updateWordTimer}
                 updateWordParam={type}
        />
      </div>
    );
  }

  render() {
    return this.state.start ? (
      <div className='word-session-container' >
        {this.showLearnButtons(this.state.type)}
        <div className='small-button-wrapper' >
          <ListButton
            name={this.capitalize(this.state.type)} buttonClass={'list-button-small-left'} active={false} cb={this.toggleStartType}
          />
          <ListButton
            name={'Home'} buttonClass={'list-button-small-right'} active={this.checkWhichList('home')} cb={this.props.callback}
          />
        </div>
      </div>
    ) : (
      <div className='sight-words-menu'>
        <h1>{this.capitalize(this.state.type)}</h1>
        <div className='pWrapper'>
          {this.selectSightWordsDescription(this.state.type)}
        </div>
        <h4>Which List of words would you like to use</h4>
        <ListButton
          name={'List A'} buttonClass={'list-button'} active={this.checkWhichList('lista')} cb={this.setListType}
        />
        <ListButton
          name={'List B'} buttonClass={'list-button'} active={this.checkWhichList('listb')} cb={this.setListType}
        />
        <ListButton
          name={'Both'} buttonClass={'list-button'} active={this.checkWhichList('both')} cb={this.setListType}
        />
        <div className='small-button-wrapper' >
          <ListButton
            name={'Home'} buttonClass={'list-button-small-left'} active={this.checkWhichList('home')} cb={this.props.callback}
          />
          <ListButton
            name={'Start'} buttonClass={'list-button-small-right'} active={this.checkWhichList('start')} cb={this.toggleStartType}
          />
        </div>
      </div>
    );
  }
}

export default SightWords;
