import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn     
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  //此语法确认handleClick 中的‘this’已被绑定
  //注意：这是 *实验性*语法
  handleClick = () =>{
    console.log('this is', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}

class LoggingButton2 extends React.Component {
  handleClick() {
    console.log('this is:', this)
  }

  render() {
    return (
       //此语法确认handleClick 中的‘this’已被绑定:不建议！！
      <button onClick={(e) => this.handleClick(e)}>
        Click Me
      </button>
    );
  }
}

ReactDOM.render(
  <div>
    <Toggle />
    <LoggingButton />
    <LoggingButton2 />
  </div>,
  document.getElementById('root')
);

//向事件处理函数传递参数：
//<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
//<button onClick={this.deleteRow(this, id)}>Delete Row</button>

