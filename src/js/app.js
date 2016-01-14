import Vue from 'vue'
import CheckBlock from './components/check-block/check-block'
import MultiSelect from './components/multi-select/multi-select'

Vue.config.delimiters = ['${', '}']

var app = new Vue({
  el: '#app',
  ready: function () {
    this.fetchData()
  },
  data: {
    propertyTypes: [],
    counties: [
      {
        label: 'Boulder',
        value: 'boulder',
        selected: true
      },
      {
        label: 'Douglas',
        value: 'douglas',
        selected: true
      },
      {
        label: 'Asdasaasd',
        value: 'sdfsdf',
        selected: false
      },
      {
        label: 'ewrtertert',
        value: 'ewrtertert',
        selected: false
      },
      {
        label: 'yuiyui',
        value: 'yuiyui',
        selected: false
      }
    ]
  },
  computed: {
    selectedCounties: function () {
      return this.counties.filter(function (county) {
        return county.selected
      })
    },
    unSelectedCounties: function () {
      return this.counties.filter(function (county) {
        return !county.selected
      })
    }
  },
  methods: {
    addCounty: function (countyValue) {
      this.counties = this.counties.map(function (c) {
        if (c.value === countyValue) {
          c.selected = true
        }
        return c
      })
    },
    removeCounty: function (county) {
      county.selected = false
    },
    fetchData: function () {
      // simulate ajax request
      setTimeout(function () {
        this.propertyTypes = [
          {
            label: 'Single Family',
            value: 'single-family',
            active: true
          },
          {
            label: 'Townhouse',
            value: 'townhouse',
            active: false
          },
          {
            label: 'Condo',
            value: 'condo',
            active: false
          }
        ]
      }.bind(this), 1)
    }
  },
  components: {
    'check-block': CheckBlock,
    'multi-select': MultiSelect
  }
})
