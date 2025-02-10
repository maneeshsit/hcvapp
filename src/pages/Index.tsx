
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { VehicleGrid } from "@/components/VehicleGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <VehicleGrid />
    </div>
  );
};

export default Index;
