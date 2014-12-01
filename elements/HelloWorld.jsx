var React = require('react');

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {switched: false};
  },
  handleClick: function(event) {
    this.setState({switched: !this.state.switched});
  },
  render: function() {
    var text = this.state.switched ? 'on' : 'off';
    return (
      <div>
        Hello World Element <br />
        <button onClick={this.handleClick}>
          This switch is <b> {text} </b>. Click to toggle.
        </button>
      </div>
    );
  }
});

module.exports = HelloWorld;
