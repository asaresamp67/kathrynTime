import React from 'react'
import Rainbow from '../HOC/RainBow'
export const About = () => {
  return (
    <>
      <div className='container'>
        <h4 className='center'>About</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolorum
          enim optio cupiditate hic? Corrupti sit voluptatibus incidunt fugit
          illum.
        </p>
      </div>
    </>
  )
}

export default Rainbow(About)
