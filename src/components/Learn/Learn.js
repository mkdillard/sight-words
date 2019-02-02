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
      listc: props.listC,
      listd: props.listD,
      listab: [...props.listA, ...props.listB],
      listcd: [...props.listC, ...props.listD],
      all: [...props.listA, ...props.listB, ...props.listC, ...props.listD],
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
        <div className='learnMenu' >
          <div className='learnMenuButton'>
            <Button
              name={'List A'} cb={this.toggleStart} cbParam={'lista'}
            />
          </div>
          <div className='learnMenuButton'>
            <Button
              name={'List B'} cb={this.toggleStart} cbParam={'listb'}
            />
          </div>
        </div>
        <div className='learnMenu' >
          <div className='learnMenuButton'>
            <Button
              name={'List C'} cb={this.toggleStart} cbParam={'listc'}
            />
          </div>
          <div className='learnMenuButton'>
            <Button
              name={'List D'} cb={this.toggleStart} cbParam={'listd'}
            />
          </div>
        </div>
        <div className='learnMenu' >
          <div className='learnMenuButton'>
            <Button
              name={'Lists A&B'} cb={this.toggleStart} cbParam={'listab'}
            />
          </div>
          <div className='learnMenuButton'>
            <Button
              name={'Lists C&D'} cb={this.toggleStart} cbParam={'listcd'}
            />
          </div>
        </div>
        <div className='learnMenu' >
          <div className='learnMenuButtonLong'>
            <Button
              name={'All Lists'} cb={this.toggleStart} cbParam={'all'}
            />
          </div>
        </div>
        <div className='learnMenu'>
          <Link className='learnMenuButtonLong link' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
        </div>
      </div>

    ) : (
      <div className='learnWrapper'>
        <WordBox className='wordBox' word={this.state.list[this.state.listIndex]} />
        <div className='learnMenu'>
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
        <div className='learnMenu'>
          <Link className='learnMenuButton link' to='/'>
            <Button name={'Home'} description={''} />
          </Link>
          <div className='learnMenuButton'>
            <Button name={'Back'} description={''} cb={this.toggleStart} cbParam={'none'}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Learn;
