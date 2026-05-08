import React from "react";
import FeatureSwipper from "./FeatureSwipper";

const Feature = () => {
  return (
    <section className="w-full">
      <div className="primary-container">
        <span className="heading-sm text-[#838383]">Feature</span>
        <h2 className="heading-md">Latest products</h2>
        <FeatureSwipper />
      </div>
    </section>
  );
};

export default Feature;
