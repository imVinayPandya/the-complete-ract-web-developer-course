// import React from 'react';

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
    const options = ['one', 'two', 'three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should id do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('handleRemoveAll');
  }

  render() {
    const { options } = this.props;

    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault();
    console.log('click');

    const option = e.target.elements.option.value;

    if(option) {
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