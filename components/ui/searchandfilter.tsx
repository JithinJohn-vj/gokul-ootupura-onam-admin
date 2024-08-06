'use client';

import React from 'react';
import { Input } from '../../components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs'; 

const SearchBox: React.FC<{ view: string, setView: (view: string) => void }> = ({ view, setView }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center w-[400px]">
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

      <div className="flex items-center space-x-2">
        <Tabs defaultValue={view} onValueChange={setView}>
          <TabsList className="flex">
            <TabsTrigger value="card" className="text-sm text-gray-500 px-4 py-3 cursor-pointer border-b-2 border-transparent hover:border-red-500 focus:border-red-500">
              <img
                src="/images/ordermanagement/list.svg"
                alt="Card View"
                className="w-3 h-5 mr-2"
              />
              Card View
            </TabsTrigger>
            <TabsTrigger value="list" className="text-sm text-gray-500 px-4 py-3 cursor-pointer border-b-2 border-transparent hover:border-red-500 focus:border-red-500">
              <img
                src="/images/ordermanagement/list.svg"
                alt="List View"
                className="w-3 h-3 mr-2"
              />
              List View
            </TabsTrigger>
          </TabsList>
          <TabsContent />
        </Tabs>

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
        
        <button className="flex items-center px-4 py-3 text-sm bg-red-800 text-white rounded-md">
          <img
            src="/images/ordermanagement/add.svg"
            alt="New Order"
            className="w-3 h-3 mr-2"
          />
          New Order
        </button>
      </div>
    </div>
  );
};

export default SearchBox;