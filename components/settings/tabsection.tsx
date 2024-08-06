"use client"
import { useState } from 'react';
import ProfileInformation from '../../components/settings/profInfo';
import EmployeesManagement from '../../components/settings/employee';
import LoginPassword from '../../components/settings/logpass';
import SettingsUpdate from '../../components/settings/profile';
import Logout from '../../components/settings/logout';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>('ProfileInformation');

  const renderContent = () => {
    switch (activeTab) {
      case 'ProfileInformation':
        return <ProfileInformation />;
      case 'EmployeesManagement':
        return <EmployeesManagement />;
      case 'LoginPassword':
        return <LoginPassword />;
      case 'Logout':
        return <Logout />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      
      <div className="flex flex-col w-1/4  p-4 space-y-2">
      <SettingsUpdate />
        <button
          className={`py-3 px-8 rounded-md text-left ${activeTab === 'ProfileInformation' ? 'bg-red-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('ProfileInformation')}
        >
          Profile Information
        </button>
        <button
          className={`py-2 px-4 text-left ${activeTab === 'EmployeesManagement' ? 'bg-red-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('EmployeesManagement')}
        >
          Employees Management
        </button>
        <button
          className={`py-2 px-4 text-left ${activeTab === 'LoginPassword' ? 'bg-red-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('LoginPassword')}
        >
          Login & Password
        </button>
        <button
          className={`py-2 px-4 text-left ${activeTab === 'Logout' ? 'bg-red-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('Logout')}
        >
          Log Out
        </button>
      </div>
      {/* Content Display */}
      <div className="flex-1 p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
