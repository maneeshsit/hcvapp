
import { VehicleCard } from "./VehicleCard";

const VEHICLES = [
  {
    id: 1,
    title: "Heavy Duty Truck XL",
    type: "Truck",
    location: "New York, NY",
    price: 299,
    availability: "Available Now",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Construction Hauler Pro",
    type: "Hauler",
    location: "Los Angeles, CA",
    price: 399,
    availability: "Next Week",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Commercial Van Plus",
    type: "Van",
    location: "Chicago, IL",
    price: 199,
    availability: "Available Now",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Cargo Truck Max",
    type: "Truck",
    location: "Houston, TX",
    price: 349,
    availability: "Tomorrow",
    image: "/placeholder.svg",
  },
];

export const VehicleGrid = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLES.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};
