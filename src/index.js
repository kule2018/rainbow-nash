import Vue from 'vue'
import jsx from './utils/jsx'
import Button from '../packages/button/button'
import ButtonGroup from '../packages/button-group/button-group'
import Icon from '../packages/icon/icon'
import Alert from '../packages/alert/alert'
import App from '../packages/app/app'
import Container from '../packages/container/container'
import Aside from '../packages/container/aside'
import Header from '../packages/container/header'
import Main from '../packages/container/main'
import Footer from '../packages/container/footer' 
import Breadcrumb from '../packages/breadcrumb/breadcrumb' 
import BreadcrumbItem from '../packages/breadcrumb/breadcrumb-item' 
import Card from '../packages/card/card' 
import Checkbox from '../packages/checkbox/checkbox' 
import CheckboxGroup from '../packages/checkbox/checkbox-group' 
import Datepicker from '../packages/datepicker/datepicker' 
import Input from '../packages/input/input' 
import Dropdown from '../packages/dropdown/dropdown' 
import DropdownItem from '../packages/dropdown/dropdown-item' 
import Row from '../packages/grid/row'
import Col from '../packages/grid/col' 
import Loading from '../packages/loading/loading' 
import Menu from '../packages/menu/menu' 
import MenuGroup from '../packages/menu/menu-group' 
import MenuItem from '../packages/menu/menu-item' 
import SubMenu from '../packages/menu/sub-menu' 
import Page from '../packages/page/page' 
import Select from '../packages/select/select' 
import SelectOption from '../packages/select/select-option' 
import Tag from '../packages/tag/tag' 
import Progress from '../packages/progress/progress' 
import Radio from '../packages/radio/radio' 
import RadioGroup from '../packages/radio/radio-group' 
import Table from '../packages/table/table' 
import TableColumn from '../packages/table/table-column'
import Tabs from '../packages/tabs/tabs'
import TabPane from '../packages/tabs/tab-pane' 
import Timeline from '../packages/timeline/timeline' 
import TimelineItem from '../packages/timeline/timeline-item' 
import Timepicker from '../packages/timepicker/timepicker' 
import Tooltip from '../packages/tooltip/tooltip' 
import Tree from '../packages/tree/tree' 
import Upload from '../packages/upload/upload' 
import Form from '../packages/form/form' 
import FormItem from '../packages/form/form-item' 
import Message from '../packages/message/message' 
import Modal from '../packages/modal/modal'

var components = [
  Button,
  ButtonGroup,
  Icon,
  Alert,
  App,
  Container,
  Aside,
  Header,
  Main,
  Footer,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  Input,
  Dropdown,
  DropdownItem,
  Row,
  Col,
  Loading,
  Menu,
  MenuGroup,
  MenuItem,
  SubMenu,
  Page,
  Select,
  SelectOption,
  Tag,
  Progress,
  Radio,
  RadioGroup,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Timeline,
  TimelineItem,
  Timepicker,
  Tooltip,
  Tree,
  Upload,
  Form,
  FormItem,
  Message,
  Modal,
]

// auto install
var install = () => {
  components.forEach(component => {
    Vue.component(component.name, component)
  }) 

  Vue.prototype.$jsx = jsx
}
install()


export default {
  version: '0.0.1',
}
