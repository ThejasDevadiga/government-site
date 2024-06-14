import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import APIStandards from "../utils/API_standards";
import communication_service from "../services/communication_service";
import React, { useEffect, useState } from "react";

const MyGallery = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const data = await communication_service.get(APIStandards.USER.GET_EVENTS_DATA, {}, {});
        console.log(data.data['data'])
        setImages(data.data['data']);
      } catch (ex) {
        console.log(ex);
      } finally {
        setLoading(false);
      }
    };
    getEvents();
  }, []);

  return (
    <>
      <Gallery>
        <div className="description p-12 text-center text-xl">
          <p>
            ದಿನಾಂಕ <span className="font-semibold">24/09/2023</span>  ರಂದು ಮುರುಡೇಶ್ವರದ ಪೆಟ್ರಿಷಿಯ ರೆಸಿಡೆನ್ಸಿಯಲ್ಲಿ (Patricia
            Residency) ಪ್ರಾಥಮಿಕ ಸಭೆ ನಡೆಸಲಾಯಿತು, ಸಂಘ ಸ್ಥಾಪಿಸುವ ಬಗ್ಗೆ, ಹೆಸರಿಡುವ ಬಗ್ಗೆ,
            ಈ ರೀತಿ ವಿವರವಾಗಿ ಚರ್ಚಿಸಿ ಸಂಘ ರಿಜಿಸ್ಟರ್ ಮಾಡಿಸುವ ಹೊಣೆಗಾರಿಕೆಯನ್ನು
            ಪ್ರಾಥಮಿಕವಾಗಿ ರಾಮನಗರ ಜಿಲ್ಲೆಯ ಸ್ನೇಹಿತರಿಗೆ ವಹಿಸಲಾಯಿತು. ಕಾರವಾರದ ಸ್ನೇಹಿತರು
            ಸದರಿ ಸಭೆಯು ಯಶಸ್ಸುಗೊಳ್ಳಲು ರೂವಾರಿಗಳಾಗಿದ್ದರು.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-4 gap-5 p-12">
          {images.map((image, index) => (
            <Item
              key={index}
              original={image}
              thumbnail={image}
              width="1024"
              height="768"
            >
                <img
                  src={`data:image/png;base64,+${image.photo['img']}`}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
            </Item>
          ))}
        </div>
      </Gallery>
    </>
  );
};

export default MyGallery;
