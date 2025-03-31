import React from 'react'
import { BiCard } from 'react-icons/bi';
import { BsTransparency } from 'react-icons/bs';
import { FaSdCard } from 'react-icons/fa';
import { MdNoEncryption } from 'react-icons/md';
import { SiAegisauthenticator } from 'react-icons/si';

const Security = () => {
    const features = [
        {
          icon: <FaSdCard size={32} className="text-white" />, 
          title: "Safekeeping Your Digital Assets",
          description: "We keep your digital assets safe with an extra layer of security.",
          bgColor: "bg-[#3BA072]",
        },
        {
          icon: <SiAegisauthenticator size={32} className="text-white" />, 
          title: "2 - Factor Authentication",
          description: "Double your WazirX account security with 2-factor authentication - choose the setup that suits you best.",
          bgColor: "bg-[#EE895B]",
        },
        {
          icon: <MdNoEncryption size={32} className="text-white" />, 
          title: "End-to-End Encryption",
          description: "We use advanced encryption and follow the highest industry standards, ensuring worry-free crypto trading and investment for you.",
          bgColor: "bg-[#F56565]",
        },
        {
          icon: <BsTransparency size={32} className="text-white" />, 
          title: "Transparency - Your Right to Know",
          description: "We don't just talk, we practice it. Explore our transparency reports, proof of reserves, and more, because informed users make better decisions.",
          bgColor: "bg-[#F56565]",
        }
      ];
  return (
    <div className='bg-[#101623]  '>
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-12 md:py-16 lg:py-20'>
            <h2 className=' text-4xl text-center mb-20'>Your Security Matters</h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className={`p-4 rounded-lg bg-[#2E3E54] flex items-center justify-center`}>{feature.icon}</div>
            <h3 className="text-lg font-bold mt-4">{feature.title}</h3>
            <p className="text-[#6F7F90] text-lg font-normal mt-2 ">{feature.description}</p>
          </div>
        ))}
      </div>
        </div>
    </div>
  )
}

export default Security
