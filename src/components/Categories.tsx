
import { Construction, Hammer, Forklift, Zap, Drill } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    title: "Bulldozers",
    icon: Construction,
    count: 45,
    color: "bg-orange-100 text-orange-600",
    link: "/category/bulldozers"
  },
  {
    title: "Backhoes",
    icon: Hammer,
    count: 32,
    color: "bg-blue-100 text-blue-600",
    link: "/category/backhoes"
  },
  {
    title: "Forklifts",
    icon: Forklift,
    count: 28,
    color: "bg-green-100 text-green-600",
    link: "/category/forklifts"
  },
  {
    title: "Generators",
    icon: Zap,
    count: 24,
    color: "bg-purple-100 text-purple-600",
    link: "/category/generators"
  },
  {
    title: "Drill Rigs",
    icon: Drill,
    count: 18,
    color: "bg-red-100 text-red-600",
    link: "/category/drillrigs"
  },
];

export const Categories = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Browse Equipment</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Find the perfect equipment for your next project from our extensive catalog
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => (
            <Link to={category.link} key={category.title}>
              <Card className="hover-card cursor-pointer border-none shadow-lg rounded-xl overflow-hidden h-full transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`p-4 rounded-full mb-4 ${category.color}`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.count} units</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
