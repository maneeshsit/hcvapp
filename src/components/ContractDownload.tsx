
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { generateContractPDF } from "@/utils/pdfGenerator";
import { toast } from '@/hooks/use-toast';

interface ContractDownloadProps {
  contractType: 'standard' | 'longterm' | 'corporate';
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const ContractDownload: React.FC<ContractDownloadProps> = ({ 
  contractType, 
  buttonVariant = "default" 
}) => {
  const handleDownload = () => {
    try {
      const today = new Date().toLocaleDateString();
      const doc = generateContractPDF({
        type: contractType,
        date: today
      });
      
      const fileName = `${contractType}-rental-contract-${Date.now()}.pdf`;
      doc.save(fileName);
      
      toast({
        title: "Download Started",
        description: `Your ${contractType} contract PDF is downloading.`,
      });
    } catch (error) {
      console.error("PDF generation error:", error);
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: "There was a problem generating your PDF. Please try again.",
      });
    }
  };
  
  const getButtonText = () => {
    switch (contractType) {
      case 'standard':
        return 'Download Standard Contract';
      case 'longterm':
        return 'Download Long-Term Contract';
      case 'corporate':
        return 'Download Corporate Agreement';
      default:
        return 'Download Contract';
    }
  };
  
  return (
    <Button 
      variant={buttonVariant}
      className="flex gap-2" 
      onClick={handleDownload}
    >
      <Download className="h-5 w-5" />
      {getButtonText()}
    </Button>
  );
};
