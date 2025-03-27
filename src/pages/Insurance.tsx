
import { Link } from "react-router-dom";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Insurance = () => {
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
              <Link to="/vehicles" className="text-orange-600 hover:text-orange-700 transition-colors">
                Vehicles
              </Link>
            </li>
            <li>
              <Link to="/insurance" className="text-orange-600 hover:text-orange-700 font-bold border-b-2 border-orange-600 transition-colors">
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
          <h1 className="text-4xl font-bold mb-4">Equipment Insurance Options</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Protect your rental investment with our comprehensive insurance plans.
            We offer various coverage options to ensure peace of mind during your equipment usage.
          </p>
        </div>
        
        <div className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <div className="flex items-center mb-6">
            <Shield className="h-12 w-12 text-orange-500 mr-4" />
            <h2 className="text-3xl font-bold">Why Insurance Matters</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Heavy equipment represents a significant investment, and accidents can happen even with
            the most experienced operators. Our insurance plans provide coverage for a variety of
            situations, from minor damages to major accidents. Protect yourself from unexpected
            financial burdens with the right coverage plan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <p>Protection against damage during operation</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <p>Coverage for theft or vandalism</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <p>Third-party liability protection</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <p>Weather-related damage coverage</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-2 hover:border-orange-300 transition-all">
            <CardHeader className="bg-gray-100 pt-6 pb-4 px-6">
              <h3 className="text-2xl font-bold text-center">Basic Coverage</h3>
              <p className="text-center text-3xl font-bold text-orange-600 mt-4">$25/day</p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Damage protection up to $10,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Basic theft protection</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>$2,000 deductible</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Select Plan</Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-orange-500 shadow-lg relative">
            <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-1 text-sm font-medium">
              MOST POPULAR
            </div>
            <CardHeader className="bg-gray-100 pt-10 pb-4 px-6">
              <h3 className="text-2xl font-bold text-center">Premium Coverage</h3>
              <p className="text-center text-3xl font-bold text-orange-600 mt-4">$45/day</p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Damage protection up to $50,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive theft protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Weather damage coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>$500 deductible</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Select Plan</Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-orange-300 transition-all">
            <CardHeader className="bg-gray-100 pt-6 pb-4 px-6">
              <h3 className="text-2xl font-bold text-center">Enterprise Coverage</h3>
              <p className="text-center text-3xl font-bold text-orange-600 mt-4">$75/day</p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unlimited damage protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Full theft protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Third-party liability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Zero deductible</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>24/7 priority support</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Select Plan</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
