import 'ion-rangeslider'

export default {
  twoWay: true,
  params: ['options'],
  bind: function () {
    var _this = this
    var $el = $(this.el)
    var name = $el.attr('name')
    var opts = {
      type: this.params.options.type,
      min: this.params.options.min,
      max: this.params.options.max,
      from: this.params.options.from,
      to: this.params.options.to,
      grid: this.params.options.grid,
      step: this.params.options.step,
      min_interval: this.params.options.minInterval,
      forced_edges: true,
      onFinish: function (data) {
        _this.vm.$set('from', data.from)
        _this.vm.$set('to', data.to)
      }
    }
    var $slider = $el.ionRangeSlider(opts)
    var $sliderInstance = $el.data('ionRangeSlider')
    _this.vm.$watch('from', function (val) {
      $sliderInstance.update({
        from: parseInt(val)
      })
    })
    _this.vm.$watch('to', function (val) {
      $sliderInstance.update({
        to: parseInt(val)
      })
    })
  },
  update: function (newVal, oldVal) {},
  unbind: function () {}
}
