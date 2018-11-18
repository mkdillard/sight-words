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
      alert("Please Select which list you want to use before starting.");
    }
    if (typeof this.state.speechVoice === "undefined") {
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
          <Link className='learnLink' to="/">
            <Button name={'Home'} description={''} />
          </Link>
          <div className='learnLink'>
            <Button name={'Start'} description={''} cb={this.toggleStartType} cbParam={null} />
          </div>
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
          <Link className='learnLink' to="/">
            <Button name={'Home'} description={''} />
          </Link>
          <div className='learnLink'>
            <Button name={'Back'} description={''} cb={this.toggleStartType} cbParam={null}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Learn;
