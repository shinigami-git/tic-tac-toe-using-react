import React from "react";
import "./gridItem.css";

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //     counter:0,
    // };
  }

  // handlePlayerClick = (event) =>{
  //     this.setState(
  //         {
  //             counter:this.state.counter+1,
  //         }
  //     );
  // };

  render() {
    return (
      <div
        className="grid-item"
        onClick={()=>{this.props.handlePlayerClick(
          this.props.rowIndex,this.props.colIndex
        )}}
      >
        {this.props.colText}
      </div>
    );
  }
}

export default GridItem;
