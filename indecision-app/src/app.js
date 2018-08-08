// import React from 'react';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['one', 'two', 'three']
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const { options } = this.state;
    const index = Math.floor(Math.random() * options.length);
    alert(options[index]);
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
    const { options } = this.state;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {

  render() {
    const { title } = this.props;
    const { subtitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    const { hasOptions, handlePick } = this.props;

    return (
      <div>
        <button
          onClick={handlePick}
          disabled={!hasOptions}>
          What should id do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const { options, handleDeleteOptions } = this.props;

    return (
      <div>
        <button onClick={handleDeleteOptions}>Remove All</button>
        {
          options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { optionText } = this.props;
    return (
      <div>
        {optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    console.log('click');

    const option = e.target.elements.option.value;

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button >Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));