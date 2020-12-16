import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
      crest: 0
    }
    this.WinnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  Winner = () => {
    let a = (this.state.crest % 2 === 0) ? 'X' : '0';
    for (let i = 0; i < 8; i++) {
      let line = this.WinnerLine[i]
      if (this.state.square[line[0]] === a
        && this.state.square[line[1]] === a
        && this.state.square[line[2]] === a
      ) {
        alert("player " + a + " win")
      }
    }
  }
  clickHandler = event => {
    console.log(1)
    let data = event.target.getAttribute('data');
    let curSquear = this.state.square;
    console.log(curSquear);
    if (curSquear[data] == null) {
      curSquear[data] = (this.state.crest % 2 === 0) ? 'X' : '0'
      this.setState({ crest: this.state.crest + 1 })
      this.setState({ square: curSquear })
    }
    else {
      alert("Тут занято")
    }
    this.Winner();
  }
  render() {
    return (
      <div className="tic">
        <div className="tac">
          <div className='tic_box' onClick={this.clickHandler} data="0">{this.state.square[0]}</div>
          <div className='tic_box' onClick={this.clickHandler} data="1" >{this.state.square[1]}</div>
          <div className='tic_box' onClick={this.clickHandler} data="2">{this.state.square[2]}</div>
          <div className='tic_box' onClick={this.clickHandler} data="3">{this.state.square[3]}</div>
          <div className='tic_box' onClick={this.clickHandler} data="4">{this.state.square[4]}</div>
          <div className='tic_box' onClick={this.clickHandler} data="5">{this.state.square[5]}</div>
          <div className='tic_box' onClick={this.clickHandler} data="6">{this.state.square[6]}</div>
          <div className='tic_box' onClick={this.clickHandler} data="7">{this.state.square[7]}</div>
          <div className='tic_box' onClick={this.clickHandler} data="8">{this.state.square[8]}</div>
        </div>
      </div>
    )
  }
}

export default App;
