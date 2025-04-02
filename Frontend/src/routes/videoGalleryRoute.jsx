import VideoGalleryListPage from "../features/dashboard/datamanage/videoGallery/pages/VideoGalleryListPage";
import VideoGalleryRegisterPage from "../features/dashboard/datamanage/videoGallery/pages/VideoGalleryRegisterPage";




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