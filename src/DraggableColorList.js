import React from 'react';
import DraggableColorBox from "./DraggableColorBox";
import {SortableContainer} from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {    
  //another way to access props in functional component; const { colors, removeColor } = props;
  return (
    <div style={{height: "100%"}}>
         {colors.map((color, i) => (
            <DraggableColorBox 
              index={i}
              key={color.name}
              color={color.color} 
              name={color.name} 
              handleClick={() => removeColor(color.name)} 
            />
          ))}
    </div>
  )
})

export default DraggableColorList;
