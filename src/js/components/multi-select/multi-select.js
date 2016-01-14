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
        matches.push(item)
      }
    })

    cb(matches)
  }
}

export default Vue.extend({
  template: require('raw!./multi-select.html'),
  props: ['options', 'selectLabel'],
  ready: function () {
    this.initTypeahead()
  },
  watch: {
    unselected: function (unselected) {
      this.initTypeahead()
    }
  },
  computed: {
    selected: function () {
      return this.options.filter(function (option) {
        return option.selected
      })
    },
    unselected: function () {
      return this.options.filter(function (option) {
        return !option.selected
      })
    }
  },
  methods: {
    initTypeahead: function () {
      this.$typeahead = $(this.$el).find('.typeahead')
      var $typeahead = this.$typeahead
      $typeahead.typeahead('destroy')
      $typeahead.unbind('typeahead:select')
      var options = {
        minLength: 0,
        highlight: true
      }
      $typeahead.typeahead(options, {
        name: 'items',
        display: 'label',
        limit: 10,
        source: itemLabelMatcher(this.unselected)
      })

      $typeahead.on('typeahead:select', function (e, item) {
        this.$dispatch('item-added', item.value)
        $typeahead.typeahead('val', '')
      }.bind(this))
    },
    removeItem: function (item) {
      this.$dispatch('item-removed', item)
      this.$typeahead.typeahead('val', '')
    }
  }
})
