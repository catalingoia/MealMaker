import axios from "axios";
import { useState, useRef, ChangeEvent } from "react";

const UploadImageComponent = () => {
  const [imageObject, setImageObject] = useState<any>(null);
  const handleFileInput = useRef<any>(null);

  const handleImageUpload = () => {
    if (handleFileInput.current) handleFileInput.current.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageObject({
        imagePreview: URL.createObjectURL(event.target.files[0]),
        imageFile: event.target.files[0],
      });
    }
  };

  const handleSendImage = () => {
    axios({
      method: "post",
      url: "http://192.168.0.157:3001/detect-objects",
      headers: {
        "Content-Type": "image/jpeg",
      },
      data: imageObject.imageFile,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <button onClick={handleImageUpload}>Upload Image</button>
      <label>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          capture="environment"
          ref={handleFileInput}
          onChange={handleImageChange}
        />
      </label>
      {imageObject && (
        <img src={imageObject.imagePreview} width="700" height="500" />
      )}
      <button onClick={handleSendImage}>Send image</button>
    </div>
  );
};

export default UploadImageComponent;
