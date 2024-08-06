import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // Round to nearest half

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<span key={i} className="text-yellow-500 text-xl">&#9733;</span>); // filled star
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(<span key={i} className="text-yellow-500 text-xl">&#9734;</span>); // half star
    } else {
      stars.push(<span key={i} className="text-gray-300 text-xl">&#9733;</span>); // empty star
    }
  }

  return (
    <div className="flex items-center">
      {stars}
      <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span> {/* Display rating number */}
    </div>
  );
};

export default StarRating;
