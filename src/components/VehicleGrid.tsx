
import { VehicleCard } from "./VehicleCard";
import { Construction, Hammer, Forklift, Zap, Drill } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VEHICLES = [
  {
    id: 1,
    title: "CAT D6 Bulldozer",
    type: "Bulldozer",
    location: "Denver, CO",
    price: 899,
    availability: "Available Now",
    image: "/cat1.png",
  },
  {
    id: 2,
    title: "JCB 3CX Backhoe",
    type: "Backhoe",
    location: "Phoenix, AZ",
    price: 699,
    availability: "Next Week",
    image: "/jcb1.png",
  },
  {
    id: 3,
    title: "Toyota 8FGU25 Forklift",
    type: "Forklift",
    location: "Salt Lake City, UT",
    price: 299,
    availability: "Available Now",
    image: "/toyota.png", // Fixed image path
  },
  {
    id: 4,
    title: "Atlas Copco PowerGen",
    type: "Generator",
    location: "Reno, NV",
    price: 449,
    availability: "Tomorrow",
    image: "/atlascopco.png",
  },
  {
    id: 5,
    title: "Sandvik DR412i Drill Rig",
    type: "Drill Rig",
    location: "Tuscon, AZ",
    price: 1299,
    availability: "Next Week",
    image: "/sandvik.png",
  },
  {
    id: 6,
    title: "Industrial Bandsaw XL",
    type: "Bandsaw",
    location: "Las Vegas, NV",
    price: 199,
    availability: "Available Now",
    image: "/bandsaw.png",
  }
];

export const VehicleGrid = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <nav className="mb-10 bg-white p-4 rounded-xl shadow-md">
          <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium">
            <li>
              <Link to="/" className="text-orange-500 hover:text-orange-700 transition-colors flex items-center">
                Home
              </Link>
            </li>
            <li>
              <Link to="/equipments" className="text-orange-500 hover:text-orange-700 transition-colors flex items-center">
                Equipments
              </Link>
            </li>
            <li>
              <Link to="/insurance" className="text-orange-500 hover:text-orange-700 transition-colors flex items-center">
                Insurance
              </Link>
            </li>
            <li>
              <Link to="/contract" className="text-orange-500 hover:text-orange-700 transition-colors flex items-center">
                Contract
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Heavy Equipment Rentals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional-grade construction and mining equipment available for registered users.
            Browse our selection of heavy machinery and industrial tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-2 rounded-full">
            View All Equipment
          </Button>
        </div>
      </div>
    </div>
  );
};
