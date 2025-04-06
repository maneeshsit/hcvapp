
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { VehicleGrid } from "@/components/VehicleGrid";

const Index = () => {
  const [searchParams, setSearchParams] = useState({
    searchTerm: "",
    location: ""
  });

  return (
    <div className="min-h-screen">
      <Hero />
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
