import React, { useState, Suspense, useCallback } from "react";
import { motion } from "framer-motion";
import featuresTabData from "./featuresTabData";

// Lazy load FeaturesTabItem 
const FeaturesTabItem = React.lazy(() => import("./FeaturesTabItem"));

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  
  const handleTabClick = useCallback((id) => {
    setCurrentTab(id);
  }, []);

  return (
    <>
      {/* ===== Features Tab Start ===== */}
      <section className="relative pb-20 pt-18.5 my-10 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Tab Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-black dark:shadow-lg md:flex-nowrap md:items-center lg:gap-5 xl:mb-10 xl:gap-8"
          >
            {featuresTabData.map((feature, index) => (
              <motion.div
                key={feature.id}
                onClick={() => handleTabClick(feature.id)}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b-2 transition-colors duration-300 px-6 py-3 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-10 xl:py-4 ${
                  currentTab === feature.id
                    ? "border-b-primary dark:border-b-primary"
                    : "border-transparent hover:border-b-primary"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-black">
                  <p className="text-metatitle3 font-medium text-black dark:text-white">
                    {index + 1}
                  </p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                  <button className="text-sm font-medium text-black dark:text-white xl:text-base">
                    {feature.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            key={currentTab}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-c-1154"
          >
            {featuresTabData.map((feature) => (
              <motion.div
                key={feature.id}
                className={feature.id === currentTab ? "block" : "hidden"}
                initial={{ opacity: 0, y: -20 }}
                animate={feature.id === currentTab ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                {feature.id === currentTab && (
                  <Suspense fallback={<div>Loading...</div>}>
                    <FeaturesTabItem featureTab={feature} />
                  </Suspense>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ===== Features Tab End ===== */}
    </>
  );
};

export default FeaturesTab;
