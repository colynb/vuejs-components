import Vue from 'vue'
import CheckBlock from './components/check-block/check-block'

Vue.config.delimiters = ['${', '}']

var app = new Vue({
  el: '#app',
  data: {
    propertyTypes: [
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
  },
  components: {
    'check-block': CheckBlock
  }
})
