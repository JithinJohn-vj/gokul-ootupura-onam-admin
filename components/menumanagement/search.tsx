"use client";
import React, { useState } from 'react';
import { Input } from '../../components/ui/input';
import ImageUpload from '../../components/ui/imageupload';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu';

import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from '../../components/ui/sheet';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

// Custom overlay component for Sheet
const SheetOverlay = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// SearchBox component
const SearchBox = ({ setView }) => {
  const [isCategorySheetOpen, setIsCategorySheetOpen] = useState(false);
  const [isNewMenuSheetOpen, setIsNewMenuSheetOpen] = useState(false);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleCategoryImageUpload = (image) => {
    // Handle image upload logic for category sheet
    console.log('Uploaded image for category:', image);
    // You can further process the uploaded image if needed
  };

  const handleNewMenuImageUpload = (image) => {
    // Handle image upload logic for new menu sheet
    console.log('Uploaded image for new menu:', image);
    // You can further process the uploaded image if needed
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative flex items-center w-[300px]">
            <Input
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center px-4 py-2 text-sm bg-gray-100 border rounded-md">
                <img
                  src="/images/ordermanagement/filter.svg"
                  alt="Filter"
                  className="w-4 h-4 mr-2"
                />
                Filter
                <img
                  src="/images/dashboard/drop.svg"
                  alt="drop"
                  className="w-2 h-2 ml-2"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Day</DropdownMenuItem>
              <DropdownMenuItem>Week</DropdownMenuItem>
              <DropdownMenuItem>Month</DropdownMenuItem>
              <DropdownMenuItem>Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ul className="flex items-center space-x-2">
          <li className="text-sm">
            <button
              onClick={() => handleViewChange('card')}
              className="px-4 py-3 cursor-pointer text-gray-500 border-b-2 border-transparent hover:border-red-500 focus:border-red-500 flex items-center"
            >
              <img
                src="/images/ordermanagement/cardview.svg"
                alt="Card View"
                className="w-4 h-3 mr-2"
              />
            </button>
          </li>
          <li className="text-sm">
            <button
              onClick={() => handleViewChange('list')}
              className="px-4 py-3 cursor-pointer text-gray-500 border-b-2 border-transparent hover:border-red-500 focus:border-red-500 flex items-center"
            >
              <img
                src="/images/ordermanagement/listview.svg"
                alt="List View"
                className="w-3 h-3 mr-2"
              />
            </button>
          </li>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center px-4 py-3 text-sm bg-gray-100 border rounded-md text-xs">
                <img
                  src="/images/ordermanagement/sort.svg"
                  alt="Sort by"
                  className="w-3 h-3 mr-2"
                />
                Sort by
                <img
                  src="/images/dashboard/drop.svg"
                  alt="drop"
                  className="w-2 h-2 ml-2"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isCategorySheetOpen} onOpenChange={setIsCategorySheetOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center px-4 py-3 text-sm bg-red-800 text-white rounded-md">
                <img
                  src="/images/ordermanagement/add.svg"
                  alt="Add New Category"
                  className="w-3 h-3 mr-2"
                />
                Add New Category
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add New Category</SheetTitle>
              </SheetHeader>
              <div className="space-y-4">
                <div>
                  <ImageUpload onChange={handleCategoryImageUpload} />
                  <label className="block text-sm font-medium text-gray-700 ml-4">
                    Change Icon
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Menu
                  </label>
                  <select
                    className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-white"
                  >
                    <option>Menu 1</option>
                    <option>Menu 2</option>
                    <option>Menu 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    className="mt-1 block w-full px-3 py-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <button className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Cancel
                  </button>
                </SheetClose>
                <button className="mt-4 ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Save
                </button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Sheet open={isNewMenuSheetOpen} onOpenChange={setIsNewMenuSheetOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center px-4 py-3 text-sm bg-red-800 text-white rounded-md">
                <img
                  src="/images/ordermanagement/add.svg"
                  alt="New Menu"
                  className="w-3 h-3 mr-2"
                />
                New Menu
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add Item</SheetTitle>
              </SheetHeader>
              <div className="space-y-4">
                <div>
                  <ImageUpload onChange={handleNewMenuImageUpload} />
                  <label className="block text-sm font-medium text-gray-700 ml-4">
                    Change Icon
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Item Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                  Item Description
                  </label>
                  <textarea
                    className="mt-1 block w-full px-3 py-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Total Delivered
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <button className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Cancel
                  </button>
                </SheetClose>
                <button className="mt-4 ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Save
                </button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
