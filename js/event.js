chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: 'http://ruby-china.org/notifications', active: false }); 
    updateUnreadCount();
});

function updateUnreadCount() {
    chrome.browserAction.setBadgeText({ text: localStorage['unread_notification_count'] || '' });
    localStorage['unread_notification_count'] = '';
}

function checkNewNotifications() {
    $.get('http://ruby-china.org/wiki/about', function(content) {
        var unread_count = parseInt($(content).find("#user_notifications_count .badge").text());
        localStorage['unread_notification_count'] = unread_count || '';
    });
}

// TODO: 查阅资料，确定 alarms 创建的最合适的时机
chrome.alarms.clearAll();
// FIXME: 提醒时间先写死，后面再调整
chrome.alarms.create('check new notifications', { periodInMinutes: 3 });
chrome.alarms.onAlarm.addListener(checkNewNotifications);
