

import React from 'react'
import CryptoSection from "../contents/home/CryptoSection"
import HeroSection from "../contents/home/HeroSection"
import CryptoTicker from "../contents/home/CryptoTicker"
import FeaturesSection from "../contents/home/FetureSection"
import FeaturesSectionSecond from "../contents/home/FetureSectionSecond"
import Security from "../contents/home/Security"
import CompanyTicker from "../contents/home/CompanyTicker"
import QuickStartGuide from "../contents/home/QuickStartGuide"
const page = () => {
  return (
    <div>
      <HeroSection/>
      <CryptoSection/>
      <CryptoTicker/>
      <FeaturesSection/>
      <FeaturesSectionSecond/>
      <Security/>
      <CompanyTicker/>
      <QuickStartGuide/>
    </div>
  )
}

export default page
