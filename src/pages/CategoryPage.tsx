
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { VehicleCard } from "@/components/VehicleCard";
import { Construction, Hammer, Forklift, Zap, Drill, ArrowLeft } from "lucide-react";

// Category data including color, icon, and description
const CATEGORY_DATA = {
  bulldozers: {
    title: "Bulldozers",
    icon: Construction,
    description: "Heavy equipment used for pushing large quantities of soil, sand, rubble, or other materials during construction work.",
    color: "bg-orange-100 text-orange-600",
    benefits: [
      "Powerful earth-moving capabilities",
      "Ideal for clearing and leveling sites",
      "Various sizes available for different projects",
      "Attachments available for specialized work",
      "Operator training provided"
    ]
  },
  backhoes: {
    title: "Backhoes",
    icon: Hammer,
    description: "Versatile excavation and loader equipment with a digging bucket on the end of a two-part articulated arm.",
    color: "bg-blue-100 text-blue-600",
    benefits: [
      "Multi-purpose excavation and loading",
      "Excellent for trenching and small demolitions",
      "Compact size for urban construction sites",
      "Multiple attachment options",
      "Transportation flexibility"
    ]
  },
  forklifts: {
    title: "Forklifts",
    icon: Forklift,
    description: "Powered industrial trucks used to lift and move materials over short distances with a pronged device at the front.",
    color: "bg-green-100 text-green-600",
    benefits: [
      "Efficient material handling",
      "Various lift capacities available",
      "Indoor and outdoor models",
      "Reduces manual labor requirements",
      "Specialized attachments for different loads"
    ]
  },
  generators: {
    title: "Generators",
    icon: Zap,
    description: "Portable power systems that convert mechanical energy into electrical energy, essential for remote work sites.",
    color: "bg-purple-100 text-purple-600",
    benefits: [
      "Reliable power source for remote locations",
      "Various output capacities",
      "Fuel-efficient models available",
      "Low noise options for residential areas",
      "Emergency backup power solutions"
    ]
  },
  drillrigs: {
    title: "Drill Rigs",
    icon: Drill,
    description: "Specialized drilling equipment used for creating holes in the earth's surface for various construction purposes.",
    color: "bg-red-100 text-red-600",
    benefits: [
      "Precision drilling capabilities",
      "Various drilling depths available",
      "Specialized for different ground conditions",
      "Automated drilling systems",
      "Technical support included"
    ]
  }
};

// Equipment data filtered by category
const VEHICLES = [
  {
    id: 1,
    title: "CAT D6 Bulldozer",
    type: "Bulldozer",
    location: "Denver, CO",
    price: 899,
    availability: "Available Now",
    image: "/cat1.png",
    category: "bulldozers"
  },
  {
    id: 2,
    title: "JCB 3CX Backhoe",
    type: "Backhoe",
    location: "Phoenix, AZ",
    price: 699,
    availability: "Next Week",
    image: "/jcb1.png",
    category: "backhoes"
  },
  {
    id: 3,
    title: "Toyota 8FGU25 Forklift",
    type: "Forklift",
    location: "Salt Lake City, UT",
    price: 299,
    availability: "Available Now",
    image: "/OIP.png",
    category: "forklifts"
  },
  {
    id: 4,
    title: "Atlas Copco PowerGen",
    type: "Generator",
    location: "Reno, NV",
    price: 449,
    availability: "Tomorrow",
    image: "/atlascopco.png",
    category: "generators"
  },
  {
    id: 5,
    title: "Sandvik DR412i Drill Rig",
    type: "Drill Rig",
    location: "Tuscon, AZ",
    price: 1299,
    availability: "Next Week",
    image: "/sandvik.png",
    category: "drillrigs"
  },
  {
    id: 7,
    title: "CAT D8 Bulldozer",
    type: "Bulldozer",
    location: "Boulder, CO",
    price: 1299,
    availability: "Available Now",
    image: "/cat1.png",
    category: "bulldozers"
  },
  {
    id: 8,
    title: "JCB 4CX Backhoe",
    type: "Backhoe",
    location: "Flagstaff, AZ",
    price: 799,
    availability: "Available Now",
    image: "/jcb1.png",
    category: "backhoes"
  },
  {
    id: 9,
    title: "Toyota 7FGU30 Forklift",
    type: "Forklift",
    location: "Boise, ID",
    price: 349,
    availability: "Next Week",
    image: "/OIP.png",
    category: "forklifts"
  },
  {
    id: 10,
    title: "Honda EU7000is Generator",
    type: "Generator",
    location: "Las Vegas, NV",
    price: 299,
    availability: "Available Now",
    image: "/atlascopco.png",
    category: "generators"
  },
  {
    id: 11,
    title: "Atlas Copco SmartROC D65 Drill Rig",
    type: "Drill Rig",
    location: "Phoenix, AZ",
    price: 1499,
    availability: "Available Now",
    image: "/sandvik.png",
    category: "drillrigs"
  }
];

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  if (!category || !CATEGORY_DATA[category as keyof typeof CATEGORY_DATA]) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const categoryInfo = CATEGORY_DATA[category as keyof typeof CATEGORY_DATA];
  const filteredVehicles = VEHICLES.filter(vehicle => vehicle.category === category);
  const CategoryIcon = categoryInfo.icon;
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-orange-500 hover:text-orange-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className={`p-6 rounded-full ${categoryInfo.color} mb-4 md:mb-0`}>
              <CategoryIcon className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{categoryInfo.title}</h1>
              <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                {categoryInfo.description}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Equipment Benefits</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {categoryInfo.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-6">Available {categoryInfo.title}</h2>
        
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        ) : (
          <div className="bg-orange-50 p-8 rounded-xl text-center">
            <h3 className="text-xl font-medium mb-2">No equipment currently available</h3>
            <p className="text-muted-foreground">
              Please check back later or contact us to inquire about upcoming availability.
            </p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for? Contact our equipment specialists.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-6 rounded-full text-lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
