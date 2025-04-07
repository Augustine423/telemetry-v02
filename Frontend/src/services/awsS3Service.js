// import AWS from 'aws-sdk';

// AWS.config.update({
//     accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
//     secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
//     region: import.meta.env.VITE_AWS_REGION,
//   });

// const s3 = new AWS.S3();

// export const fetchVideosFromS3 = async () => {
//   const params = { 
//     Bucket: import.meta.env.VITE_AWS_BUCKET_NAME 
//   };
  
//   try {
//     const data = await s3.listObjectsV2(params).promise();
//     return data.Contents
//       .filter(item => item.Key.endsWith('.mp4')) // only MP4 files
//       .map(item => 
//         `https://${params.Bucket}.s3.${import.meta.env.REACT_APP_AWS_REGION}.amazonaws.com/${encodeURIComponent(item.Key)}`
//       );
//   } catch (error) {
//     console.error('Error fetching videos from S3:', error);
//     return [];
//   }
// };
// import AWS from "aws-sdk";

// const s3 = new AWS.S3({
//   // eslint-disable-next-line no-undef
//   region: process.env.REACT_APP_AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//   },
// });

// export const fetchVideosFromS3 = async () => {
//   const bucketName = process.env.REACT_APP_S3_BUCKET_NAME;
//   const params = { Bucket: bucketName };

//   try {
//     const data = await s3.listObjectsV2(params).promise();
//     return data.Contents.map(
//       (item) =>
//         `https://${bucketName}.s3.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/${item.Key}`
//     );
//   } catch (error) {
//     console.error("Error fetching videos from S3:", error);
//     return [];
//   }
// };
import AWS from 'aws-sdk';
import { AWS_CONFIG } from '../../config';

console.log('AWS Config:', {
    accessKey: import.meta.env.VITE_AWS_ACCESS_KEY_ID?.substring(0, 5) + '...',
    secretKey: '*****',
    region: import.meta.env.VITE_AWS_REGION,
    bucket: import.meta.env.VITE_AWS_BUCKET_NAME
  });
  
  AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    region: import.meta.env.VITE_AWS_REGION
  });



const s3 = new AWS.S3();
const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;

export const fetchVideosFromS3 = async () => {
  if (!bucketName) {
    console.error('Bucket name is not defined');
    return [];
  }

  const params = { 
    Bucket: bucketName 
  };
  
  try {
    const data = await s3.listObjectsV2(params).promise();
    return data.Contents
      .filter(item => item.Key?.endsWith('.mp4'))
      .map(item => 
        `https://${bucketName}.s3.${AWS_CONFIG.region}.amazonaws.com/${encodeURIComponent(item.Key)}`
      );
  } catch (error) {
    console.error('Error fetching videos from S3:', error);
    return [];
  }
};