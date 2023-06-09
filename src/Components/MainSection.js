import React, { useState } from 'react'
import door from '../images/door.svg'
import holiday from '../images/holiday-b-whole.svg'
import ReactPlayer from 'react-player';
import plane from "../images/plane.png"



export const MainSection = () => {

    let [animationState, setAnimationState] = useState(false)  //used to control the animation of sliding
    let [planeGo, setPlaneGo] = useState(false) //used to trigger plane animation
    let [animationFinished, setAnimationFinished] = useState(false) //used pop up watch video button
    let [videoClicked, setvideoClicked] = useState(false) //used to change player div
    let [playVideo, setPlayVideo] = useState(false) // used to pop up ReactPlayer

    let animateDoor = () => {       //main function to control the flow of animations
        setAnimationState(true)
        setTimeout(() => { setAnimationFinished(true)}, 1000)
        setTimeout(() => { setPlaneGo(true)}, 2500)
    }



  return (
        // main div
        <div className='main-section'> 
        {/* conditional creating either Video Player, Watch Video button or nothing depending on state */}
            { animationFinished ? 
                (playVideo ? <ReactPlayer className="video-player video-player-big" id="react-player"
                    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4?autoplay=1"
                    playing
                    autoplay="true"
                    width="50%"
                    height="auto"
                    controls
                    config={{
                        file: { 
                          attributes: { 
                            preload: 'none' 
                          } 
                        } 
                      }}
                ></ReactPlayer> : <div className=
                    { videoClicked ? "video-player video-player-big" : "video-player"} onClick={() => {setvideoClicked(true)}}>
                {videoClicked ? (<div className='watch-video' >{">"}</div>) : (<div className='watch-video' onClick={() => setPlayVideo(true)}>WATCH VIDEO</div>)}
                {videoClicked ? null : (<div>{">"}</div>)}
            </div>
            ) : null}
            {/* initial components with doors changing classname when state is changed */}
            <div className="doors" onClick={animateDoor}>
                <img src={door} className={animationState ? "main-image left-door left-active" : "main-image left-door"} alt="left-door"></img>
                <img src={door} className={animationState ? "main-image right-door right-active" : "main-image right-door"}  alt="right-door"></img>
                <img src={holiday} className={animationState ? "main-image holiday holiday-active" : "main-image holiday"} alt="beach"></img>
                    {/* plane component */}
                {planeGo ? (<img className="plane" src={plane} alt="plane"></img>) : null}
            </div>
            
        </div>

  )
}
