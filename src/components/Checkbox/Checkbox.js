import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component {
//{name, description, size, cb, cbParam}
  constructor(props) {
    super(props);

    this.imageLargeUnchecked = require('../../resources/checkbox_unchecked_large.png');
    this.imageLargeChecked = require('../../resources/checkbox_checked_large.png');
    this.imageSmallUnchecked = require('../../resources/checkbox_unchecked_small.png');
    this.imageSmallChecked = require('../../resources/checkbox_checked_small.png');

    this.state = {
      active: false,
      size: 'small',
      imageSource: this.imageSmallUnchecked
    }
  }

  componentWillMount(){
    let newSize = this.state.size;
    if (this.props.size !== undefined) {
      newSize = this.props.size
    }
    let newSource = this.chooseimageSource(this.state.active, newSize);
    this.setState({
        size: newSize,
        imageSource: newSource
    });
  }

  chooseimageSource = (active, size) => {
    if (size === 'small' && !active) {
      return this.imageSmallUnchecked;
    } else if (size === 'small' && active) {
      return this.imageSmallChecked;
    } else if (size === 'large' && !active) {
      return this.imageLargeUnchecked;
    } else if (size === 'large' && active) {
      return this.imageLargeChecked;
    }
    return this.state.imageSource;
  }

  toggleState = () => {
    let newSource = this.chooseimageSource(!this.state.active, this.state.size);
    let cbState = !this.state.active;
    this.setState({
      active: !this.state.active,
      imageSource: newSource
    });

    return (this.props.cb ? this.props.cb(cbState, this.props.cbParam) : null)

  }

  render() {
    return (
      <div className={'checkbox'} onClick={() => {return this.toggleState();}}>
        <div className={'checkboxTitleBar'}>
          <img className={'checkboxImage'} src={this.state.imageSource} alt="" height="52px" width="52px" />
          <h2>{this.props.name}</h2>
        </div>
        <div className={'checkboxText'}>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Checkbox;
