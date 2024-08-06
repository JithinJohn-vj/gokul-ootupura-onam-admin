"use client"
import React, { useState } from 'react';

interface EditFormProps {
  menuDetails: MenuDetails;
  onSave: (updatedDetails: MenuDetails) => void;
}

const EditForm: React.FC<EditFormProps> = ({ menuDetails, onSave }) => {
  const [formValues, setFormValues] = useState(menuDetails);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <div>
        <label className="block text-sm font-medium text-gray-700">Item Name</label>
        <input
          type="text"
          name="itemName"
          value={formValues.itemName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="text"
          name="price"
          value={formValues.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="itemDescription"
          value={formValues.itemDescription}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
};

export default EditForm;
