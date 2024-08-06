import React from 'react';
import { Input } from '../../components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu';
import StarRating from '../../components/menuid/starrating';

interface Review {
  id: string;
  reviewerName: string;
  rating: number;
  reviewDate: string;
  reviewText: string;
}

interface Props {
  reviews: Review[];
}

const ReviewList: React.FC<Props> = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>No reviews available</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className='text-lg font-bold'>Item Reviews</h2>
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

      {reviews.map((review) => (
        <div key={review.id} className="">
          <p className="text-black-600 font-bold mb-2 text-md">{review.reviewerName}</p>
          <div className="flex items-center text-xs font-bold mb-2">
            <StarRating rating={review.rating} />
            <span className='text-gray-400 ml-8'>{review.reviewDate}</span>
          </div>
          <p className="text-black-600 text-xs">{review.reviewText}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
