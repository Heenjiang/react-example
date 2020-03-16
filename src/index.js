import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
    return (
        <button 
            className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: [{
              squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber : 0,
          };
        }
    
    handleClick (i){
        //根据当前的stepNumber复制history数组（因为由回溯功能，相当于如果用户点了回到之前的一步，然后就会
        //改变stepNbumber,从而导致history也会相对更新）
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        //从history里复制出当前棋局数组的状态
        const current =  history[history.length - 1]
        //复制当前棋局状态
        const squares = current.squares.slice();
        //当某个玩家已经胜出时，或者这个square已经被点击过了，就什么也不做
        if (calculateWinner(squares) || squares[i]){
            return;
        }
        //根据双方轮换顺序设置当前点击方块的符号
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        //更新game的属性
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }   

    jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
      }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        //step:是一个数组对象，move是数组的下标
        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            return (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });
        let status;
        if(winner){
            status = 'Winner is ' + winner;
        }
        else{
            status = 'Next player is: ' + (this.state.xIsNext ? 'X' : 'O')
        }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  

  function calculateWinner(squares){
      //tic-tac-toe一共有八种赢的直线关系
      const winLines =  [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for(let i = 0; i < winLines.length; i++){
        const [a, b, c] =  winLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
      }
      return null;
  }