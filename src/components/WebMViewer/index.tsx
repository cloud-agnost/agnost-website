import React from "react"

const WebMViewer = ({ webm, gif }) => {
  return (
    <div>
      {/* Display the video */}
      <video autoPlay loop muted playsInline width="100%" height="100%">
        {/* Add source for webm if provided */}
        {webm && <source src={webm} type="video/webm" />}

        {/* Add source for gif if provided */}
        {gif && <source src={gif} type="image/gif" />}

        {/* Add a track for fallback content */}
        <track kind="captions" srcLang="en" label="Video not supported" />
      </video>
    </div>
  )
}

export default WebMViewer
