import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

interface RatingData {
  star: number;
  count: number;
}

const ratings: RatingData[] = [
  { star: 5, count: 100 },
  { star: 4, count: 11 },
  { star: 3, count: 10 },
  { star: 2, count: 8 },
  { star: 1, count: 1 },
];

const UserReview = () => {
  const getMaxCount = (data: RatingData[]) =>
    Math.max(...data.map((item) => item.count));
  const max = getMaxCount(ratings);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="bg-white py-2 rounded-md shadow-2xl px-10 text-center flex flex-col justify-center">
          <p className="text-[56px] font-medium">4.8</p>
          <p>of 12 reviews</p>
          <div className="flex items-center justify-center gap-1">
            <IoIosStar size={25} color="#FFB547" />
            <IoIosStar size={25} color="#FFB547" />
            <IoIosStar size={25} color="#FFB547" />
            <IoIosStar size={25} color="#FFB547" />
            <FaStarHalfAlt size={25} color="#FFB547" />
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

export default UserReview;
