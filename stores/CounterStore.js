var mcFly = require('../flux/mcFly');

var _count = 0;
var _switched = false;

function countOne(text) {
  _count++;
}

function flipSwitch(_switched){
  _switched = !_switched;
}

var CounterStore = mcFly.createStore({

  getCount: function() {
    return _count;
  }

}, function(payload){
  switch(payload.actionType) {
    case 'COUNT_ONE':
      countOne();
      break;
      default:
        return true;
      }

      CounterStore.emitChange();

      return true;

    });

    module.exports = CounterStore;
