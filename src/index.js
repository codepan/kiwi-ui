import './styles/color.scss' // 用作换肤时背景色，边框色，文字色的基础class，使用sass-resources-loader引入的话，会重复加载多次，此方式引入只会加载一次，故在此引入

/**** 基础 ****/
import Button from '../components/button'
import ButtonGroup from '../components/button-group'
import PaletteButton from '../components/palette-button'
import Icon from '../components/icon'

/**** 布局 ****/
import Layout from '../components/layout'
import Bar from '../components/bar'
import Header from '../components/header'
import Subheader from '../components/subheader'
import Main from '../components/main'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Grid from '../components/grid'
import GridItem from '../components/grid-item'
import List from '../components/list'
import Item from '../components/item'

/**** 表单 ****/
import Input from '../components/input'
import InputNumber from '../components/input-number'
import Countdown from '../components/countdown'
import Rating from '../components/rating'
import Badge from '../components/badge'
import Radio from '../components/radio'
import RadioGroup from '../components/radio-group'
import Checkbox from '../components/checkbox'
import CheckboxGroup from '../components/checkbox-group'
import Switch from '../components/switch'
import Form from '../components/form'
import FormItem from '../components/form-item'
import FormGroup from '../components/form-group'
import Range from '../components/range'
/**** 数据 ****/
import Table from '../components/table'
import TableColumn from '../components/table-column'
import Loadmore from '../components/loadmore'
import Picker from '../components/picker'
import AreaPicker from '../components/area-picker'
import DatetimePicker from '../components/datetime-picker'
import Uploader from '../components/uploader'


/**** 导航 ****/
import Tabbar from '../components/tabbar'
import TabbarItem from '../components/tabbar-item'
import Tabs from '../components/tabs'
import Tab from '../components/tab'

import IndexList from '../components/index-list'
import IndexGroup from '../components/index-group'
import IndexItem from '../components/index-item'

/**** 视图 ****/
import Img from '../components/img'
import Previewer from '../components/previewer'
import Carousel from '../components/carousel'
import CarouselItem from '../components/carousel-item'

import Route from '../components/route'

import Timeline from '../components/timeline'
import TimelineItem from '../components/timeline-item'

import Fullpage from '../components/fullpage'
import FullpageItem from '../components/fullpage-item'

/**** 提示 ****/
import Mask from '../components/mask'

import Dialog from '../components/dialog'
import Toast from '../components/toast'
import Spinner from '../components/spinner'
import Loading from '../components/loading'
import Popup from '../components/popup'
import Actionsheet from '../components/actionsheet'

import './icons'

const KiwiUIComponents = {
  Button,
  ButtonGroup,
  Icon,
  Layout,
  Header,
  Subheader,
  Main,
  Footer,
  Bar,
  Nav,
  Grid,
  GridItem,
  PaletteButton,
  Img,
  Previewer,
  Carousel,
  CarouselItem,
  Fullpage,
  FullpageItem,
  Loadmore,
  Route,
  Timeline,
  TimelineItem,
  Tabbar,
  TabbarItem,
  Tabs,
  Tab,
  Table,
  TableColumn,
  Input,
  InputNumber,
  List,
  Item,
  Countdown,
  Rating,
  Badge,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormGroup,
  FormItem,
  Range,
  Switch,
  Popup,
  Actionsheet,
  Picker,
  AreaPicker,
  DatetimePicker,
  IndexList,
  IndexGroup,
  IndexItem,
  Spinner,
  Uploader,
  Dialog,
  Loading,
  Toast,
  Mask
}

import Gesture from '~src/directive/gesture'

const install = Vue => {
  Object.keys(KiwiUIComponents).forEach(key => {
    // 全局注册每一个组件，注意：组件中需要添加name属性，代表注册的组件名，当然也可以叫别的名字，不一定是name
    Vue.component(KiwiUIComponents[key].name, KiwiUIComponents[key])
  })

  Vue.use(Dialog)
  Vue.use(Loading)
  Vue.use(Toast)
  Vue.use(Mask)
  Vue.use(Gesture)
  Vue.use(Previewer)
}

// Vue是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 把 install方法添加到 KiwiUIComponents 中
export default {install, ...KiwiUIComponents}
