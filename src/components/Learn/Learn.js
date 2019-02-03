import React from 'react';
import { Link } from 'react-router-dom';
import WordBox from '../WordBox/WordBox';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import { Mod, Shuffle } from '../ListUtility/ListUtility';
import './Learn.css';

class Learn extends React.Component {
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
      speechVoice: this.setVoice,
      speechRate: 0.5
    }
  }

  componentWillMount(){
    if (this.props.location.state) {
      this.setState({
        start: this.props.location.state.start,
        list: this.props.location.state.list,
        listIndex: this.props.location.state.listIndex,
      });
    }
    this.setState ({
      speechVoice: this.setVoice()
    });
  }

  componentWillUnmount() {
    if(this.voiceTimer) {
      clearTimeout(this.voiceTimer);
    }
  }

  setVoice = () => {
    let voiceList = speechSynthesis.getVoices();
    if (voiceList.length !== 0) {
      let voice = voiceList.filter(
        (v) => {
          return (v.name === 'Google US English');
        }
      )[0];
      return voice;
    } else {
      this.voiceTimer = setTimeout(() => {this.setVoice();}, 100);
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

  speakWord = (word) => {
    let msg = new SpeechSynthesisUtterance(word);
    msg.voice = this.state.speechVoice;
    msg.rate = this.state.speechRate;
    speechSynthesis.speak(msg);
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
    })
  }

  toggleStart = () => {
    if(this.state.start) {
      this.setState({
        start: !this.state.start,
        checkedLists: [],
        list: [],
        listIndex: 0
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
      if (typeof this.state.speechVoice === 'undefined') {
        this.setState({
          speechVoice: this.setVoice()
        })
      }
    }
  }

  render() {
    return !this.state.start ? (
      <div className='learnWrapper'>
        <div>
          <h1>Learn</h1>
          <h4>Select one or more word lists you would like to study with and press start.</h4>
        </div>
        <div className='learnMenu' >
          <div className='learnMenuCheckbox'>
            <Checkbox
              name={'List A'} size={'large'} cb={this.updateCheckedLists} cbParam={'lista'}
            />
          </div>
          <div className='learnMenuCheckbox'>
            <Checkbox
              name={'List B'} size={'large'} cb={this.updateCheckedLists} cbParam={'listb'}
            />
          </div>
          <div className='learnMenuCheckbox'>
            <Checkbox
              name={'List C'} size={'large'} cb={this.updateCheckedLists} cbParam={'listc'}
            />
          </div>
          <div className='learnMenuCheckbox'>
            <Checkbox
              name={'List D'} size={'large'} cb={this.updateCheckedLists} cbParam={'listd'}
            />
          </div>
        </div>
        <div className='learnMenu' >
          <div className='learnMenuButton'>
            <Button
              name={'Start'} cb={this.toggleStart}
            />
          </div>
        </div>
        <div className='learnMenu'>
          <Link className='learnMenuButton link' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
        </div>
      </div>
    ) : (
      <div className='learnWrapper'>
        <WordBox className='wordBox' word={this.state.list[this.state.listIndex]} />
        <div className='learnMenuListNavigation'>
          <div className='learnMenuListNavigationButton'>
            <Button name={'Prev'} description={''} cb={this.getPreviousWord} cbParam={null} />
          </div>
          <div className='learnMenuListNavigationButton'>
            <Button name={'Say It'} description={''} cb={this.speakWord} cbParam={this.state.list[this.state.listIndex]} />
          </div>
          <div className='learnMenuListNavigationButton'>
            <Button name={'Next'} description={''} cb={this.getNextWord} cbParam={null} />
          </div>
        </div>
        <div className='learnMenuListNavigation'>
          <Link className='learnMenuButton link' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
          <div className='learnMenuButton'>
            <Button name={'Back'} description={''} cb={this.toggleStart}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Learn;
