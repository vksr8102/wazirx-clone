import React from 'react';
import Head from 'next/head';
import CryptoSection from "../contents/home/CryptoSection";
import HeroSection from "../contents/home/HeroSection";
import CryptoTicker from "../contents/home/CryptoTicker";
import FeaturesSection from "../contents/home/FetureSection";
import FeaturesSectionSecond from "../contents/home/FetureSectionSecond";
import Security from "../contents/home/Security";
import CompanyTicker from "../contents/home/CompanyTicker";
import QuickStartGuide from "../contents/home/QuickStartGuide";

const Page = () => {
  return (
    <div>
      <Head>
        <title>WazirX - Buy, Sell & Trade Crypto with Ease</title>
        <meta 
          name="description" 
          content="WazirX is a leading cryptocurrency exchange where you can buy, sell, and trade top cryptocurrencies like Bitcoin, Ethereum, and more with low fees and high security."
        />
        <meta 
          name="keywords" 
          content="cryptocurrency, bitcoin, ethereum, trade crypto, buy crypto, WazirX, crypto exchange"
        />
        <meta property="og:title" content="WazirX - Buy, Sell & Trade Crypto with Ease" />
        <meta 
          property="og:description" 
          content="Join WazirX, the most trusted platform to buy, sell, and trade cryptocurrencies with high security and low fees."
        />
      
      </Head>

      <HeroSection />
      <CryptoSection />
      <CryptoTicker />
      <FeaturesSection />
      <FeaturesSectionSecond />
      <Security />
      <CompanyTicker />
      <QuickStartGuide />
    </div>
  );
};

export default Page;
