import Vue from 'vue'
import IonSlider from './ion-slider'
var coerceInt = function (val) { return parseInt(val) }
export default Vue.extend({
  template: require('raw!./range-slider.html'),
  props: {
    type: { default: 'double'},
    from: { default: 0 },
    to: { default: 0, coerce: coerceInt },
    min: { default: 0, coerce: coerceInt },
    max: { default: 100, coerce: coerceInt },
    step: { default: 5, coerce: coerceInt },
    grid: { default: true, coerce: function (val) { return (val === true || val === 'true') } },
    minInterval: { default: 5, coerce: coerceInt }
  },
  watch: {
    from: function (from) {
      if (from > this.to - this.minInterval) {
        this.from = parseInt(this.to) - this.minInterval
      }
    },
    to: function (to) {
      var from = parseInt(this.from)
      if (to < from + this.minInterval) {
        this.to = from + this.minInterval
      }
    }
  },
  computed: {
    options: function () {
      return {
        type: this.type,
        from: this.from,
        to: this.to,
        min: this.min,
        max: this.max,
        step: this.step,
        grid: this.grid,
        minInterval: this.minInterval
      }
    }
  },
  methods: {
    onChange: function (e) {
      var type = e.target.attributes['data-type'].value
      var value = e.target.value
      var opts = {}
      opts[type] = value
      this.$dispatch('changed', opts)
    }
  },
  directives: {IonSlider}
})
