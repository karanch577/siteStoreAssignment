import React from "react";
import BookingCard from "./BookingCard";

const data = [
  {
    id: 1,
    title: "Flexi Retail Model",
    duration: "3-6 months",
    description: [
      "Go offline in our spaces with minimal risk and no CAPEX.",
      "Ideal for brands testing new locations, launching products/seasonal sales or evaluating offline as a channel.",
    ],
    bgColor: "white"
  },
  {
    id: 2,
    title: "Retail as a Service Model",
    duration: "11 months",
    description: [
      "Go offline in our spaces pan India for longer durations without the hassle of managing and running offline stores.",
      "Ideal for brands who have an offline strategy and do not want the hassle of being locked in and running their own stores.",
    ],
    bgColor: "black"
  },
];

function Booking() {
  return (
    <div className="bg-primary-white pt-32 pb-36">
      <div className="w-full mx-auto max-w-7xl 2xl:max-w-[1536px]">
        <h1 className="text-[60px] font-objectSans font-[800] text-center">
          Types of Bookings
        </h1>
        <div className="cards flex gap-12 mt-16">
            {data.length > 0 && data.map(item => <BookingCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default Booking;
