
import { useState } from "react";
import { VehicleCard } from "./VehicleCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

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
    image: "/komatsu.png",
  },
  {
    id: 8,
    title: "Volvo A45G Articulated Hauler",
    type: "Hauler",
    location: "Boise, ID",
    price: 1199,
    availability: "Next Week",
    image: "/volvo.png",
  },
  {
    id: 9,
    title: "Liebherr LTM 1300 Crane",
    type: "Crane",
    location: "Seattle, WA",
    price: 1599,
    availability: "Available Now",
    image: "/liebherrcrane.png",
  }
];

// Extract unique types and locations for filter options
const uniqueTypes = [...new Set(VEHICLES.map(vehicle => vehicle.type))];
const uniqueLocations = [...new Set(VEHICLES.map(vehicle => vehicle.location))];
const availabilityOptions = ["All", "Available Now", "Tomorrow", "Next Week"];

export const VehicleGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [showFilters, setShowFilters] = useState(false);

  // Filter vehicles based on search criteria
  const filteredVehicles = VEHICLES.filter(vehicle => {
    const matchesSearch = vehicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vehicle.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === "" || vehicle.type === selectedType;
    const matchesLocation = selectedLocation === "" || vehicle.location === selectedLocation;
    const matchesAvailability = selectedAvailability === "All" || vehicle.availability === selectedAvailability;
    
    const matchesPrice = (priceRange.min === "" || vehicle.price >= Number(priceRange.min)) &&
                         (priceRange.max === "" || vehicle.price <= Number(priceRange.max));
    
    return matchesSearch && matchesType && matchesLocation && matchesAvailability && matchesPrice;
  });

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

        {/* Search and Filter Section */}
        <div className="bg-white p-5 rounded-xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button 
              onClick={() => setShowFilters(!showFilters)} 
              className="bg-orange-500 hover:bg-orange-600 h-12 whitespace-nowrap"
            >
              <Filter className="mr-2 h-5 w-5" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 animate-fade-up">
              <div>
                <label className="text-sm font-medium mb-1 block">Equipment Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="All Equipment Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Equipment Types</SelectItem>
                    {uniqueTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    {uniqueLocations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Availability</label>
                <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Any Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    {availabilityOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-3">
                <label className="text-sm font-medium mb-1 block">Price Range ($ per day)</label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No equipment matches your search</h3>
              <p className="text-gray-500">Try adjusting your filters or search term</p>
            </div>
          )}
        </div>

        {filteredVehicles.length > 0 && filteredVehicles.length < VEHICLES.length && (
          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-4">Showing {filteredVehicles.length} of {VEHICLES.length} equipment</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-2 rounded-full">
            View All Equipment
          </Button>
        </div>
      </div>
    </div>
  );
};
