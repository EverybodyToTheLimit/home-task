import React from 'react'
import logo from '../images/logo.svg'

export const Nav = () => {
  return (

    //simple nav component which can be expanded depending on development of the project
    <div className='navbar'>
        <img src={logo} alt="logo"></img>
    </div>
  )
}
