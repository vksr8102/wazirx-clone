import React from "react";
import { BiCode, BiHelpCircle } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";

const features = [
  {
    icon: <BsShieldCheck size={32} className="text-white" />, 
    title: "KYC - Swift & Compliant",
    description: "Experience seamless onboarding with swift KYC processes, ensuring full compliance with regulations.",
    bgColor: "bg-[#3BA072]",
  },
  {
    icon: <BiHelpCircle size={32} className="text-white" />, 
    title: "24/7 Support",
    description: "Like a trusted friend, our 24/7 expert support is always there, making your crypto investment journey smoother.",
    bgColor: "bg-[#EE895B]",
  },
  {
    icon: <BiCode size={32} className="text-white" />, 
    title: "Seamless API Trading",
    description: "Amplify your crypto trading experience with WazirX through seamless API integration.",
    bgColor: "bg-[#F56565]",
  }
];

const FeaturesSection = () => {
  return (
    <div className=" text-white  my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className={`p-4 rounded-lg ${feature.bgColor} flex items-center justify-center`}>{feature.icon}</div>
            <h3 className="text-lg font-bold mt-4">{feature.title}</h3>
            <p className="text-[#6F7F90] text-lg font-normal mt-2 ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;