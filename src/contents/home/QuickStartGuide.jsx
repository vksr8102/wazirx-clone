import Image from "next/image";
import React from "react";

const QuickStartGuide = () => {
  return (
    <div className="bg-gray-900 text-white p-8 flex justify-center items-center min-h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Your Quick Start Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#19364A] text-[#2A95E5] flex items-center justify-center rounded-full text-lg font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold">Sign up on WazirX</h3>
            <p className="text-gray-400 text-sm mt-2">Begin your WazirX journey with a quick signup and smooth KYC verification process.</p>
          </div>
          
         
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#19364A] text-[#2A95E5] flex items-center justify-center rounded-full text-lg font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold">Transfer INR to Wallet</h3>
            <p className="text-gray-400 text-sm mt-2">Deposit INR to your WazirX Wallet with ease through our secure payment gateways.</p>
          </div>
          
       
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#19364A] text-[#2A95E5] flex items-center justify-center rounded-full text-lg font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold">Buy and Sell Crypto</h3>
            <p className="text-gray-400 text-sm mt-2">Buy, sell, and trade crypto effortlessly, and track seamlessly—all in one place.</p>
          </div>
        </div>
        <div className=" flex justify-center">

 <div className="my-4 max-w-[450px]  grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-[#2E3E54] h-14 sm:h-16 md:h-[70px] cursor-pointer rounded-xl flex justify-center items-center border border-gray-500/50 text-white px-4">
                                    <Image
                                        src="/google.svg" 
                                        width={140} 
                                        height={50} 
                                        alt="Google Play" 
                                        className="w-[120px] sm:w-[140px] h-auto"
                                    />
                                </div>
                                <div className="bg-[#2E3E54] h-14 sm:h-16 md:h-[70px] cursor-pointer rounded-xl flex justify-center items-center border border-gray-500/50 text-white px-4">
                                    <Image 
                                        src="/app.svg" 
                                        width={140} 
                                        height={50} 
                                        alt="App Store" 
                                        className="w-[120px] sm:w-[140px] h-auto"
                                    />
                                </div>
                                <div className=" col-span-2 w-full">

        <button className="bg-[#ECC94B] text-black font-bold p-4 rounded-lg w-full mt-2">SIGN UP</button>
                                </div>
                            </div>
        </div>

       
      </div>
    </div>
  );
};

export default QuickStartGuide;
