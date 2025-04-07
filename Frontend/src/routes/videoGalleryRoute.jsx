
import VideoGalleryListPage from "../features/dashboard/flightLog/videoGallery/pages/VideoGalleryListPage"
import VideoGalleryRegisterPage from "../features/dashboard/flightLog/videoGallery/pages/VideoGalleryRegisterPage"


const videoGalleryRoute=[
   
       
          {
            path: "videogallery-register",
            element: <VideoGalleryRegisterPage/>
          },
          {
            path: "videogallery-overview",
            element: <VideoGalleryListPage/>,
          },
         
      
        ]
 


export default videoGalleryRoute;