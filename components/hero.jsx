"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate rotation
    const x = ((clientY - top) / height - 0.5) * -5; // Reduced for smoother effect
    const y = ((clientX - left) / width - 0.5) * 5;

    currentTarget.style.setProperty("--rotate-x", `${x}deg`);
    currentTarget.style.setProperty("--rotate-y", `${y}deg`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--rotate-x", `0deg`);
    e.currentTarget.style.setProperty("--rotate-y", `0deg`);
  };

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-extrabold tracking-tighter text-transparent bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text">
          Manage Your Finances with <br /> Intelligence
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Image with Tilt Effect */}
        <div className="hero-image-wrapper pt-8 mt-5 md:mt-0">
          <div
            className="hero-image"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/front.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-xl shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
