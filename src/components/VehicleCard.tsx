
import { Calendar, MapPin, AlertCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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
  
  // Fix image path by removing leading slash for relative paths
  const imagePath = image.startsWith('http') ? image : image;

  return (
    <Card className="overflow-hidden hover-card border-none shadow-lg rounded-xl">
      <CardHeader className="p-0">
        <div className="relative h-52 overflow-hidden bg-gray-100">
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              // Fallback image if the original image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
              console.error(`Failed to load image: ${imagePath}`);
              target.onerror = null; // Prevent infinite error loop
            }}
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
      <CardContent className="p-5">
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
      <CardFooter className="p-5 pt-0 flex justify-between items-center">
        <div className="text-lg font-bold text-orange-600">
          ${price}
          <span className="text-sm font-normal text-muted-foreground">/day</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="secondary"
              className="bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-full"
            >
              View Details
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[90%] sm:w-[540px]">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl">{title}</SheetTitle>
            </SheetHeader>
            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden rounded-xl">
                <img
                  src={imagePath}
                  alt={title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    // Fallback image if the original image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                    console.error(`Failed to load detail image: ${imagePath}`);
                    target.onerror = null; // Prevent infinite error loop
                  }}
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Badge className="text-base px-3 py-1 rounded-full">{type}</Badge>
                  <span className="text-2xl font-bold text-orange-600">
                    ${price}<span className="text-sm font-normal text-muted-foreground">/day</span>
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-base">
                    <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                    {location}
                  </div>
                  <div className="flex items-center text-base">
                    <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                    <span className={cn(
                      isAvailableNow ? "text-green-600 font-medium" : ""
                    )}>
                      {availability}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Description</h4>
                  <p className="text-muted-foreground">
                    Professional-grade {type.toLowerCase()} available for rent. This equipment comes with 
                    full maintenance support and insurance options. Perfect for construction and industrial projects.
                  </p>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Reserve Now
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  );
};
