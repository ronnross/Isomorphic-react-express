var React = require('react'),
    request = require('superagent'),
    utils = require('../utils/ServiceAPI');

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      switched: false
    };
  },
  componentDidMount: function() {
    var self = this;
    utils.getCaller('/server', function(res){
      self.setState({
        caller: res.body
      });
    });
  },
  handleClick: function(event) {
    var self = this;
    utils.getCaller('/client', function(res){
      self.setState({
        caller: res.body
      });
    });
    this.setState({switched: !this.state.switched});
  },
  render: function() {
    var text = this.state.switched ? 'on' : 'off';
    return (
      <div>
        Hello World Element <br />
        Called a from - {this.state.caller} <br />
        <button onClick={this.handleClick}>
          This switch is <b> {text} </b>. Click to toggle.
        </button>
      </div>
    );
  }
});

module.exports = HelloWorld;
