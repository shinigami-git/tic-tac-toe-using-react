import React from "react";
import GridItem from "../GridItem/GridItem";

class GridRow extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="grid-row">
        {this.props.row.map((col, colIndex) => (
          <GridItem rowIndex={this.props.rowIndex} colIndex={colIndex} colText={col} handlePlayerClick={this.props.handlePlayerClick} />
        ))}
      </div>
    );
  }
}
export default GridRow;
