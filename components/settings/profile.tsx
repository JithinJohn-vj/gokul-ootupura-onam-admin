"use client"
import { useState } from 'react';
import Image from 'next/image';

interface ProfileInfo {
  name: string;
  position: string;
  profileImage: string;
}

const SettingsUpdate = () => {
  const [profile, setProfile] = useState<ProfileInfo>({
    name: 'Jane Smith',
    position: 'Manager',
    profileImage: '/images/settings/brian.svg',
  });

  const handleCaptureImage = () => {
    // Implement logic to capture image
  };

  const handleSelectImage = () => {
    // Implement logic to select image
  };

  return (
    <div className="max-w-md rounded-lg ">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image
            src={profile.profileImage}
            alt="Profile Image"
            width={150}
            height={150}
            className="rounded-full"
          />
         
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-500">{profile.position}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsUpdate;
