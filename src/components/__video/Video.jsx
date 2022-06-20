import React, {useState} from 'react'
import './Video.css'


const videoUrl = ''
const Video = () =>{
  const [playerState, setPlayerState] = useState({
    playing: false,
  })
  
  const toggleVideoPlay = () => {
    setPlayerState({
          ...playerState,
      playing: true,
    }
    )
  }
  

  return (
    <div>
      <div className="videoWrapper">
        <Video
         src={videoUrl}
        />
        <div
         className="controls"
        >
          <buttto
            onclick={toggleVideoPlay}
          >
           {playerState.playing ? 'Pause' : 'Play'}
          </buttto>
          <input
            type="range"
            min="0"
            max="100"
          />
          <select>
            {[1, 2, 3].map((speed) => (
              <option key={`speedChange_$(speed)`}
              >
              {speed}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Video