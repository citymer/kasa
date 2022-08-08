import React from 'react'
import { useState } from 'react'
import Vector from '../assets/Vector.png'

const DropdownDescription = ({ id, description }) => {
  const [toggle, setToggle] = useState(false)
  const toggleFunctions = () => {
    setToggle(!toggle)
  }

  return (
    <div
      className="contentDropdownLocation"
      style={{ backgroundColor: toggle ? '#F6F6F6' : '' }}
    >
      <div className="dropdownLocation">
        <h2 className="h2">Description</h2>
        <img
          className="chevron"
          src={Vector}
          onClick={toggleFunctions}
          style={{ transform: toggle ? 'rotate(0.5turn)' : 'rotate(0)' }}
          alt="chevron"
        />
      </div>
      <div className="contentSommaire">
        <p
          id={id}
          className="sommaire"
          style={{ display: toggle ? 'block' : 'none' }}
        >
          rrr
        </p>
      </div>
    </div>
  )
}

export default DropdownDescription
