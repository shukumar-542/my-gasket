
import React from "react";
import review from "../../../assets/review.png";
import Image from "next/image";
import UserReview from "@/components/UserReview/UserReview";
import WhatOurClientSay from "@/components/WhatOurClientSay/WhatOurClientSay";
import ShareExprience from "@/components/ShareExprience/ShareExprience";



async function fetchProductReviews() {
  try {
    const res = await fetch("http://103.186.20.116:9001/api/budget/total_reviews/", {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Product Reviews");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch Product Reviews failed:", error);
    return [];
  }
}



const CustomerReviewPage = async() => {
 
   const reviews = await fetchProductReviews();

   console.log(reviews)

  return (
    <div className="mt-20">
      <div className="mt-8 relative ">
        <Image
          className="w-full h-[400px] object-cover"
          src={review}
          height={1200}
          width={1200}
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
          Customer Review
        </p>
      </div>
      <div className="container mx-auto py-10">
        <UserReview />
        <div className="mt-20 pb-10">
          <WhatOurClientSay reviews={reviews?.reviews?.results} />
        </div>

        <ShareExprience/>
      </div>
    </div>
  );
};

export default CustomerReviewPage;
