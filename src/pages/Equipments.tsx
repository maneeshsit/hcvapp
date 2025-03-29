
import { VehicleCard } from "@/components/VehicleCard";
import { Link } from "react-router-dom";

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
    image: "/toyota.png",
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
  },
  {
    id: 7,
    title: "Komatsu PC210 Excavator",
    type: "Excavator",
    location: "Portland, OR",
    price: 849,
    availability: "Available Now",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
  },
  {
    id: 8,
    title: "Volvo A45G Articulated Hauler",
    type: "Hauler",
    location: "Boise, ID",
    price: 1199,
    availability: "Next Week",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
  },
  {
    id: 9,
    title: "Liebherr LTM 1300 Crane",
    type: "Crane",
    location: "Seattle, WA",
    price: 1599,
    availability: "Available Now",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  }
];

const Equipments = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-8">
          <ul className="flex space-x-8 justify-center text-lg font-medium">
            <li>
              <Link to="/" className="text-orange-600 hover:text-orange-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/equipments" className="text-orange-600 hover:text-orange-700 font-bold border-b-2 border-orange-600 transition-colors">
                Equipments
              </Link>
            </li>
            <li>
              <Link to="/insurance" className="text-orange-600 hover:text-orange-700 transition-colors">
                Insurance
              </Link>
            </li>
            <li>
              <Link to="/contract" className="text-orange-600 hover:text-orange-700 transition-colors">
                Contract
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Equipment Fleet</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection of high-quality commercial and industrial equipment available for rent.
            All equipment is regularly serviced and maintained to the highest standards.
          </p>
        </div>
        
        <div className="mb-12">
          <div className="bg-orange-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Equipment Rental Benefits</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No long-term commitment required</li>
              <li>24/7 technical support</li>
              <li>Flexible rental periods from 1 day to 12 months</li>
              <li>Optional operator training available</li>
              <li>Delivery and pickup service to your worksite</li>
              <li>Comprehensive insurance options</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
