
import { useReducer, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components'
import { PageMeta, NavigationBar } from "tarojs-plugin-platform-miniprogram/dist/components";
import c from './index.module.less';
import Taro from '@tarojs/taro';
import flycart from '../../utils/flycart';
import AtCalendar from '../../components/calendar';

const initialState = {
  backgroundColor: '#666666',
  title: '开心一刻',

  navTitleColor: '#ffffff',
  navBgColor: '#112233',
  duration: '0',
  bus_display: 'none',
  // pageStyle: '--main-bg-color: red;'
};

const Index = () => {
  const [state, setState] = useReducer(
    (state: any, action: any) => Object.assign({}, state, action),
    initialState
  )

  useEffect(() => {

    setState({ duration: '0' })
    setTimeout(() => {
      // Taro.setNavigationStyle()
      setState({ 
        navBgColor: '#ffffff',
        navTitleColor: '#000000',
        duration: '1000'
      });
    }, 1000)
  }, []);

  const onBtnClick = (e) => {
    // console.log('')
    const query = Taro.createSelectorQuery();
    query.select('#box');
    query.select('#box').boundingClientRect();
    query.exec(function(res){
      const top = res[0].top;
      const start = e.detail;
      let h = 50;
      if (start.y <= 70) {
        h = 10;
      }
      const travelList = flycart([start.x, start.y], [80, top], 36, h);
      startAnimation(travelList);
    });
  }
  const startAnimation = (travelList: any[]) => {
    if (travelList.length === 0) {
      setState({
        bus_x: 0,  /* left 值 */
        bus_y: 0,  /* top值 */
        bus_display: 'none'
      });
      return;
    }
    const currentPoint = travelList.shift()
    setState({
      bus_x: currentPoint[0],  /* left 值 */
      bus_y: currentPoint[1],  /* top值 */
      bus_display: 'block'
    });
    requestAnimationFrame(() => {
      startAnimation(travelList);
    });
  }

  return (
    <>
      {/* <PageMeta
        backgroundColor={state.backgroundColor}
        pageStyle={state.pageStyle}
      >
        <NavigationBar 
          title={state.title}
          frontColor={state.navTitleColor}
          backgroundColor={state.navBgColor}
          colorAnimationDuration={state.duration}
        />
      </PageMeta>  */}
      <View className={c.wrap}>
        <View className={c.desc}>
          <Text>Hello world!</Text>
        </View>
        <AtCalendar />
        <View className={c.btnWrap}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'flex-start'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'center'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'flex-start'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'center'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'flex-start'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'center'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'flex-start'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'center'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'flex-start'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'center'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'flex-start'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.btnWrap} style={{justifyContent: 'center'}}>
          <Button 
            onClick={onBtnClick}
            className={c.btn}
            id='btn'
          >点击</Button>
        </View>
        <View className={c.bot}></View>
      </View>
      <View 
        id='boll' 
        className={c.boll}
        style={{
          top: state.bus_y,
          left: state.bus_x,
          display: state.bus_display
          // transform: `scale(${state.scale})`
        }}
      />
      <View 
        id='box' 
        className={c.box}
      >

      </View>
    </>
  )
}
export default Index;
