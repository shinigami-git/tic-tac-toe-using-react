import React from "react";
import "./App.css";
import GridRow from "./components/GridRow/GridRow";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      playerTurn: "X",
      isGameActive: true,
      roundWon: false,
      roundDraw: false,
    };
  }

  winArray = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
  ];
  checkWinningCondition = () => {
    for (let i = 0; i < this.winArray.length; i++) {
      const winningCondition = this.winArray[i];
      // console.log(winningCondition + " " + i);

      let a = this.state.gameState[winningCondition[0].charAt(0)][
        winningCondition[0].charAt(1)
      ];
      let b = this.state.gameState[winningCondition[1].charAt(0)][
        winningCondition[1].charAt(1)
      ];
      let c = this.state.gameState[winningCondition[2].charAt(0)][
        winningCondition[2].charAt(1)
      ];
      // console.log(`${a} ${b} ${c} ${i}`);
      if (a === "" || b === "" || c === "") {
        continue;
      }

      if (a === b && b === c) {
        this.setState({
          isGameActive: false,
          roundWon: true,
        });
        return true;
        break;
      }
    }
  };

  handlePlayerClick = (rowIndex, colIndex) => {
    if(this.state.gameState[rowIndex][colIndex] === "" && this.state.isGameActive)
    {
    const copiedGameState = [...this.state.gameState];
    copiedGameState[rowIndex][colIndex] = this.state.playerTurn;
    this.setState({
      gameState: copiedGameState,
    });
    if(!this.checkWinningCondition())
     {console.log(this.state.isGameActive);
    // console.log(this.state.gameState.includes(""));

    this.state.isGameActive &&
      this.setState({
        playerTurn: this.state.playerTurn === "X" ? "O" : "X",
      });

    if (
      
      !this.state.gameState[0].includes("") &&
      !this.state.gameState[1].includes("") &&
      !this.state.gameState[2].includes("") 
    ) {
      this.setState({
        isGameActive: false,
        roundDraw: true,
      });
      //draw condition
    }}}
  };
  reset=()=>{
    this.setState(
      {
        gameState: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        isGameActive:true,
        playerTurn:"X",
        roundWon: false,
        roundDraw: false,

      }
    )
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="board">
          {this.state.gameState.map((row, rowIndex) => (
            <GridRow
              row={row}
              rowIndex={rowIndex}
              handlePlayerClick={this.handlePlayerClick}
            />
          ))}
        </div>
        <Footer
          turn={this.state.playerTurn}
          won={this.state.roundWon}
          draw={this.state.roundDraw}
          currentPlayer={this.state.playerTurn}
          gameActive={this.state.isGameActive}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
