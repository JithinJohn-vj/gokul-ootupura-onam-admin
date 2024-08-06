'use client';
import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import AvailabilitySwitch from '../../../../../components/menuid/availabilityswich';
import ReviewList from '../../../../../components/menuid/review';
import MenuDetailItem from '../../../../../components/menuid/menudetails';

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
    const reviewsString = queryParams.get('reviews') || '[]';
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

  const handleSave = (updatedDetails: MenuDetails) => {
    setMenuDetails(updatedDetails);
  };

  if (!menuDetails) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className="h-full">
      <h2 className='font-bold text-2xl'>Menu Details</h2>
      <div className="flex-1 space-y-2 p-4 pt-6 md:p-8">
        <MenuDetailItem menuDetails={menuDetails} handleSave={handleSave} />
        <AvailabilitySwitch isUnavailable={isUnavailable} setIsUnavailable={setIsUnavailable} />
        <ReviewList reviews={menuDetails.reviews} />
      </div>
    </ScrollArea>
  );
};

export default MenuDetailsPage;