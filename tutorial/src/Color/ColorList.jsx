import React, { useContext } from "react";
import Color from "./Color";
import { ColorContext } from "..";
import { useColors } from "./ColorProvider";


// export default function ColorList({ 
//   colors = [], 
//   onRemoveColor = f => f,
//   onRateColor = f => f
//   }) {
//   if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  
//   return (
//     <div className="color-list">
//       {colors.map(color => (
//         <Color 
//           key={color.id} {...color}
//           onRemove={onRemoveColor}
//           onRate={onRateColor}  
//         />
//       ))}
//     </div>
//   );
// }

export default function ColorList() {

  const {colors} = useColors();

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  
  return (
    <div className="color-list">
      {colors.map(color => (
        <Color key={color.id} {...color}/>)
      )}
    </div>
  );
}
