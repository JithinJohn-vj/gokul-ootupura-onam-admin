"use client";
import React, { useRef } from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetOverlay,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
} from '../ui/sheet'; 

type NewCategoryFormProps = {
  onClose: () => void;
};

const NewCategoryForm: React.FC<NewCategoryFormProps> = ({ onClose }) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center px-4 py-3 text-sm bg-red-800 text-white rounded-md">
          Add New Category
        </button>
      </SheetTrigger>

      <SheetContent ref={sheetRef} side="right">
        <SheetOverlay className="fixed inset-0 bg-black/50" />
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <SheetHeader>
            <SheetTitle>New Category Form</SheetTitle>
            <SheetDescription>Fill out the form to add a new category.</SheetDescription>
          </SheetHeader>
          {/* Form fields and actions */}
          <form>
            <div className="mb-4">
              <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categoryType" className="block text-sm font-medium text-gray-700">
                Category Type
              </label>
              <select
                id="categoryType"
                name="categoryType"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
              >
                <option value="">Select a type</option>
                <option value="Trending">Trending</option>
                <option value="Featured">Featured</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <SheetFooter className="flex justify-end mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-800 text-white rounded-md"
              >
                Save
              </button>
            </SheetFooter>
          </form>
        </div>
        <SheetClose className="absolute top-2 right-2" />
      </SheetContent>
    </Sheet>
  );
};

export default NewCategoryForm;
