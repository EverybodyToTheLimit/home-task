import React from 'react'
import { Nav } from './Nav'
import background from '../images/background.svg'
import { MainSection } from './MainSection'

// main asset imports and skeleton of the app

export const Landing = () => {
  return (
    <div className='container' >
        <Nav></Nav>
            <div className="content" style={{
                backgroundImage: `url(${background})`
            }}>
                <div className="captions top-caption">THIS IS A CAMPAIGN FOR A DESTINATION</div>
                <MainSection></MainSection>
                <div className="captions bottom-caption">
                    <p>{"<>"}</p>
                    <p>SLIDE THE WINDOW</p>
                    <p id="explore">TO EXPLORE</p>
                </div>
            </div>
    </div>
  )
}
