import React from 'react'
import { Nav } from './Nav'
import background from '../images/background.svg'
import slide from '../images/slide.png'
import campaign from '../images/campaign.png'
import { MainSection } from './MainSection'

// main asset imports and skeleton of the app

export const Landing = () => {
  return (
    <div className='container' >
        <Nav></Nav>
            <div className="content" style={{
                backgroundImage: `url(${background})`
            }}>
                <div className="captions top-caption"style={{
                backgroundImage: `url(${campaign})`
            }}>
                </div>
                <MainSection></MainSection>
                <div className="captions bottom-caption"style={{
                backgroundImage: `url(${slide})`
            }}>
                </div>
            </div>
    </div>
  )
}
