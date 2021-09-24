import Button from './components/Button'

function App() {
  return (
    <div className="App">
      {/* <Button type="link" onClick={() => alert('123')}>导航</Button>
      <Button type="primary" onClick={() => alert('123')}>按钮</Button>
      <Button type="danger" onClick={() => alert('123')}>按钮</Button>
      <Button type="primary" size="lg" onClick={() => alert('123')}>按钮</Button>
      <Button type="primary" size="sm" onClick={() => alert('123')}>按钮</Button> */}
      <Button disabled type="primary" size="sm" onClick={() => alert('123')}>按钮</Button>
    </div>
  );
}

export default App
