"use client"
import React, { useState } from 'react';
import menuItems from '../../constants/menu';
import SearchBox from '../../components/menumanagement/search';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../components/ui/card';

const MenuComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [view, setView] = useState<'card' | 'list'>('card'); // Initialize the view state

  // Filter items based on selected meal type
  const filteredItems = menuItems.filter((item) => {
    if (activeTab === 'all') return true;
    return item.mealType === activeTab;
  });

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="mb-4">
        <ul className="flex justify-left space-x-4">
          <li
            onClick={() => setActiveTab('all')}
            className={`cursor-pointer py-2 px-4 ${
              activeTab === 'all'
                ? 'border-b-2 border-red-800 text-red-800'
                : 'text-gray-500'
            }`}
          >
            All
          </li>
          <li
            onClick={() => setActiveTab('breakfast')}
            className={`cursor-pointer py-2 px-4 ${
              activeTab === 'breakfast'
                ? 'border-b-2 border-red-800 text-red-800'
                : 'text-gray-500'
            }`}
          >
            Breakfast
          </li>
          <li
            onClick={() => setActiveTab('lunch')}
            className={`cursor-pointer py-2 px-4 ${
              activeTab === 'lunch'
                ? 'border-b-2 border-red-800 text-red-800'
                : 'text-gray-500'
            }`}
          >
            Lunch
          </li>
          <li
            onClick={() => setActiveTab('dinner')}
            className={`cursor-pointer py-2 px-4 ${
              activeTab === 'dinner'
                ? 'border-b-2 border-red-800 text-red-800'
                : 'text-gray-500'
            }`}
          >
            Dinner
          </li>
          <li
            onClick={() => setActiveTab('desserts')}
            className={`cursor-pointer py-2 px-4 ${
              activeTab === 'desserts'
                ? 'border-b-2 border-red-800 text-red-800'
                : 'text-gray-500'
            }`}
          >
            Desserts
          </li>
          <li
            onClick={() => setActiveTab('drinks')}
            className={`cursor-pointer py-2 px-4 ${
              activeTab === 'drinks'
                ? 'border-b-2 border-red-800 text-red-800'
                : 'text-gray-500'
            }`}
          >
            Drinks
          </li>
        </ul>
      </div>
      <SearchBox setView={setView} />

      {view === 'card' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="max-w-xs">
              <CardContent className="mt-3">
                <img
                  src={item.itemImage}
                  alt={item.itemName}
                  className="w-full h-auto rounded-t-xl"
                />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-sm font-bold">
                  {item.itemName}
                </CardTitle>
                <CardDescription className="text-xs">
                  {item.itemDescription}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex justify-between w-full">
                  <span className="text-sm font-bold">₹{item.price.toFixed(2)}</span>
                  <span className="text-xs text-gray-500">{item.totalDelivered} delivered</span>
                </div>
              </CardFooter>
              <CardFooter>
                <div className="flex justify-between w-full mt-2">
                  <div className="flex flex-col items-center">
                    <Link href={`/dashboard/menumanagement/menuid?id=${item.id}&itemName=${encodeURIComponent(item.itemName)}&itemDescription=${encodeURIComponent(item.itemDescription)}&itemImage=${encodeURIComponent(item.itemImage)}&price=${encodeURIComponent(item.price)}&totalDelivered=${encodeURIComponent(item.totalDelivered)}&mealType=${encodeURIComponent(item.mealType)}&reviews=${encodeURIComponent(JSON.stringify(item.reviews))}`}>
                      <img
                        src="/images/ordermanagement/visibility.svg"
                        alt="view"
                        className="w-4 h-4 object-cover"
                      />
                      <span className="text-xs mt-1">View</span>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/ordermanagement/edit.svg"
                      alt="edit"
                      className="w-4 h-4 object-cover"
                    />
                    <span className="text-xs mt-1">Edit</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/menu/duplicate.svg"
                      alt="duplicate"
                      className="w-4 h-4 object-cover"
                    />
                    <span className="text-xs mt-1">Duplicate</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/menu/delete.svg"
                      alt="delete"
                      className="w-4 h-4 object-cover"
                    />
                    <span className="text-xs mt-1">Delete</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {view === 'list' && (
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">ITEM</th>
              <th className="text-left p-2">DESCRIPTION</th>
              <th className="text-left p-2">PRICE</th>
              <th className="text-left p-2">DELIVERED</th>
              <th className="text-left p-2"></th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b text-sm">
                <td className="p-2 flex items-center">
                  <img
                    src={item.itemImage}
                    alt={item.itemName}
                    className="w-10 h-10 object-cover rounded mr-2"
                  />
                  {item.itemName}
                </td>
                <td className="p-2 w-[300px]">
                  <span className="text-sm">{item.itemDescription}</span>
                </td>
                <td className="p-2">
                  <span className="text-sm">₹{item.price.toFixed(2)}</span>
                </td>
                <td className="p-2">
                  <span className="text-sm">{item.totalDelivered} delivered</span>
                </td>
                <td className="p-2">
                  <div className="flex space-x-2">
                    <div className="flex flex-col items-center">
                      <Link href={`/dashboard/menumanagement/menuid?id=${item.id}&itemName=${encodeURIComponent(item.itemName)}&itemDescription=${encodeURIComponent(item.itemDescription)}&itemImage=${encodeURIComponent(item.itemImage)}&price=${encodeURIComponent(item.price)}&totalDelivered=${encodeURIComponent(item.totalDelivered)}&mealType=${encodeURIComponent(item.mealType)}&reviews=${encodeURIComponent(JSON.stringify(item.reviews))}`}>
                        <img
                          src="/images/ordermanagement/visibility.svg"
                          alt="view"
                          className="w-4 h-4 object-cover"
                        />
                        <span className="text-xs mt-1">View</span>
                      </Link>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/ordermanagement/edit.svg"
                        alt="edit"
                        className="w-4 h-4 object-cover"
                      />
                      <span className="text-xs mt-1">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/menu/duplicate.svg"
                        alt="duplicate"
                        className="w-4 h-4 object-cover"
                      />
                      <span className="text-xs mt-1">Duplicate</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/menu/delete.svg"
                        alt="delete"
                        className="w-4 h-4 object-cover"
                      />
                      <span className="text-xs mt-1">Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MenuComponent;
