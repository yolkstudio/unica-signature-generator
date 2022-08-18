import { Cloudinary } from "@cloudinary/url-gen";

export const api = new Cloudinary({
  cloud: {
    cloudName: "yolkstudio",
  },
});
