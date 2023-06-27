import React, { useState } from 'react';

export default function PhotoWidget() {
  const [imageURL, setImageURL] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageURL(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {imageURL ? (
        <img src={imageURL} alt="Uploaded" />
      ) : (
        <div>No Image Selected</div>
      )}

      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}