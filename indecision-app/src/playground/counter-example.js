class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    console.log('handleAddOne');
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleMinusOne() {
    console.log('handleMinusOne');
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  handleReset() {
    console.log('handleReset');
    this.setState({
      count: 0
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// // const someId = "myId";

// const addOne = () => {
//   count++;
//   console.log("Add one", count);
//   renderCounterApp();
// }

// const minusOne = () => {
//   count--;
//   console.log("minus one", count);
//   renderCounterApp();
// }

// const reset = () => {
//   count = 0;
//   console.log("Reset", count);
//   renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//       {/* <button id={someId} className="button">+1</button> */}
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();