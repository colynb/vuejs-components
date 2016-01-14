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
    states: []
  },
  methods: {
    addState: function (stateValue) {
      this.states = this.states.map(function (c) {
        if (c.value === stateValue) {
          c.selected = true
        }
        return c
      })
    },
    removeState: function (state) {
      state.selected = false
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

        this.states = [{'label': 'Indiana', 'value': 'IN', 'selected': false},
          {'label': 'Alabama', 'value': 'AL', 'selected': false},
          {'label': 'California', 'value': 'CA', 'selected': false},
          {'label': 'Colorado', 'value': 'CO', 'selected': false},
          {'label': 'Florida', 'value': 'FL', 'selected': false},
          {'label': 'Georgia', 'value': 'GA', 'selected': false},
          {'label': 'Kentucky', 'value': 'KY', 'selected': false},
          {'label': 'Massachusetts', 'value': 'MA', 'selected': false},
          {'label': 'Michigan', 'value': 'MI', 'selected': false},
          {'label': 'Missouri', 'value': 'MO', 'selected': false},
          {'label': 'Nevada', 'value': 'NV', 'selected': false},
          {'label': 'North Carolina', 'value': 'NC', 'selected': false},
          {'label': 'Ohio', 'value': 'OH', 'selected': false},
          {'label': 'Pennsylvania', 'value': 'PA', 'selected': false},
          {'label': 'Tennessee', 'value': 'TN', 'selected': false},
          {'label': 'Texas', 'value': 'TX', 'selected': false},
          {'label': 'Washington', 'value': 'WA', 'selected': false},
          {'label': 'Wisconsin', 'value': 'WI', 'selected': false}]
      }.bind(this), 2000)
    }
  },
  components: {
    'check-block': CheckBlock,
    'multi-select': MultiSelect
  }
})
