var rubyChinaApp = angular.module('rubyChinaApp', []);

rubyChinaApp.filter('timeago', function() {
    return function(input) {
        console.log(input);
        return $.timeago(input);
    }
});

rubyChinaApp.controller('TopicListCtrl', function TopicListCtrl($scope, $http) {
    $http.get('http://ruby-china.org/api/topics.json').success(function(data) {
        console.log(JSON.stringify(data[1]));
        $scope.topics = data;
        $('#loading').hide();
        jQuery("abbr.timeago").timeago();
    });
});

$("#notify").click(function() {
    chrome.browserAction.setBadgeText({'text' : ""});
    chrome.tabs.create({'url' : 'http://ruby-china.org/notifications'});
});
