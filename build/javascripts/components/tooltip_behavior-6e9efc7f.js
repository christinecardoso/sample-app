(function() {
  var TooltipBehavior;

  TooltipBehavior = (function() {
    function TooltipBehavior() {
      if ($('[data-toggle="tooltip"]').hasClass("module-title")) {
        if ($('[data-toggle="tooltip"]').data("signout-flag") === true) {
          $('[data-toggle="tooltip"]').tooltip({
            placement: 'right',
            html: 'true',
            trigger: 'manual'
          }).tooltip('show');
        }
      } else {
        $('[data-toggle="tooltip"]').tooltip();
      }
    }

    return TooltipBehavior;

  })();

  $(function() {
    if ($('[data-toggle="tooltip"]').length) {
      return new TooltipBehavior();
    }
  });

}).call(this);
