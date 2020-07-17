import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete"

import styles from "./styles/MiniPaletteStyles";


class miniPalette extends Component {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }

  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props;

    const miniColorBoxes = colors.map(color => (
      <div 
        className={classes.miniColors} 
        style={{backgroundColor: color.color}} 
        key={color.name}
     />
    ));
  
    console.log(classes)

    return (
      <div className={classes.root} onClick={handleClick}>
          <DeleteIcon 
            className={classes.deleteIcon} 
            style={{transition: "all 0.5s ease-in-out"}} 
            onClick={this.deletePalette}
          />
        <div className={classes.colors}> {miniColorBoxes} </div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}> {emoji} </span>
        </h5>
      </div>
    )
  }
}

export default withStyles(styles)(miniPalette);



// const styles = {
//   main: {
//     backgroundColor: "purple",
//     border: "3px solid teal"
//   },
//   secondary: {
//     backgroundColor: "pink",
//     "& h1": {
//       color: "white",
//       "& span": {
//         backgroundColor: "yellow"
//       }
//     }
//   }
// };