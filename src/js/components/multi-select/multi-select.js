import Vue from 'vue'
import $ from 'jquery'
import 'typeahead.js'

var itemLabelMatcher = function (items) {
  return function findMatches (q, cb) {
    var matches, substringRegex

    // an array that will be populated with substring matches
    matches = []

    // regex used to determine if a string contains the substring `q`
    substringRegex = new RegExp(q, 'i')

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(items, function (i, item) {
      if (substringRegex.test(item.label)) {
        matches.push(item.label)
      }
    })

    cb(matches)
  }
}

export default Vue.extend({
  template: require('raw!./multi-select.html'),
  props: ['selected', 'unselected', 'selectLabel'],
  ready: function () {
    var $typeahead = $(this.$el).find('.typeahead')
    $typeahead.typeahead(null, {
      name: 'items',
      limit: 10,
      source: itemLabelMatcher(this.unselected)
    })
  },
  data: function () {
    return {
      selectedItem: 'select'
    }
  },
  watch: {
    selectedItem: function (item) {
      if (item) {
        this.$dispatch('item-added', item)
        this.selectedItem = 'select'
      }
    },
    unselected: function (unselected) {
      var $typeahead = $(this.$el).find('.typeahead')
      $typeahead.typeahead('destroy')
      $typeahead.typeahead(null, {
        name: 'items',
        limit: 10,
        source: itemLabelMatcher(unselected)
      })
    }
  },
  methods: {
    removeItem: function (item) {
      this.$dispatch('item-removed', item)
    }
  }
})
