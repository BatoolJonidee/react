import React from 'react'

import image from "../notfound.png"; 
 
export default function noPage() {
  const mystyle={
    backgroundImage:`url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height:'900px'
  }
  return (
    
    <div style={mystyle}>

    </div>
   
  )
}
