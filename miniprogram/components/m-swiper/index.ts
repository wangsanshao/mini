Component({
  data: {
    swiperList: [] as any[]
  },
  properties: {},
  methods: {},
  lifetimes: {
    created() {
      setTimeout(() => {
        this.setData({
          swiperList: [
            {
              id: '1',
              src: 'https://t7.baidu.com/it/u=2235283139,2108773862&fm=193&f=GIF'
            },
            {
              id: '2',
              src: 'https://t7.baidu.com/it/u=2369985169,1283503597&fm=193&f=GIF'
            },
            {
              id: '3',
              src: 'https://t7.baidu.com/it/u=2159461460,31424906&fm=193&f=GIF'
            },
            {
              id: '4',
              src: 'https://t7.baidu.com/it/u=3881051708,1318727812&fm=193&f=GIF'
            },
            {
              id: '5',
              src: 'https://t7.baidu.com/it/u=340402538,2113214724&fm=193&f=GIF'
            },
          ]
        })
      }, 0)
      console.log('sss', this.data.swiperList)
    }
  }
})