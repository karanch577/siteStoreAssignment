import React from "react";

function BookingCard({ item }) {
  return (
    <div
      className={`${
        item.bgColor === "black"
          ? "bg-primary-black text-primary-white border-primary-black"
          : "border-primary-gray"
      } p-16 border-[1.5px] rounded-[20px] `}
    >
      <h2 className="text-center text-[36px] font-[600]">{item.title}</h2>
      <p className="text-center text-[24px] font-[600]">{item.duration}</p>
      <div className="description">
        {item.description?.map((el, id) => (
          <div key={id} className="flex gap-4 my-6">
            
              <img className={`self-start relative top-1 ${item.bgColor === "white" && "filter invert"}`} src="./checklist.svg" alt="icon" />
            
            <p>{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingCard;
