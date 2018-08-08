'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggel = function (_React$Component) {
  _inherits(VisibilityToggel, _React$Component);

  function VisibilityToggel(props) {
    _classCallCheck(this, VisibilityToggel);

    var _this = _possibleConstructorReturn(this, (VisibilityToggel.__proto__ || Object.getPrototypeOf(VisibilityToggel)).call(this, props));

    _this.handleToggelVisibility = _this.handleToggelVisibility.bind(_this);
    _this.state = {
      title: 'Visibility Toggel',
      subtitle: 'Put your life in the hands of a computer.',
      showDetails: false
    };
    return _this;
  }

  _createClass(VisibilityToggel, [{
    key: 'handleToggelVisibility',
    value: function handleToggelVisibility(e) {
      e.preventDefault();
      this.setState(function (prevState) {
        return {
          showDetails: !prevState.showDetails
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          title = _state.title,
          subtitle = _state.subtitle,
          showDetails = _state.showDetails;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          title
        ),
        React.createElement(
          'button',
          { onClick: this.handleToggelVisibility },
          showDetails ? 'Hide Details' : 'Show Details'
        ),
        React.createElement(
          'p',
          null,
          showDetails && subtitle
        )
      );
    }
  }]);

  return VisibilityToggel;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggel, null), document.getElementById('app'));
