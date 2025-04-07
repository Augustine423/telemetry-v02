import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const VideoGridItem = ({ url }) => {
    const [duration, setDuration] = useState(null);
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const totalSeconds = Math.floor(videoRef.current.duration);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }
  };
    return (
        <>
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <video  ref={videoRef} className="block " controls preload="metadata" onLoadedMetadata={handleLoadedMetadata}>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {duration && (
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      )}
      </div>
     
      </>
    )
  }
  
  export default VideoGridItem;