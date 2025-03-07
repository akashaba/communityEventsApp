import { AdvancedImage, upload } from 'cloudinary-react-native';
import { Cloudinary } from '@cloudinary/url-gen';

export const cloudinary = new Cloudinary({
  cloud: {  
    cloudName: process.env.CLOUDNIARY_NAME,   
    apiKey:process.env.CLOUDINARY_API_KEY, 
},
  url: { secure: true },        
});

export const options={
    upload_preset:'events-app',
    tag:'sample',
    unsigned:true
}