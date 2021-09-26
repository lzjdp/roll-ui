import Button from './components/Button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import Input from './components/Input'
import Card from './components/Card'
// import { library } from '@fortawesome/fontawesome-svg-core'; // 导入图标仓库
// import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标
import Icon from './components/Icon'
// library.add(fas) // 把图标添加进仓库

function App() {
  return (
    <div className="App">
      {/* <Button type="link" onClick={() => alert('123')}>导航</Button>
      <Button type="primary" onClick={() => alert('123')}>按钮</Button>
      <Button type="danger" onClick={() => alert('123')}>按钮</Button>
      <Button type="primary" size="lg" onClick={() => alert('123')}>按钮</Button>
      <Button type="primary" size="sm" onClick={() => alert('123')}>按钮</Button> */}
      <Button disabled type="primary" size="sm" onClick={() => alert('123')}>按钮</Button>
      <Menu>
        <MenuItem>a</MenuItem>
        <MenuItem>b</MenuItem>
        <MenuItem>c</MenuItem>
      </Menu>
      <Input type="text" placeholder="请输入用户名" />
      <Card title="卡片">内容内容</Card>
      {/* <Icon type="arrow-down"></Icon> */}
      <Icon icon="arrow-down" size="lg" />
      <Icon icon="arrow-down" size="sm" />
      <Icon icon="arrow-down" size="sm" theme="danger" />
    </div>
  );
}

export default App
