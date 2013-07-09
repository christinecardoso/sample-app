(function() {
  var CollapsibleBehavior;

  CollapsibleBehavior = (function() {
    function CollapsibleBehavior() {
      var _this = this;
      $(document).on('click', 'a[data-toggle="collapse"]', function(e) {
        return _this.onCollapsibleClick(e);
      });
    }

    CollapsibleBehavior.prototype.onCollapsibleClick = function(e) {
      return e.preventDefault();
    };

    return CollapsibleBehavior;

  })();

  $(function() {
    return new CollapsibleBehavior();
  });

}).call(this);
