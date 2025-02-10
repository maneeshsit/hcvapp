
import { Construction, Hammer, Forklift, Zap, Drill } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CATEGORIES = [
  {
    title: "Bulldozers",
    icon: Construction,
    count: 45,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Backhoes",
    icon: Hammer,
    count: 32,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Forklifts",
    icon: Forklift,
    count: 28,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Generators",
    icon: Zap,
    count: 24,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Drill Rigs",
    icon: Drill,
    count: 18,
    color: "bg-red-100 text-red-600",
  },
];

export const Categories = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => (
            <Card key={category.title} className="hover-card cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`p-4 rounded-full mb-4 ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.count} units</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
