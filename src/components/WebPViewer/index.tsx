import React from "react";

const WebPViewer = ({ webp, image, alt, wdt }) => {
  return (


    <picture>
    <source srcSet={webp} type="image/webp" width={wdt}/>
    <img src={image} alt={alt} />
    </picture>

  );
};

export default WebPViewer;
