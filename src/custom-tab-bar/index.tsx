
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import c from './index.module.less';
import { useState, useEffect } from 'react';
import { tabConfigs } from './json';

const CustomTabBar = () => {
  const [tabs, setTabs] = useState<any[]>([]);
  const router = Taro.useRouter();
  const pathname = router.path;
  console.log('router', router.path)

  useEffect(() => {
    console.log(Taro.getCurrentPages())
    setTimeout(() => {
      setTabs(tabConfigs.navList);
    }, 2000);
  }, []);

  const onTabChange = (item: any) => () => {
    Taro.switchTab({
      url: '/' + item.pathname,
    })
  }
  return (
    <View className={c.wrap}>
      {
        tabs.map((item) => (
          <View
            key={item.id}
            onClick={onTabChange({
              pathname: item.linkConfig.href
            })}
            className={`${c.tabItem} ${pathname === item.linkConfig.href ? c.tabItemActive : ''}`}
          >
            <View><Image className={c.tagImg} src={item.defaultImage}/></View>
            <Text>{item.title}</Text>
          </View>
        ))
      }
    </View>
  )
}

CustomTabBar.options = {
  addGlobalClass: true
}
export default CustomTabBar;
