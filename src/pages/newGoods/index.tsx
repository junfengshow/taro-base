import { useState } from "react";
import { View } from '@tarojs/components';

const Details = () => {
  const [age, setAge] = useState(1);
  return (
    <View onClick={() => setAge(age + 1)}>
      new goods: {age}
    </View>
  )
}
export default Details;