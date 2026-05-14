import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "@/components/commonCompo/Rating";


const ProductReview = ({ reviews }) => {
    return (
        <div className="text-[#555] font-poppins mt-10">
            {/* Top Rating Section */}
            <div className="flex flex-col md:flex-row gap-10 border-b pb-10">
                {/* Left */}
                <div>
                    <h3 className="text-[15px] font-semibold mb-3">
                        Customer reviews
                    </h3>

                    <div className="flex items-center gap-2 mb-5">
                        {
                            reviews?.length > 0 ? <Rating rating={reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length} /> : <Rating rating={0} />
                        }
                        <span className="text-sm text-gray-500">
                            {
                                reviews?.length > 0 ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1) : "0.0"
                            } out of 5
                        </span>
                    </div>
                </div>

                {/* Progress */}
                <div className="space-y-2 w-87.5">
                    {
                        [5, 4, 3, 2, 1].map((star) => {

                            const totalReviews = reviews?.length || 0;

                            const starCount = reviews?.filter(
                                (review) => Math.round(review.rating) === star
                            ).length;

                            const percentage = totalReviews
                                ? ((starCount / totalReviews) * 100).toFixed(0)
                                : 0;

                            return (
                                <div
                                    key={star}
                                    className="flex items-center gap-3 text-xs"
                                >
                                    <span className="text-gray-500 w-20">
                                        {star} Stars
                                    </span>

                                    <div className="w-full bg-gray-200 h-1 rounded">
                                        <div
                                            className="bg-[#f6a623] h-1 rounded"
                                            style={{
                                                width: `${percentage}%`,
                                            }}
                                        />
                                    </div>

                                    <span className="text-gray-500">
                                        {percentage}%
                                    </span>
                                </div>
                            );
                        })
                    }
                </div>
                <div>
                    <button className="bg-orangec text-white text-xs px-12 py-2.5 rounded transition cursor-pointer hover:bg-orangec/90">
                        Write a Review
                    </button>
                </div>
            </div>

            {/* Reviews */}
            <div className="py-10">
                <h2 className="text-[28px] font-semibold mb-8">
                    {reviews.length} Reviews
                </h2>

                <div className="space-y-10">
                    {reviews.map((review, idx) => (
                        <div key={idx}>
                            <div className="flex items-start gap-4">
                                {
                                    review.image ? <><Image src={review.image} alt={review.name} width={50} height={50} /></> : <> <Avatar>
                                        <AvatarImage
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"
                                            className="grayscale"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar></>
                                }
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h4 className="font-medium md:text-lg text-sm">
                                            {review?.reviewerName}
                                        </h4>

                                        <div className="flex items-center gap-1">
                                            <Rating rating={review?.rating} />
                                        </div>

                                        <span className="md:text-xs text-[10px] text-gray-400">
                                            {
                                                new Date(review?.date).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })
                                            }
                                        </span>
                                    </div>

                                    <p className="md:text-base text-sm text-gray-500 leading-7 mt-3 max-w-3xl">
                                        {review?.comment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Review Form */}
            <div className="pt-5">
                <h2 className="text-[28px] font-semibold mb-3">
                    Add Your Review
                </h2>

                <p className="text-sm text-gray-400 mb-8">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                </p>

                <form className="space-y-6 max-w-2xl">
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Name *
                        </label>

                        <input
                            type="text"
                            className="w-full border border-gray-300 h-12.5 px-4 outline-none focus:border-[#1496db]"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Email *
                        </label>

                        <input
                            type="email"
                            className="w-full border border-gray-300 h-12.5 px-4 outline-none focus:border-[#1496db]"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Review *
                        </label>

                        <textarea
                            rows={5}
                            className="w-full border border-gray-300 p-4 outline-none focus:border-[#1496db]"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">
                            Rating
                        </span>

                        <div className="flex items-center gap-1">
                            {[...Array(4)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill="#f6a623"
                                    stroke="#f6a623"
                                />
                            ))}

                            <Star
                                size={18}
                                fill="transparent"
                                stroke="#cfcfcf"
                            />
                        </div>
                    </div>

                    <button className="bg-orangec hover:bg-[#0f85c5] text-white px-8 py-3 rounded text-sm transition">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductReview;