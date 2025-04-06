
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  onSearch?: (searchTerm: string, location: string) => void;
}

export const Hero = ({ onSearch }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 backdrop-blur-sm" />
        <img
          src="/placeholder.svg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find Your Perfect Commercial Equipment
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rent or share heavy commercial equipment with ease. Professional solutions for every project.
          </p>
        </div>
      </div>
    </div>
  );
};
