$(function() {
	$(document).on('mouseover', '.face a, .avatar a, .info a[data-name], .at_user', function() {
		var username = $(this).attr('href').substring(1);
		$.getJSON('http://ruby-china.org/api/users/' + username + '.json', function(user) {
			// TODO 通过 Popover 显示用户的详细信息
			console.log(user);
		});
	});
});