export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  tabBar: {
    custom: true,
    color: '#8B8B8B',
    selectedColor: '#D12B23',
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/img/tabBar1.png",
        selectedIconPath: "./assets/img/tabBar1_active.png",
      },
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/img/tabBar4.png",
        selectedIconPath: "./assets/img/tabBar4_active.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
