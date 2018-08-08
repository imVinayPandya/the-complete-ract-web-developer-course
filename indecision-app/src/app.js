// import React from 'react';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
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

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
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
        <AddOption
          handleAddOption={this.handleAddOption}
        />
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
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    const { handleAddOption } = this.props;
    const error = handleAddOption(option);

    this.setState(() => {
      return { error };
    });

    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button >Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));