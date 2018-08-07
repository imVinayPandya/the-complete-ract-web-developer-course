
let count = 0;
// const someId = "myId";

const addOne = () => {
  count++;
  console.log("Add one", count);
  renderCounterApp();
}

const minusOne = () => {
  count--;
  console.log("minus one", count);
  renderCounterApp();
}

const reset = () => {
  count = 0;
  console.log("Reset", count);
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
      {/* <button id={someId} className="button">+1</button> */}
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();