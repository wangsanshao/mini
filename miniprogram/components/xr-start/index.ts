Component({
  properties: {},
  data: {
    loaded: false,
  },
  methods: {
    handleReady: function ({detail}) {
      this.scene = detail.value;
    },
    handleTick: function({detail}) {
      this.setData({loaded: true});
    }
  }
})