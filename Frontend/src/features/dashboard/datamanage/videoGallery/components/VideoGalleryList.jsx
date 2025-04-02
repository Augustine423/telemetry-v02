

import { Clock, Play, MoreVertical, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "../../../../../components/Pagination";
import { fetchVideos } from "../../../../../stores/videodata/videoGallerySlice";
import VideoHeader from "./VideoHeader";

const VideoGalleryList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Ensuring hooks are always called
  const { videos, loading, error } = useSelector((state) => state.videos);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]); // Ensure `dispatch` is always in the dependency array

  // Handle video play state
  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  console.log("Videos:", videos);
  

  return (
    <>
      <VideoHeader />
      <main className="p-10">
        <div className="px-8 md:px-14 py-8 shadow-md rounded-lg bg-white">
          {/* ✅ Ensuring hooks always run, even if loading or error exists */}
          {loading && <p>Loading videos...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}

          {/* ✅ Prevent crash when `videos` is undefined */}
          {!loading && !error && videos && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {videos.map((video) => (
                <div key={video.id} className="rounded-lg overflow-hidden shadow-md bg-white">
                  <div className="relative">
                    <div
                      className="relative aspect-video bg-gray-300 cursor-pointer"
                      onClick={() => handlePlayVideo(video.id)}
                    >
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-white/80 p-3">
                          <Play className="h-6 w-6 text-gray-700" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">{video.title}</h3>
                        <button className="text-gray-500 hover:text-gray-700">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Clock className="size-4" />
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Video Player Modal */}
          {activeVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="relative w-full max-w-4xl">
                <button onClick={handleCloseVideo} className="absolute -top-10 right-0 text-white hover:text-gray-300">
                  <X className="h-8 w-8" />
                </button>
                <div className="aspect-video bg-black">
                  <iframe
                    src={videos.find((v) => v.id === activeVideo)?.url}
                    className="w-full h-full"
                    title={videos.find((v) => v.id === activeVideo)?.title}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {/* Pagination Section */}
          <div className="mt-8">
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
};

export default VideoGalleryList;
