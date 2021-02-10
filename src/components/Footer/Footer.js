import React from "react";
import "./footer.css"

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <>    
        <div className="footer">{(this.props.gameActive) && `Player ${this.props.turn}'s turn`}</div>
        <div className="win-msg">{(this.props.won) && `Congratulations!`} </div>
        <div className="win-msg">{(this.props.won) && `Player${this.props.currentPlayer} win`} </div>
        <div className="footer">{(this.props.draw) && `There's a draw`} </div>
        <div className="footer">{(!this.props.gameActive) && <button onClick={this.props.reset}> Reset</button>} </div>
        </>
        )
    }
}

export default Footer;