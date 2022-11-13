import { Component, createElement } from 'react'
import './app.less'
import Taro from '@tarojs/taro'
import { PageMeta, NavigationBar } from "tarojs-plugin-platform-miniprogram/dist/components";

interface IProps {}
interface IState {
  pageStyle?: string;
}
class App extends Component<IProps, IState> {
  constructor (props: any) {
    super(props);
    this.state = {
      pageStyle: '',
    };
  }
  componentDidMount () {
    // Taro.setBackgroundColor
    if (process.env.TARO_ENV === 'h5') {
      return setTimeout(() => {
        document.body.style.setProperty('--main-bg-color', 'red');
      }, 2000);
    }
    setTimeout(() => {
      this.setState({ pageStyle: '--main-bg-color: red;' })
    }, 2000);
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    
    if (process.env.TARO_ENV === 'h5') {
      return this.props.children;
    }
    
    return (
      <PageMeta
        pageStyle={this.state.pageStyle}
      >{this.props.children}</PageMeta>
    )
  }
}

export default App
