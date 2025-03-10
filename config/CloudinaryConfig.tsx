import { AdvancedImage, upload } from 'cloudinary-react-native';
import { Cloudinary } from '@cloudinary/url-gen';

export const cloudinary = new Cloudinary({
  cloud: {  
    cloudName: 'dovrum3pn',   
    apiKey:'325584441366515', 
},
  url: { secure: true },        
});

export const options={
    upload_preset:'events-app',
    tag:'sample',
    unsigned:true
}