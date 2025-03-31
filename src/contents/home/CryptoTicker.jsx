"use client"
import React, { useState } from "react";
import "./marquee.css"; 

const cryptoData = [
  { name: "BTC", price: "₹23290", change: "▲ 0%" },
  { name: "ONDO", price: "₹97.0000", change: "▲ 0%" },
  { name: "PEPE", price: "₹0.0010350", change: "▲ 0%" },
  { name: "RAVENCOIN", price: "₹1.8094", change: "▲ 0%" },
  { name: "OPEN CUSTODY PROTOCOL", price: "₹1.0509", change: "▲ 0%" },
  { name: "PEPE", price: "₹0.0010350", change: "▲ 0%" },
  { name: "RAVENCOIN", price: "₹1.8094", change: "▲ 0%" },
  { name: "OPEN CUSTODY PROTOCOL", price: "₹1.0509", change: "▲ 0%" },
  { name: "PEPE", price: "₹0.0010350", change: "▲ 0%" },
  { name: "RAVENCOIN", price: "₹1.8094", change: "▲ 0%" },
  { name: "OPEN CUSTODY PROTOCOL", price: "₹1.0509", change: "▲ 0%" },
  { name: "IOTX", price: "₹4.300", change: "▲ 0%" }
];

const CryptoTicker = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="py-4 text-white border-b border-t border-gray-500/80  overflow-hidden">
      <div className="flex space-x-6 px-4 animate-marquee whitespace-nowrap hover:pause-marquee">
        {cryptoData.concat(cryptoData).map((crypto, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 cursor-pointer px-4 transition-all duration-200 ${hoveredIndex === null ? "opacity-100" : hoveredIndex === index ? "text-white opacity-100" : "opacity-50"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="font-bold">{crypto.name}</span>
            <span>{crypto.price}</span>
            <span className="bg-green-600/50 text-sm px-2 py-1 rounded">{crypto.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
