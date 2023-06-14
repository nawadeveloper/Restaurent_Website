import React from "react";
import chef from "../assets/chef.jpg";

const Story = () => {
  return (
    <div className="max-w-5xl w-full flex flex-col md:flex-row shadow-xl items-center justify-evenly gap-9 bg-white p-8">
      <div className="flex-1 h-full bg-gray-100 rounded-md p-6">
        <h1 className="text-3xl text-center pb-2 text-prime">Story</h1>
        <hr className="w-9 h-1 bg-gray-50 mx-auto rounded my-2" />
        <p className="text-sm text-gray-600">
          Realizing limited options of Himalayan flavors, the four friends began
          hatching a plan and with a lot of love and patience, Gorkhali Kitchen
          opened for business in 2022.
        </p>
        <hr className="w-9 h-1 bg-gray-50 mx-auto rounded my-2" />

        <p className="text-sm text-gray-600">
          We are locally owned and dedicated to serving up great
          Himalayan-inspired, authentic flavors of Kathmandu City for lunch and
          dinner. Welcome to our restaurant, we hope you will love it as much as
          we do!
        </p>
        <hr className="w-9 h-1 bg-gray-50 mx-auto rounded my-2" />
      </div>

      <div className="flex-1 h-full bg-story min-h-[200px] w-full">
        {/* <img src={chef} alt="cooking_image" /> */}
      </div>
    </div>
  );
};

export default Story;
