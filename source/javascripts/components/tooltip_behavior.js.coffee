class TooltipBehavior
  constructor: ->
    if $('[data-toggle="tooltip"]').hasClass("module-title")
      if $('[data-toggle="tooltip"]').data("signout-flag") is true
        $('[data-toggle="tooltip"]').tooltip({placement: 'right', html: 'true', trigger: 'manual'}).tooltip('show')
    else
      $('[data-toggle="tooltip"]').tooltip()

$ ->
  if $('[data-toggle="tooltip"]').length
    new TooltipBehavior()
