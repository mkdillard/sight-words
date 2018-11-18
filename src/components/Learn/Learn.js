import React from 'react';
import { Link } from 'react-router-dom';
import WordBox from '../WordBox/WordBox';
import Button from '../Button/Button';
import { Mod, Shuffle } from '../ListUtility/ListUtility';
import './Learn.css';

class Learn extends React.Component {
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
        listName: this.props.location.state.listName,
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

  toggleStart = (list) => {
    if ( list === 'lista' || list === 'listb' || list === 'both') {
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
    if (typeof this.state.speechVoice === 'undefined') {
      this.setState({
        speechVoice: this.setVoice()
      })
    }
  }

  render() {
    return !this.state.start ? (
      <div className='learnWrapper'>
        <div>
          <h1>Learn</h1>
          <h4>Which List of words would you like to study with?</h4>
        </div>
        <div className='selectListButtonDiv' >
          <Button
            name={'List A'} cb={this.toggleStart} cbParam={'lista'}
          />
        </div>
        <div className='selectListButtonDiv' >
          <Button
            name={'List B'} cb={this.toggleStart} cbParam={'listb'}
          />
        </div>
        <div className='selectListButtonDiv' >
          <Button
            name={'Both'} cb={this.toggleStart} cbParam={'both'}
          />
        </div>
        <div className='selectListButtonDiv'>
          <Link className='learnLink' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
        </div>
      </div>

    ) : (
      <div className='learnWrapper'>
        <WordBox className='wordBox' word={this.state.list[this.state.listIndex]} />
        <div className='wordBoxButtonWrapper'>
          <div>
            <Button name={'Prev'} description={''} cb={this.getPreviousWord} cbParam={null} />
          </div>
          <div>
            <Button name={'Say It'} description={''} cb={this.speakWord} cbParam={this.state.list[this.state.listIndex]} />
          </div>
          <div>
            <Button name={'Next'} description={''} cb={this.getNextWord} cbParam={null} />
          </div>
        </div>
        <div className='wordBoxMenu' >
          <Link className='learnLink' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
          <div className='learnLink'>
            <Button name={'Back'} description={''} cb={this.toggleStart} cbParam={'none'}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Learn;
