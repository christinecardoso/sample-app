class CollapsibleBehavior
  constructor: ->
    $(document).on 'click', 'a[data-toggle="collapse"]', (e) => @onCollapsibleClick(e)

  onCollapsibleClick: (e) ->
    e.preventDefault()

$ ->
  new CollapsibleBehavior()
