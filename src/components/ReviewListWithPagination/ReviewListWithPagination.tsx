"use client";

import React, { useEffect, useState } from "react";
import WhatOurClientSay from "@/components/WhatOurClientSay/WhatOurClientSay";
import { Pagination, Select, Spin } from "antd";
import WhatOurCustomerSay from "../WhatOurCustomerSay/WhatOurCustomerSay";

const { Option } = Select;

const ReviewListWithPagination = () => {
    const [reviews, setReviews] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [rating, setRating] = useState<number | "">("");
    const [loading, setLoading] = useState(false);

    const fetchReviews = async (pageNum: number, selectedRating: number | "") => {
        try {
            setLoading(true);

            const ratingParam = selectedRating ? `rating=${selectedRating}&` : "";
            const res = await fetch(
                `http://103.186.20.116:9001/api/budget/total_reviews/?${ratingParam}page=${pageNum}&page_size=10`
            );

            if (!res.ok) throw new Error("Failed to fetch reviews");

            const data = await res.json();

            // ✅ extract nested data properly
            setReviews(data?.reviews?.results || []);
            setTotal(data?.reviews?.total_count || 0);
        } catch (err) {
            console.error("Error fetching reviews:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews(page, rating);
    }, [page, rating]);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between w-full px-5">
                {/* Centered component */}
                <div className="flex-1 flex justify-center">
                    <WhatOurCustomerSay />
                </div>

                {/* Right-end filter */}
                <div className="flex flex-col items-end space-y-2 ">
                    <p className="text-gray-700 font-medium">Filter By Rating:</p>
                    <Select
                        value={rating}
                        onChange={(value) => {
                            setRating(value);
                            setPage(1);
                        }}
                        style={{ width: 160 }}
                        placeholder="Filter by Rating"
                    >
                        <Option value="">All Ratings</Option>
                        <Option value={5}>5 Stars</Option>
                        <Option value={4}>4 Stars</Option>
                        <Option value={3}>3 Stars</Option>
                        <Option value={2}>2 Stars</Option>
                        <Option value={1}>1 Star</Option>
                    </Select>
                </div>
            </div>


            {/* 💬 Reviews Section */}
            {loading ? (
                <div className="flex justify-center py-10">
                    <Spin size="large" />
                </div>
            ) : reviews.length > 0 ? (
                <WhatOurClientSay reviews={reviews} />
            ) : (
                <p className="text-center text-gray-500 py-10">No reviews found</p>
            )}

            {/* 📄 Pagination */}
            <div className="flex justify-center mt-6">
                <Pagination
                    current={page}
                    total={total}
                    pageSize={10}
                    showSizeChanger={false}
                    onChange={(p) => setPage(p)}
                />
            </div>
        </div>
    );
};

export default ReviewListWithPagination;
