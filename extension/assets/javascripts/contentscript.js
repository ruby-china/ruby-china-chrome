log('Loading modules...');
var message = { type: 'load_modules' };
chrome.runtime.sendMessage(message, function(response) {
  log('Completed loading modules.');
});