import React from 'react';
import { withStyles } from "@material-ui/styles";


import styles from "./styles/MiniPaletteStyles";


function miniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;

  const miniColorBoxes = colors.map(color => (
    <div 
      className={classes.miniColors} 
      style={{backgroundColor: color.color}} 
      key={color.name}
   />
  ));

  console.log(classes)

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}> {miniColorBoxes} </div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}> {emoji} </span>
      </h5>
    </div>
  )
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