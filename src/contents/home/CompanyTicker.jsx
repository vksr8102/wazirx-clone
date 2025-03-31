import React from 'react'
import "./marquee.css"; 
const CompanyTicker = () => {
  const comapanyList = [
   {img:"/1x.svg"},
   {img:"/2x.svg"},
   {img:"/3x.svg"},
   {img:"/4x.svg"},
   {img:"/5x.svg"},
   {img:"/6x.svg"},
   {img:"/7x.svg"},
   {img:"/8x.svg"},
   {img:"/9x.svg"},
   {img:"/10x.svg"},
  ];
  return (
    <div className='overflow-hidden uppercase bg-[#101623]'>
      <p className=' text-center mb-4 text-[#6B7A8B]'>In The Media</p>
       <div className="flex space-x-6 px-4   animate-marquee whitespace-nowrap hover:pause-marquee">
        {comapanyList.concat(comapanyList).map((company, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 cursor-pointer px-4 transition-all duration-200`}
           
          >
         <img src={company.img} alt={company.img} className=' w-[200px]  ' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyTicker
