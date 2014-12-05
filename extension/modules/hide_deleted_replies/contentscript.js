(function($) {
  log('Module `hide_deleted_replies` loaded:');

  function hideDeletedReplies() {
    $('.reply .deleted').each(function() {
      $(this).parent().remove();
    });
  }

  $(document).on('page:load', hideDeletedReplies);
  $(document).ready(hideDeletedReplies);
})(jQuery);
