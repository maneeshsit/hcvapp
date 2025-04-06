
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { VehicleGrid } from "@/components/VehicleGrid";

const Index = () => {
  const [searchParams, setSearchParams] = useState({
    searchTerm: "",
    location: ""
  });

  const handleSearch = (searchTerm: string, location: string) => {
    setSearchParams({ searchTerm, location });
    
    // Scroll to vehicle grid section
    const vehicleGridElement = document.getElementById('vehicle-grid');
    if (vehicleGridElement) {
      vehicleGridElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero onSearch={handleSearch} />
      <Categories />
      <div id="vehicle-grid">
        <VehicleGrid 
          initialSearchTerm={searchParams.searchTerm}
          initialLocation={searchParams.location}
        />
      </div>
    </div>
  );
};

export default Index;
