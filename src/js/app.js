import Vue from 'vue'
import CheckBlock from './components/check-block/check-block'
import SingleSelect from './components/single-select/single-select'
import MultiSelect from './components/multi-select/multi-select'
import RangeSlider from './components/range-slider/range-slider'

Vue.config.delimiters = ['${', '}']

var app = new Vue({
  el: '#app',
  ready: function () {
    this.fetchData()
  },
  timeOut: null,
  data: {
    filtersChanged: false,
    filters: {
      favoriteFoods: [
        {
          label: 'Pizza',
          value: 'pizza',
          selected: false
        },
        {
          label: 'Spaghetti',
          value: 'spaghetti',
          selected: false
        },
        {
          label: 'Sushi',
          value: 'suhi',
          selected: false
        }
      ],
      propertyTypes: [],
      states: [],
      propertyOfferPrice: {
        from: 20,
        to: 50
      },
      sliderTwo: {
        from: 200,
        to: 500
      }
    }
  },
  methods: {
    filtersHaveChanged: function () {
      this.filtersChanged = true
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => this.filtersChanged = false, 2000)
    },
    handleSliderTwoChange: function (sliderTwo) {
      this.filters.sliderTwo = Object.assign(this.filters.sliderTwo, sliderTwo)
    },
    handlePropertyOfferPriceChange: function (propertyOfferPrice) {
      this.filters.propertyOfferPrice = Object.assign(this.filters.propertyOfferPrice, propertyOfferPrice)
    },
    addFavoriteFood: function (foodValue) {
      this.filters.favoriteFoods = this.filters.favoriteFoods.map(function (c) {
        if (c.value === foodValue) {
          c.selected = true
        }
        return c
      })
    },
    removeFavoriteFood: function (food) {
      food.selected = false
    },
    addState: function (stateValue) {
      this.filters.states = this.filters.states.map(function (c) {
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
        this.filters.propertyTypes = [
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

        this.filters.states = [{'label': 'Indiana', 'value': 'IN', 'selected': false},
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

        this.filters.sliderTwo.from = 300
        this.filters.sliderTwo.to = 600

      }.bind(this), 2000)
    }
  },
  watch: {
    'filters': {
      handler: function () {
        this.filtersHaveChanged()
      },
      deep: true
    }
  },
  components: {SingleSelect,CheckBlock,MultiSelect,RangeSlider}
})
