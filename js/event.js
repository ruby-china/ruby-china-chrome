chrome.browserAction.onClicked.addListener(function(tab) {
    if (localStorage['unread_notification_count']) {
        chrome.tabs.create({ url: 'http://ruby-china.org/notifications' }); 
        localStorage['unread_notification_count'] = '';
    } else {
        chrome.tabs.create({ url: 'http://ruby-china.org/' }); 
    }

    updateUnreadCount();
});

function updateUnreadCount() {
    chrome.browserAction.setBadgeText({ text: localStorage['unread_notification_count'] || '' });
}

function checkNewNotifications(alarmInfo) {
    console.log('Checking ruby china notifications...');
    $.get('http://ruby-china.org/wiki/about', function(content) {
        var unread_count = parseInt($(content).find("#user_notifications_count .badge").text());
        console.log('Fetched ' + unread_count + ' notifications');
        localStorage['unread_notification_count'] = unread_count || '';
        updateUnreadCount();
    });
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.alarms.create('notifications', { periodInMinutes: 3 });
});

chrome.alarms.onAlarm.addListener(checkNewNotifications);
