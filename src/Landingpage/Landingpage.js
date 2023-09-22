import React from 'react'
import Landingpageheader from './Landingpagecontent/Landingpageheader'
import Landingpagecontects from './Landingpagecontent/Landingpagecontects'
import "../Landingpage/Landingpage.css"

const Landingpage = () => {
  return (
    <div>
      <div>
        <Landingpageheader />
      </div>
      <div>
        <Landingpagecontects />
      </div>
    </div>
  )
}

export default Landingpage