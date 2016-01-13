/* global $ */

export default {
  twoWay: true,
  bind: function () {
    var $el = $(this.el)
    var name = $el.attr('name')
    $el.val(this.vm.filterParams[name])

    $el.chosen({
      width: '99%',
      max_selected_options: $el.data('max-options') || null
    })

    $el.on('change', function (e) {
      var $target = $(e.target)
      var value = $target.val() || [].map(s => s.toUpperCase())
      this.set(value)
      this.vm.handleFilterChange(e)
    }.bind(this))
  },
  update: function () {
    $(this.el).trigger('chosen:updated')
  },
  unbind: function () {
    $(this.el).off('change')
  }
}
