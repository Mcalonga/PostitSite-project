import React from 'react'

const Header = ({handledarkmode}) => {
  return (
    <div className='Header-postit'>
        <header>POSTIT</header>
        <button className='header-button' onClick={()=>handledarkmode((previusdarkmode) => !previusdarkmode)}>Trocar de modo</button>
    </div>
  )
}

export default Header