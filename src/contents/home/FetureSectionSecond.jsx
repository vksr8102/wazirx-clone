"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const FeaturesSectionSecond = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    { text: "Stay informed, stay engaged - an all-inclusive dashboard, keeping you always in action.", color: "bg-blue-500" },
    { text: "Simplify your crypto trading journey with QuickBuy—the fastest way to buy and sell your favorites.", color: "bg-blue-500" },
    { text: "Take control with advanced P&L tracking for smarter decision-making.", color: "bg-blue-500" },
    { text: "Refer, Earn, Repeat: With our unique Referral Program, you can invite friends and earn up to 50% of their trading fees.", color: "bg-blue-500" },
  ];

  const words = ["i1.png", "i2.png", "i3.png"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const cycleImages = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);

    return () => clearInterval(cycleImages);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length); 
    }, 6000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
      <div className="grid md:grid-cols-2 gap-40">
        <div className="max-w-2xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-white mb-8">Features You Will Love</h2>
          {features.map((feature, index) => (
          <div 
            key={index} 
            className="relative pb-1 my-8 cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <p
              className={`text-lg leading-relaxed transition-all my-6 duration-500 ${
                activeIndex === index ? "text-white " : "text-gray-300"
              }`}
            >
              {feature.text}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-gray-500/80"></div>
            {activeIndex === index && (
              <motion.div
                className={`absolute bottom-0 left-0 rounded-full h-1 ${feature.color}`}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6 }} 
              />
            )}
          </div>
        ))}
        </div>

        <div className="col-span-1 flex justify-center">
          <img
            src={words[currentWordIndex]}
            alt="Mobile App Preview"
            className="w-8/12 h-screen"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionSecond;
