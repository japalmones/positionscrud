"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });

interface ImageCardProps {
  src: string;
}

function ImageCard({ src }: ImageCardProps) {
  return (
    <div className="flex items-center justify-center border-2 border-purple-400 rounded-2xl shadow-lg hover:scale-105 transition w-[180px] h-[240px] bg-purple-700/20 overflow-hidden">
      <Image
        src={src}
        alt="Hobby Image"
        width={180}
        height={240}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default function Hobbies() {
  const [hideNav, setHideNav] = useState(false);
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true); 
  }, []);

  useEffect(() => {
    if (!mounted) return; 

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen font-sans overflow-y-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      ></div>

      <nav
        className={`flex gap-6 fixed top-6 right-6 z-20 transition-transform duration-300 ${
          hideNav ? "-translate-y-24" : "translate-y-0"
        }`}
      >
        {["Home", "About", "Contact", "Education"].map((text) => (
          <a
            key={text}
            href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
            className="relative px-6 py-2 bg-purple-600 text-white text-lg rounded-xl font-medium 
                       shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all
                       before:absolute before:inset-0 before:rounded-xl before:bg-purple-400/20 before:blur-md before:opacity-0 hover:before:opacity-100"
          >
            {text}
          </a>
        ))}
      </nav>

      <div className="relative flex flex-col items-center pt-32 pb-20 px-10 bg-purple-900/20 text-center animate-fadeIn">
        <h1 className={`${kaushan.className} text-6xl text-purple-200 drop-shadow-2xl mb-10`}>
          My Hobbies
        </h1>
        <p className="text-xl text-purple-100 mb-10 max-w-2xl">
          Here are some of the things I love doing in my free time:
        </p>

        <h2 className={`${kaushan.className} text-4xl text-purple-300 mb-6`}>Drawing 🎨</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <ImageCard src="/Mr.Bean.jpg" />
          <ImageCard src="/makishima.jpg" />
          <ImageCard src="/andrea.jpg" />
          <ImageCard src="/random1.jpg" />
          <ImageCard src="/hisoka.jpg" />
          <ImageCard src="/maloi.jpg" />
          <ImageCard src="/harry.jpg" />
          <ImageCard src="/random.jpg" />
          <ImageCard src="/Leesin.jpg" />
        </div>

        <h2 className={`${kaushan.className} text-4xl text-purple-300 mb-6`}>Chess ♟️</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <ImageCard src="/chess1.jpg" />
          <ImageCard src="/chess.jpg" />
          <ImageCard src="/chess2.jpg" />
        </div>

        <h2 className={`${kaushan.className} text-4xl text-purple-300 mb-6`}>Playing Guitar 🎸</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <ImageCard src="/guitar.jpg" />
          <ImageCard src="/guitar2.jpg" />
          <ImageCard src="/guitar3.jpg" />
        </div>
      </div>

      <style>
        {`
          .animate-fadeIn {
            opacity: 0;
            animation: fadeIn 1s ease-in forwards;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
