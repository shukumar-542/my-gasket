import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

interface RatingData {
  star: number;
  count: number;
}



const OverAllRatingAvg = ({reviewStars , totalreview} : any) => {

  const individualRatings = reviewStars || {};


  const ratings: RatingData[] = [
  { star: 5, count:individualRatings?.["5_star"] || 0},
  { star: 4, count: individualRatings?.["4_star"] || 0 },
  { star: 3, count:individualRatings?.["3_star"] || 0 },
  { star: 2, count:individualRatings?.["2_star"] || 0},
  { star: 1, count:individualRatings?.["1_star"] || 0 },
];

  const getMaxCount = (data: RatingData[]) =>
    Math.max(...data.map((item) => item.count));
  const max = getMaxCount(ratings);


  // Rating value calculation
  const ratingValue = totalreview?.review_stats?.average_rating || 0;

  const fullStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="bg-white py-2 rounded-md shadow-2xl px-10 text-center flex flex-col justify-center">
          <p className="text-[56px] font-medium">{totalreview?.review_stats?.average_rating}</p>
          <p>of {totalreview?.total_reviews} reviews</p>
         {/* Dynamic star rendering */}
          <div className="flex items-center justify-center gap-1">
            {[...Array(fullStars)]?.map((_, i) => (
              <IoIosStar key={`full-${i}`} size={25} color="#FFB547" />
            ))}
            {hasHalfStar && <FaStarHalfAlt size={25} color="#FFB547" />}
            {[...Array(emptyStars)]?.map((_, i) => (
              <IoIosStarOutline key={`empty-${i}`} size={25} color="#FFB547" />
            ))}
          </div>
        </div>

        <div className="space-y-3 bg-gray-50 p-4 rounded-md w-full max-w-sm">
          {ratings.map(({ star, count }) => {
            const percent = (count / max) * 100;

            return (
              <div key={star} className="flex items-center space-x-2 text-sm">
                <div className="w-12">{star} Star</div>
                <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                  <div
                    className="absolute top-0 left-0 h-2 bg-yellow-400 rounded-full"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <div className="w-6 text-gray-600 text-right">{count}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverAllRatingAvg;
