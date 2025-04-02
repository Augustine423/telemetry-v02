

// import { useEffect, useState } from "react";

import { Camera } from "lucide-react";

// import LightGallery from "lightgallery/react";

// // import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import { getCookie } from "react-use-cookie";
// import { HiPhoto } from "react-icons/hi2";
// import Spinner from "../../../../../components/Spinner";

// const CompanyImageUpladInput = ({
//   inputName,
//   uploadUrl,
//   register,
//   setValue,
//   defaultValue,
//   required = false,
//   errors,
// }) => {
//   const [uploadedPhoto, setUploadedPhoto] = useState(null);
//   const [isSending, setIsSending] = useState(false);

//   useEffect(() => {
//     if (defaultValue) {
//       setValue(inputName, defaultValue);
//       setUploadedPhoto(defaultValue);
//     }
//   }, []);

//   const removeUploadedPhoto = () => {
//     setUploadedPhoto(null);
//     setValue(inputName, "");
//   };

//   const handleUpload = async () => {
//     let files = [];

//     // Check if the modern File System Access API is supported
//     if (typeof window.showOpenFilePicker === "function") {
//       try {
//         // Use the modern API to select a file
//         const fileHandles = await window.showOpenFilePicker({
//           multiple: false,
//         });
//         for (let fileHandle of fileHandles) {
//           const file = await fileHandle.getFile();
//           files.push(file);
//         }
//       } catch (error) {
//         console.error("Error selecting files with showOpenFilePicker:", error);
     
//         return;
//       }
//     } else {
//       // Fallback to the traditional <input type="file"> for unsupported browsers
//       try {
//         files = await new Promise((resolve, reject) => {
//           const input = document.createElement("input");
//           input.type = "file";
//           input.multiple = false; // Allow only one file
//           input.onchange = (e) => {
//             resolve(Array.from(e.target.files));
//           };
//           input.onerror = (e) => {
//             reject(new Error("File selection failed."));
//           };
//           input.click();
//         });
//       } catch (error) {
//         console.error("Error selecting files with fallback method:", error);
      
//         return;
//       }
//     }

//     // Proceed with file upload
//     if (files.length === 0) {
//       console.error("No files selected.");
      
//       return;
//     }

//     try {
//       const formData = new FormData();

//       // Append files to FormData
//       for (let file of files) {
//         formData.append("images[]", file);
//       }

//       setIsSending(true);

//       // Send the files to the server
//       const response = await fetch(uploadUrl, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         //   Authorization: `Bearer ${getCookie("my_token")}`,
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUploadedPhoto(data.data[0].url.large);
//         setValue(inputName, data.data[0].url.large);
      
//       } else {
//         const errorText = await response.text();
//         console.error("Failed to upload files:", errorText);
        
//       }
//     } catch (error) {
//       console.error("Error uploading files:", error);
     
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div>
//       <div
//         className={`bg-gray-50 border ${
//           errors[inputName]
//             ? "border-red-500 focus:ring-red-500 focus:border-red-500"
//             : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
//         } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
//       >
//         {uploadedPhoto ? (
//           <PreviewImageUi
//             thumbnail={uploadedPhoto}
//             removeUploadedPhoto={removeUploadedPhoto}
//           />
//         ) : (
//           <UploaderUi handleUpload={handleUpload} isSending={isSending} />
//         )}
//       </div>
//       <input
//         type="text"
//         className="hidden"
//         {...register(inputName, { required })}
//       />
//     </div>
//   );
// };

// export default CompanyImageUpladInput;

// const UploaderUi = ({ handleUpload, isSending }) => {
//   return (
//     <>
//       {isSending ? (
//         <Spinner size="size-2" />
//       ) : (
//         <p className=" cursor-pointer" onClick={handleUpload}>
//           <HiPhoto className=" size-20 fill-gray-500" />
//           <span>Upload Logo Image</span>
//         </p>
//       )}
//     </>
//   );
// };

// const PreviewImageUi = ({ thumbnail, removeUploadedPhoto }) => {
//   return (
//     <div className=" flex gap-3 items-end">
//       <div className="">
//         <LightGallery>
//           <a href={thumbnail}>
//             <img
//               src={thumbnail}
//               className=" w-14 h-14 object-cover rounded-md "
//               alt=""
//             />
//           </a>
//         </LightGallery>
//       </div>
//       <button
//         type="button"
//         onClick={removeUploadedPhoto}
//         className=" text-red-700"
//       >
//         Remove
//       </button>
//     </div>
//   );
// };
const CompanyImageUpladInput = ({ inputName, register, setValue, errors }) => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setValue(inputName, file); // Set file to react-hook-form
      }
    };
  
    return (
      <div className="w-64 relative">
        <div className="bg-gray-300 rounded-md h-36 flex flex-col items-center justify-center">
          <Camera className="w-8 h-8 text-gray-500" />
          <div className="text-center mt-2 text-gray-600">
            <div>Upload Logo Image</div>
            <div className="text-xs">(jpeg, bmp, png)</div>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute opacity-0 w-full h-[150px] cursor-pointer"
          />
        </div>
        {errors[inputName] && (
          <p className="text-red-500 text-sm mt-1">{errors[inputName].message}</p>
        )}
      </div>
    );
  };
  export default CompanyImageUpladInput;
