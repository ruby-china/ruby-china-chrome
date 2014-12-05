function log() {
    var message = Array.prototype.slice.call(arguments, 0);
    console.log.apply(console, ['[crx-ruby-china]'].concat(message));
}

function register_message_dispatcher(dispatcher) {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            var handler = dispatcher[request.type] || noop;
            handler(request, sender, sendResponse);

            return true;
        }
    );    
}