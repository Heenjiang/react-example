import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) => 
//       <li key={post.id}>
//         {post.title}
//       </li>)}
//     </ul>
//   );

//   const content = props.posts.map((post) => 
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//       <p>{post.content}</p>
//       </div>
//   );

//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );

/**
 * Form 
 */

//  class NameForm extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {value: ''};

//      this.hanleChange = this.hanleChange.bind(this);
//      this.handleSubmit = this.handleSubmit.bind(this);
//    }

//    hanleChange(event){
//     this.setState({value: event.target.value});
//    }

//    handleSubmit(event) {
//      alert('Submit name: ' + this.state.value);
//      event.preventDefault();
//    }

//    render() {
//      return (
//        <form onSubmit={this.handleSubmit}>
//          <label>
//            name:
//            <input type="text" value={this.state.value} onChange={this.hanleChange} />
//          </label>
//          <input type="submit" value="submit" />
//        </form>
//      );

//    }
//  }

//  ReactDOM.render(
//   <NameForm  />,
//   document.getElementById('root')
//   );

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.name === 'isGoing' ? target.checked : target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value
//     });
//   }
  
//   render() {
//     return (
//     <form>
//         <label>
//         Participate:
//         <input 
//           name="isGoing"
//           type="checkbox"
//           checked={this.state.isGoing}
//           onChange={this.handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Number of guests:
//         <input 
//           name="numberOfGuests"
//           type="number"
//           value={this.state.numberOfGuests}
//           onChange={this.handleInputChange}
//         />
//       </label>
//     </form>
//     );
//   }
// }

//  ReactDOM.render(
//   <Reservation  />,
//   document.getElementById('root')
//   );

ReactDOM.render(<input value="hi" />, document.getElementById('root'));

setTimeout(function() {
  ReactDOM.render(<input value={null} />, document.getElementById('root'));
}, 1000);