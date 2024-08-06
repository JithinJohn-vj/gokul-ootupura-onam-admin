'use client';
import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import AvailabilitySwitch from '../../components/menuid/availabilityswich';
import ReviewList from '../menuid/review';

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

const MenuDetailsPage = () => {
  const [menuDetails, setMenuDetails] = useState<MenuDetails | null>(null);
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id') || '';
    const itemName = queryParams.get('itemName') || '';
    const itemImage = queryParams.get('itemImage') || '';
    const price = queryParams.get('price') || '';
    const itemDescription = queryParams.get('itemDescription') || '';
    const mealType = queryParams.get('mealType') || '';
    const totalDelivered = queryParams.get('totalDelivered') || '';
    const reviewsString = queryParams.get('reviews') || '[]'; // Default to empty array if reviews are not provided
    const reviews: Review[] = JSON.parse(reviewsString);

    setMenuDetails({
      id,
      itemName,
      price,
      itemImage,
      itemDescription,
      mealType,
      totalDelivered,
      reviews,
    });
  }, []);

  if (!menuDetails) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className="h-full">
      <h2 className='font-bold text-2xl'>Menu Details</h2>
      <div className="flex-1 space-y-2 p-4 pt-6 md:p-8">
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
                <button className="mt-4 flex items-center text-blue-500 ">
                  <img src="/images/menu/editblue.svg" alt="Button Icon" className="w-4 h-4 mr-2" />
                  <span>edit item</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <AvailabilitySwitch isUnavailable={isUnavailable} setIsUnavailable={setIsUnavailable} />
        <ReviewList reviews={menuDetails.reviews} />
      </div>
    </ScrollArea>
  );
};

export default MenuDetailsPage;
