"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
    const words = ["Ripple", "Tron", "Matic", "Bitcoin", "Shiba Inu", "Doge"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-[#232F3F] flex items-center overflow-hidden">
         
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://media.wazirx.com/web_assets/landing_bg/dark/1x.svg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover object-center opacity-80"
                    style={{
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%)"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/40 to-black/50 opacity-90"></div>
            </div>

          
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-12 md:py-16 lg:py-20">
                <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
                    
                    <div className="text-white w-full md:w-1/2 lg:w-7/12 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4 md:mb-6">
                            <button className="bg-[#19364A] border border-[#3067F0]/30 flex gap-2 items-center text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs sm:text-sm font-semibold">
                                <Image
                                    src="/ssl-certificate.png"
                                    height={14}
                                    width={16}
                                    alt="SSL Certificate"
                                    className="h-3.5 w-4 md:h-4 md:w-5"
                                />
                                F.I.U. Registered
                            </button>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 text-center sm:text-left">
    India <span>का</span>{" "}
    <span className="relative inline-flex h-[1.5em] mx-1 align-middle min-w-[80px] sm:min-w-[100px]">
        <AnimatePresence mode="wait">
            <motion.span
                key={words[currentWordIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 right-0 w-full text-center whitespace-nowrap"
            >
                {words[currentWordIndex]}
            </motion.span>
        </AnimatePresence>
    </span>{" "}
    <br className="hidden sm:block" />
    Exchange
</h1>


                        
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8">
                            Trusted by <strong className="text-white">15 million+</strong> Indians
                        </p>
                        
                        <div className="flex flex-col items-center md:items-start gap-4 mb-8">
                            <div className="w-full max-w-[350px] md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-[#232F3F] h-14 sm:h-16 md:h-[70px] cursor-pointer rounded-xl flex justify-center items-center border border-gray-500/50 text-white px-4">
                                    <Image 
                                        src="/google.svg" 
                                        width={140} 
                                        height={50} 
                                        alt="Google Play" 
                                        className="w-[120px] sm:w-[140px] h-auto"
                                    />
                                </div>
                                <div className="bg-[#232F3F] h-14 sm:h-16 md:h-[70px] cursor-pointer rounded-xl flex justify-center items-center border border-gray-500/50 text-white px-4">
                                    <Image 
                                        src="/app.svg" 
                                        width={140} 
                                        height={50} 
                                        alt="App Store" 
                                        className="w-[120px] sm:w-[140px] h-auto"
                                    />
                                </div>
                            </div>
                            <button className="bg-[#ECC94B] w-full max-w-[350px] md:w-auto md:min-w-[250px] text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-[#f8d35a] transition-colors">
                                SIGN UP NOW
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center md:justify-end">
                        <div className="relative w-[250px] sm:w-[280px] md:w-[300px] lg:w-[350px] xl:w-[400px]">
                            <Image 
                                src="/3x.png" 
                                width={400} 
                                height={800} 
                                alt="Mobile App Preview" 
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}