"use client"
import React, { useState } from 'react';

interface ImageUploadProps {
  label: string;
  onImageUpload: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, onImageUpload }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        onImageUpload(file);
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
      onImageUpload(null);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-2">
        <label className="block cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          {imageSrc ? (
            <img src={imageSrc} alt="Uploaded" className="h-24 w-24 object-cover rounded-md" />
          ) : (
            <div className="">
              <img src="/images/menu/photo.svg" alt="Upload Icon" className="h-[110px] w-[110px]" />
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
