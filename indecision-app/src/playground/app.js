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
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

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

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
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

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
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
      </div>
    );
  }
}

const Header = (props) => {
  const { title } = props;
  const { subtitle } = props;
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  const { hasOptions, handlePick } = props;

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

const Options = (props) => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;

  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      {options.length === 0 && <p>Please add an update to get started!</p>}
      {
        options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  const { optionText, handleDeleteOption } = props;
  return (
    <div>
      {optionText}
      <button
        onClick={(e) => {
          handleDeleteOption(optionText)
        }}
      >
        remove
      </button>
    </div>
  );
};

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

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
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

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));