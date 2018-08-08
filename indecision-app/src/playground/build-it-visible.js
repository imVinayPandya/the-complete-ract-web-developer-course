class VisibilityToggel extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggelVisibility = this.handleToggelVisibility.bind(this);
    this.state = {
      title: 'Visibility Toggel',
      subtitle: 'Put your life in the hands of a computer.',
      showDetails: false
    };
  }

  handleToggelVisibility(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        showDetails: !prevState.showDetails
      }
    });
  }

  render() {
    const { title, subtitle, showDetails } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleToggelVisibility}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        <p>{showDetails && subtitle}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggel />, document.getElementById('app'));