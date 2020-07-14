import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";


const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },

  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },

  title: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: 'relative',
  },

  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },

  miniColors: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  }
};

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