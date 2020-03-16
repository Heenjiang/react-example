import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// function formatName(user){
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName : 'Harper',
//   lastName : 'Perez'
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
  

// function tick(){
//   const element = (
//     <div>
//       <h1>Hello, World!</h1>
//       <h1>It is {new Date().toLocaleTimeString()}.</h1>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000)

// function Welcom(props){
//   return <h1>Hello, {props.name}</h1>
// }

// const element = <Welcom name='Sara' />

// ReactDOM.render(
//   element, 
//   document.getElementById('root')
// );

// function Welcom(props){
// return <h1>Hello, {props.name}</h1>
// }

// function App() {
//   return (
//     <div>
//       <Welcom name='Sara' />
//       <Welcom name='Nicole'/>
//       <Welcom name='Hoen' />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function formatDate(date){
  return date.toLocaleDateString();
}

// function Comment(props) {
//   return(
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div calssName="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-date">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

//改写comment组件：
function Avatar(props) {
  return(
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return(
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return(
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(comment.date)}
      </div>
    </div>
  );
}

const comment = {
  date : new Date(),
  text : 'I hope you enjoy learning React!',
  author : {
    name : "Hoen",
    avatarUrl : 'https://placekitten.com/g/64/64'
  },
};

ReactDOM.render(
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);