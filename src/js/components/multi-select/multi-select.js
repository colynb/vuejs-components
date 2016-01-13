import Vue from 'vue'

export default Vue.extend({
  template: require('raw!./multi-select.html'),
  props: ['selected', 'unselected', 'selectLabel'],
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
    }
  },
  methods: {
    removeItem: function (item) {
      this.$dispatch('item-removed', item)
    }
  }
})
