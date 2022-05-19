import React from 'react'

const Header = ({title}) => 
{
  return (
    // css file: base/typography
    <div className='section__header'>
        <h2 className='section__header--main'>{title}</h2>
        <span className='section__header--line'/>
        <h1 className='section__header--sub'>{title}</h1>
    </div>
  )
}

export default Header