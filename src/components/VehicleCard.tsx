
import { Calendar, MapPin, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  title: string;
  type: string;
  location: string;
  price: number;
  availability: string;
  image: string;
}

export const VehicleCard = ({
  title,
  type,
  location,
  price,
  availability,
  image,
}: VehicleCardProps) => {
  const isAvailableNow = availability === "Available Now";

  return (
    <Card className="overflow-hidden hover-card border-2">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge 
            className={cn(
              "absolute top-4 left-4",
              type === "Bulldozer" || type === "Drill Rig" ? "bg-orange-500" :
              type === "Generator" ? "bg-blue-500" :
              "bg-primary/90"
            )}
          >
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-orange-500" />
            {location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-orange-500" />
            <span className={cn(
              isAvailableNow ? "text-green-600 font-medium" : ""
            )}>
              {availability}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-lg font-bold text-orange-600">
          ${price}
          <span className="text-sm font-normal text-muted-foreground">/day</span>
        </div>
        <Button 
          variant="secondary"
          className="bg-orange-100 hover:bg-orange-200 text-orange-700"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
