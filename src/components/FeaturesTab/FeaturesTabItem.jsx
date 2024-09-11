import React, { memo } from "react";

const FeaturesTabItem = ({ featureTab }) => {
  const { title, desc1, desc2, image } = featureTab;

  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 dark:bg-gray-800 p-8 my-10 rounded-lg shadow-lg transition duration-300 ease-in-out">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 hover:text-blue-500 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-lg text-indigo-600 dark:text-teal-300 mb-3">
          {desc1}
        </p>
        <p className="text-md text-gray-800 dark:text-gray-200">{desc2}</p>
      </div>

      <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
        {/* Use lazy loading for images and optimize with srcSet */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          srcSet={`
            ${image}?w=200 200w,
            ${image}?w=400 400w,
            ${image}?w=550 550w
          `}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
          className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default memo(FeaturesTabItem);
