import { Link } from "react-router-dom";
import { FileText, Check, Clipboard, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContractDownload } from "@/components/ContractDownload";

const Contract = () => {
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
              <Link to="/insurance" className="text-orange-600 hover:text-orange-700 transition-colors">
                Insurance
              </Link>
            </li>
            <li>
              <Link to="/contract" className="text-orange-600 hover:text-orange-700 font-bold border-b-2 border-orange-600 transition-colors">
                Contract
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Rental Contracts</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Review our contract options and learn about our rental terms and conditions.
            We offer flexible agreements to suit your specific project needs.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <FileText className="h-12 w-12 text-orange-500 mr-4" />
            <h2 className="text-3xl font-bold">Contract Information</h2>
          </div>
          
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="standard">Standard Rental</TabsTrigger>
              <TabsTrigger value="longterm">Long-Term Rental</TabsTrigger>
              <TabsTrigger value="corporate">Corporate Agreement</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard" className="p-4 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Standard Rental Contract</h3>
              <p className="mb-4">
                Our standard rental contract is perfect for short-term projects lasting from 1 day to 2 weeks.
                This agreement includes basic terms and conditions for equipment usage, return policies,
                and damage liability.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Minimum rental period: 1 day</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>48-hour cancellation policy</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Standard insurance requirements</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Full payment due at rental start</span>
                </div>
              </div>
              <div className="flex gap-4">
                <ContractDownload contractType="standard" />
                <Button variant="outline" className="flex gap-2">
                  <Clipboard className="h-5 w-5" />
                  Request Copy
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="longterm" className="p-4 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Long-Term Rental Contract</h3>
              <p className="mb-4">
                Our long-term rental contract is designed for projects lasting from 2 weeks to 12 months.
                Enjoy reduced daily rates, flexible payment schedules, and priority maintenance support.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Discounted rates (up to 30% off daily price)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Monthly payment options</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maintenance included</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Equipment swap options</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>7-day cancellation policy</span>
                </div>
              </div>
              <div className="flex gap-4">
                <ContractDownload contractType="longterm" />
                <Button variant="outline" className="flex gap-2">
                  <Clipboard className="h-5 w-5" />
                  Request Copy
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="corporate" className="p-4 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Corporate Rental Agreement</h3>
              <p className="mb-4">
                Our corporate rental agreement is tailored for businesses with ongoing equipment needs.
                Establish a relationship with us for preferred pricing, dedicated account management,
                and customized terms suited to your business operations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom pricing based on volume</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority equipment availability</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Flexible billing and payment terms</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Annual contract review and optimization</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="flex gap-2" onClick={() => document.getElementById('consultation-modal')?.click()}>
                  <Calendar className="h-5 w-5" />
                  Schedule Consultation
                </Button>
                <ContractDownload contractType="corporate" buttonVariant="outline" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-md transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Rental Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Valid business license or contractor ID</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Proof of insurance (or purchase our coverage)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Valid driver's license for transport vehicles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Security deposit (refundable)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Signed rental agreement</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Rental Process</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <div>
                    <span className="font-medium">Select Equipment</span>
                    <p className="text-sm text-gray-600">Browse and choose the equipment that fits your project needs</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <div>
                    <span className="font-medium">Schedule Rental</span>
                    <p className="text-sm text-gray-600">Select your rental dates and delivery options</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <span className="font-medium">Contract & Payment</span>
                    <p className="text-sm text-gray-600">Review and sign the rental agreement, process payment</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                  <div>
                    <span className="font-medium">Equipment Use</span>
                    <p className="text-sm text-gray-600">Receive, use, and return equipment according to agreement terms</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contract;
