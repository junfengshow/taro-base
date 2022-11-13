export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/index',
    'pages/details/index',
    'pages/newGoods/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
		backgroundColor: '#ffffff',
		borderStyle: 'white',
		selectedColor: '#b4282d',
		color: '#333',
		custom: true,
		list: [
			{
				pagePath: 'pages/index/index',
				iconPath: 'assets/icon_chat.png',
				selectedIconPath: 'assets/icon_chat_active.png',
				text: '首页',
			},
      {
				pagePath: 'pages/home/index',
				iconPath: 'assets/icon_live.png',
				selectedIconPath: 'assets/icon_live_active.png',
				text: '首页',
			},
			{
				pagePath: 'pages/newGoods/index',
				text: '首页',
			},
    ]
  }
});
