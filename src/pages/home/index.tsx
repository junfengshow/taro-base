/**
 * home
 */
import { useState } from "react";
import { View, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { TrapInput } from '@fdt/taro-trap';

const Home = () => {
  const [age, setAge] = useState(1);
  return (
    <View>
      <TrapInput />
      <View onClick={() => setAge(age + 1)}>
        ddss: {age}
        
      </View>
      <View>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/details/index'
            })
          }}
        >跳转</Button>
      </View>
    </View>
  )
}
export default Home;