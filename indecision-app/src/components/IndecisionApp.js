import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomNum]
    this.setState(() => ({ selectedOption }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };

  componentDidMount() {
    // after component got mounted
    try {
      const optionJson = localStorage.getItem('options');
      const options = JSON.parse(optionJson);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    // after component get updated
    if (!!prevState.options && prevState.options.length !== this.state.options.length) {
      const optionJson = JSON.stringify(this.state.options);
      localStorage.setItem('options', optionJson);
    }
  }

  componentWillUnmount() {
    // before component get unmount
    // to this in action
    // open developer console in chrome, run following line
    // ReactDOM.render(React.createElement('p'), document.getElementById('app'))
    // it will print 'componentWillUnmount'
    console.log('componentWillUnmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer.';
    const { options } = this.state;

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;