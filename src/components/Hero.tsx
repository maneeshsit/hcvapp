
import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm" />
        <img
          src="/placeholder.svg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find Your Perfect Commercial Vehicle
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Rent or share heavy commercial vehicles with ease
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Input 
                  placeholder="Location" 
                  className="pl-10" 
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Input 
                  type="date" 
                  className="pl-10" 
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Search className="mr-2 h-5 w-5" />
                Search Vehicles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
