
import { Truck, Bus, Car, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CATEGORIES = [
  {
    title: "Trucks",
    icon: Truck,
    count: 150,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Buses",
    icon: Bus,
    count: 85,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Vans",
    icon: Car,
    count: 120,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Special",
    icon: ShieldCheck,
    count: 45,
    color: "bg-orange-100 text-orange-600",
  },
];

export const Categories = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Card key={category.title} className="hover-card cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`p-4 rounded-full mb-4 ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.count} vehicles</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
