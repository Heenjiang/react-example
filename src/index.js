import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './index.css';


// class Toggle extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn     
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// class LoggingButton extends React.Component {
//   //此语法确认handleClick 中的‘this’已被绑定
//   //注意：这是 *实验性*语法
//   handleClick = () =>{
//     console.log('this is', this);
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click Me
//       </button>
//     );
//   }
// }

// class LoggingButton2 extends React.Component {
//   handleClick() {
//     console.log('this is:', this)
//   }

//   render() {
//     return (
//        //此语法确认handleClick 中的‘this’已被绑定:不建议！！
//       <button onClick={(e) => this.handleClick(e)}>
//         Click Me
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <div>
//     <Toggle />
//     <LoggingButton />
//     <LoggingButton2 />
//   </div>,
//   document.getElementById('root')
// );

//向事件处理函数传递参数：
//<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
//<button onClick={this.deleteRow(this, id)}>Delete Row</button>

//条件渲染
// function UserGreeting(props) { 
//   return (
//     <h1>Welcome back.</h1>
//   );
// }

// function GuestGreeting(props) { 
//   return (
//     <h1>Please sign up.</h1>
//   );
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return (
//       <UserGreeting />
//     );
//   }
//   return (
//     <GuestGreeting />
//   );
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login Out
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.hanleLoginClick = this.hanleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   hanleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if(isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
//     }else{
//       button = <LoginButton onClick={this.hanleLoginClick}></LoginButton>
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

//通过&&运算符
function Mailbox(props) {
  const unreadMessage = props.unreadMessage;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessage.length > 0 && 
      <h2>
        You have {unreadMessage.length} unread messages.
      </h2>}
    </div>
  );
}

const messages = ['Reacr', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessage={messages} />,
  document.getElementById('root')
);

//通过codition ? true : false
// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//     </div>
//   );
// }
//OR
// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }