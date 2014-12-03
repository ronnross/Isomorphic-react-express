var React = require('react'),
    request = require('superagent'),
    utils = require('../utils/ServiceAPI'),
    FluxCounterActions = require('../actions/FluxCounterActions'),
    CounterStore = require('../stores/CounterStore');

var HelloWorld = React.createClass({
  mixins: [CounterStore.mixin],
  getInitialState: function() {
    return {
      switched: false,
      caller: ''};
  },
  componentDidMount: function() {
    var self = this;
    utils.getCaller('/server', function(res){
      self.setState({
        caller: res.body,
        count: CounterStore.getCount()
      });
    });
  },
  handleClick: function(event) {
    var self = this;
    FluxCounterActions.countOne();
    utils.getCaller('/client', function(res){
      self.setState({
        caller: res.body
      });
    });
    this.setState({switched: !this.state.switched});
  },
  onChange: function() {
    this.setState({
      count: CounterStore.getCount()
    });
  },
  render: function() {
    var text = this.state.switched ? 'on' : 'off';
    return (
      <div>
        Hello World Element <br />
        <p>{this.state.count}</p>
        Called a from - {this.state.caller} <br />
        <button onClick={this.handleClick}>
          This switch is <b> {text} </b>. Click to toggle.
        </button>
      </div>
    );
  }
});

module.exports = HelloWorld;
