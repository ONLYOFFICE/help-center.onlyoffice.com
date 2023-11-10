import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId, isMain }) => {
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
        height: 'auto',
        width: isMain ? '512' : '224',
      }}
    />
  );
};

export default YouTubePlayer;
