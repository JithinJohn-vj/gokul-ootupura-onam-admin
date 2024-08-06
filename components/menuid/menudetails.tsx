import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import EditForm from '../../components/menuid/editform';

interface MenuDetails {
  id: string;
  itemName: string;
  price: string;
  itemImage: string;
  itemDescription: string;
  mealType: string;
  totalDelivered: string;
  reviews: Review[];
}

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
}

interface MenuDetailItemProps {
  menuDetails: MenuDetails;
  handleSave: (updatedDetails: MenuDetails) => void;
}

const MenuDetailItem: React.FC<MenuDetailItemProps> = ({ menuDetails, handleSave }) => {
  return (
    <div className="flex items-start mb-2">
      <div className="mr-6">
        <img src={menuDetails.itemImage} alt="Item" className="w-60 h-60 object-cover" />
      </div>
      <div className='flex flex-col mt-4 flex-1'>
        <div className='flex justify-between items-start'>
          <div>
            <p className="mb-2 text-xl">{menuDetails.itemName}</p>
            <div className="mt-4">
              <p className="mb-2 text-gray-500"><span className="font-bold"></span> {menuDetails.itemDescription}</p>
              <p className="mb-2 text-xl font-bold"><span className="font-bold">₹</span> {menuDetails.price}</p>
              <p className="mb-2 text-gray-500"><span>Delivered :</span> {menuDetails.totalDelivered} Total Deliveries</p>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="mt-4 flex items-center text-blue-500 ">
                  <img src="/images/menu/editblue.svg" alt="Button Icon" className="w-4 h-4 mr-2" />
                  <span>edit item</span>
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <EditForm menuDetails={menuDetails} onSave={handleSave} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailItem;
