
import { Calendar, MapPin, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
  return (
    <Card className="overflow-hidden hover-card">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-4 left-4 bg-primary/90">
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {availability}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-lg font-bold">
          ${price}
          <span className="text-sm font-normal text-muted-foreground">/day</span>
        </div>
        <Button variant="secondary">View Details</Button>
      </CardFooter>
    </Card>
  );
};
