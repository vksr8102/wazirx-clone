import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { footerLinks, socialLinks } from "../../constant/footerlink";

const socialIcons = {
  X: BsTwitterX,
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  Telegram: FaTelegram,
  YouTube: FaYoutube,
  CoinMarketCap: SiCoinmarketcap,
};

const Footer = () => {
  return (
    <footer className="bg-[#161D2B] text-gray-300 pt-10">
      <div className="container mx-auto px-6  border-b border-gray-500/80 pb-8 md:px-4 lg:px-8">
        <div className=" border-b border-gray-500/80 mb-8 ">

        <img src="wz-logo.png" alt="logo" className="h-20 bg-cover invert brightness-50  hue-rotate-90" />

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-5 gap-8">
        
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link} className="mb-2 hover:text-white cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-white font-semibold mb-4">Socials</h3>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <li key={social.name} className="flex items-center gap-3">
                    <Icon className="text-lg text-gray-400 hover:text-white" />
                    {social.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className=" text-center text-xs py-8">
        <p>© WazirX. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
