import React from 'react';
import { Button } from 'antd';
import './App.scss';

class App extends React.Component {
  constructor(...props) {
    super(...props)
    this.state = {}
  }


  render() {
    return (
      <div className="App">
        <div>
          <Button type="primary" ghost={true}>按钮</Button>
        </div>
      </div>
    )
  }
}

export default App;
