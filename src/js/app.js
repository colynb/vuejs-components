import Vue from 'vue'

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
  }
})
