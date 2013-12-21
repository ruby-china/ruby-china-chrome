$(function() {
	$(document).on('mouseover', '.face a, .avatar a, .info a[data-name], .at_user', function(evt) {
		var $link = $(this);
		var username = $link.attr('href').substring(1);
		$.getJSON('http://ruby-china.org/api/users/' + username + '.json', function(user) {
			// 浮层中显示最近的话题
			console.log(user);
			// $link.data('powertip', function() {
			// 	return 'ID: ' + user.login + '<br/>'
			// 		+ '城市：' + user.location + '<br/>'
			// 		+ '签名：' + user.tagline + '<br/>';
			// }).powerTip();
			// $.powerTip.show($link);
		});
	});
});
