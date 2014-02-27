exports.command = function(callback) {
  var self = this;
  return this.runCommand('accept_alert', [], function() {
    if (typeof callback == "function") {
      callback.call(self);
    }
  });
};