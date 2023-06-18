import React from "react";

const Review = (porps) => {
  const { img, star, name, review } = porps;
  const star_num = Array(star).fill(null);

  return (
    <div className="w-full text-prime shadow-md lg:shadow-xl border p-6 border-gray-100">
      <div className="w-full grid grid-flow-col grid-cols-[min-content_1fr] gap-4">
        <div className="w-10 h-10 overflow-hidden rounded-full bg-prime">
          <img src={img} alt="" />
        </div>
        <div className=" ">
          <div className="w-full p-0 m-0">
            {star_num.map((_, index) => (
              <span key={index} className="material-symbols-outlined star">
                Star
              </span>
            ))}
          </div>
          <p className="text-sm p-0 mt-0 font-bold">{name}</p>
        </div>
      </div>
      <p className="text-xs pt-4">{review}</p>
    </div>
  );
};
Review.defaultProps = {
  img: "",
  star: 5,
  name: "",
  review: "",
};

export default Review;
