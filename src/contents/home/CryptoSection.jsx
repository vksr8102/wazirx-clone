import React from 'react'

const CryptoSection = () => {
 
  
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16  py-12 md:py-16 lg:py-20 grid gap-8 grid-cols-2 max-sm:grid-cols-1 ">
     
  
        
        <div className="px-6 pt-6 bg-[#212C3A] rounded-xl border border-gray-500/60 shadow-lg">
          <h2 className="text-2xl font-bold">
            <span className="text-white">300+ cryptos</span> to invest in for your next big move
          </h2>
          <p className="text-gray-400 mt-2">Invest in a range of cryptos, the easy way.</p>
          <div className="mt-16">
          <img src="/btc.png" alt="" />
          </div>
        </div>

       
        <div className="px-6 pt-6 bg-[#212C3A] rounded-xl border border-gray-500/60 shadow-lg">
          <h2 className="text-2xl font-bold">
          India’s best prices, driven by highest liquidity
          </h2>
          <p className="text-gray-400 mt-2">Swift transactions meet unmatched value.</p>
          <div className="mt-16 flex justify-center">
        <img src="/crypto-data.png" alt="" />
          </div>
        </div>
      </div>
    
  )
}

export default CryptoSection
