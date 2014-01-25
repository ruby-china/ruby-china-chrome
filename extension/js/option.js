$(function() {
    chrome.storage.sync.get({ 'option.fetch_duration': 3 }, function(items) {
        $('#fetch_duration').val(items['option.fetch_duration']);
    });

    $('#fetch_duration').on('change', function() {
        var fetch_duration = parseInt($(this).val());
        chrome.storage.sync.set({ 'option.fetch_duration': fetch_duration }); 
    });
});
