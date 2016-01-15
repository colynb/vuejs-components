import Vue from 'vue'
import IonSlider from './ion-slider'

export default Vue.extend({
  template: require('raw!./range-slider.html'),
  props: {
    from: null,
    to: null,
    min: null,
    max: null,
    step: null,
    grid: null,
    minInterval: {
      coerce: function (val) {
        return parseInt(val)
      }
    }
  },
  watch: {
    from: function (from) {
      if (from > this.to - this.minInterval) {
        this.from = parseInt(this.to) - this.minInterval
      }
    },
    to: function (to) {
      if (to < this.from + this.minInterval) {
        this.to = parseInt(this.from) + this.minInterval
      }
    }
  },
  computed: {
    options: function () {
      return {
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
      // this.$sliderInstance.update(opts)
      this.$dispatch('on-change', opts)
    }
  },
  directives: {
  IonSlider}
})
