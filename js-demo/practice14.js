// import React, { useState } from 'react';

// const practice = () => {
//   const [ count, setCount ] = useState(0);
//   return (
//     <div>
//       <p>You clicked { count } times</p>
//       <button onClick={() => {setCount( count + 1)}}>Click me</button>
//     </div>
//   )
// }
// export default practice;
import React, { useState, useEffect } from 'react'
const PracticeUseEffect = () => {
  const [ count, setCount] = useState[0]
  useEffect(() => {
    document.title = `you clicked ${ count } times`
  })
  return (
    <div>
      <p>You clicked { count } times</p>
      <button onClick = {setCount(count + 1)}>Clicked me</button>
    </div>
  )
}
export default PracticeUseEffect