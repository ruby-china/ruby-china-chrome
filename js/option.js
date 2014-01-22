$(function() {
    chrome.storage.sync.get('options.update_duration', function(items) {
        console.log(items); 
    });
});
