import React from 'react'
import Landingpageheader from './Landingpagecontent/Landingpageheader'
import Landingpagecontects from './Landingpagecontent/Landingpagecontects'
import "../Landingpage/Landingpage.css"

const Landingpage = () => {
  return (
    <div>
      
      <div style={{position:"fixed",zIndex:"99999",width:"100%"}}>
        <Landingpageheader />
        </div>
      <div>
        <Landingpagecontects />
      </div>
    </div>
  )
}

export default Landingpage