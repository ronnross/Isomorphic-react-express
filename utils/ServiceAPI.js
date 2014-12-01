var request = require('superagent');

var baseURL = 'http://localhost:3000/api';

module.exports = {
  getCaller : function(caller, callback) {
    request
    .get(baseURL + caller)
    .set('Accept', 'application/json')
    .end(function(res){
      if (res.ok) {
        callback(res);
        console.log('yay got ' + JSON.stringify(res.body));

      } else {
        console.log('Oh no! error ' + res.text);
      }
    });
  }
};
