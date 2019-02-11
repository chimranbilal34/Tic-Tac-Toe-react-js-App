import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: "X",
      winner : null
    }
  }

  checkwinner() {
    let winnerLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ]

    for (let index = 0; index < winnerLines.length; index++) {
      const [a, b, c] = winnerLines[index]

      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        let winner=this.state.player
        alert('You won :' +winner)
        this.setState({
          winner:this.state.player
        })
      }
    }
  }

  handleclick(index) {
    let newboard = this.state.board;
    if (this.state.board[index] === null && !this.state.winner) {
      newboard[index] = this.state.player

      let newplayer = this.state.player === "X" ? "0" : "X"
      this.setState({
        board: newboard,
        player: newplayer
      })
    }

    console.log(index)
    this.checkwinner()
  }
  render() {
    const Box = this.state.board.map((box, index) => <div className="box" key={index} onClick={(e) => this.handleclick(index)}>{box}</div>)
    return (
      <div className="container">
        <h1>kkkkkkkkkkkkkk</h1>
        <div className="board">
          {Box}
        </div>
      </div>

    );
  }
}

export default App;
