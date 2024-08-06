'use client';

import { useState } from 'react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from '../../components/ui/dropdown-menu'; 

const RightSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          className="h-10 pl-10 pr-4 text-sm border rounded-md focus:outline-none"
          placeholder="Search..."
        />
        <img
          src="/images/dashboard/search.svg"
          alt="Search icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
        />
      </div>
      <img
        src="/images/dashboard/sms.svg"
        alt="SMS icon"
        className="w-6 h-6 text-gray-500"
      />
      <img
        src="/images/dashboard/notification.svg"
        alt="Notification icon"
        className="w-7 h-7 text-gray-500"
      />
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2">
          <img
            src="/images/dashboard/account.svg"
            alt="Account image"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">Gokul</span>
          <img
            src="/images/dashboard/drop.svg"
            alt="Dropdown icon"
            className="w-3 h-3 text-gray-500"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <RightSection />
    </div>
  );
};

export default DashboardHeader;
