import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId, isMain, customWidth, customHeight }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <YouTube
      videoId={videoId}
      opts={{
        height: customHeight ? customHeight : 'auto',
        width: customWidth ? customWidth : isMain ? '512' : '224',
      }}
    />
  );
};

export default YouTubePlayer;
