
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ContractInfo {
  type: 'standard' | 'longterm' | 'corporate';
  date: string;
}

// Create an augmented interface to handle lastAutoTable property
interface jsPDFWithAutoTable extends jsPDF {
  lastAutoTable?: {
    finalY: number;
  };
}

export const generateContractPDF = (contractInfo: ContractInfo): jsPDF => {
  const { type, date } = contractInfo;
  const doc = new jsPDF() as jsPDFWithAutoTable;
  
  // Add header
  doc.setFontSize(22);
  doc.setTextColor(41, 41, 41);
  
  const title = type === 'standard' 
    ? 'Standard Rental Contract' 
    : type === 'longterm' 
      ? 'Long-Term Rental Contract' 
      : 'Corporate Rental Agreement';
  
  doc.text(title, 105, 20, { align: 'center' });
  
  // Add date
  doc.setFontSize(12);
  doc.text(`Date: ${date}`, 20, 30);
  
  // Company info
  doc.setFontSize(10);
  doc.text('HEAVY MACHINERY RENTALS INC.', 20, 40);
  doc.text('123 Equipment Lane', 20, 45);
  doc.text('Construction City, CA 90210', 20, 50);
  doc.text('Phone: (555) 123-4567', 20, 55);
  
  // Contract info section
  doc.setFontSize(14);
  doc.text('Contract Details', 20, 70);
  
  autoTable(doc, {
    startY: 75,
    head: [['Item', 'Description']],
    body: getContractDetails(type),
  });
  
  // Terms and conditions
  doc.setFontSize(14);
  
  // Use optional chaining to safely access the finalY property
  const finalY = doc.lastAutoTable?.finalY || 100;
  doc.text('Terms and Conditions', 20, finalY + 20);
  
  // Add terms based on contract type
  const terms = getContractTerms(type);
  let yPos = (doc.lastAutoTable?.finalY || 100) + 30;
  
  terms.forEach((term, index) => {
    doc.setFontSize(10);
    doc.text(`${index + 1}. ${term}`, 20, yPos);
    yPos += 10;
  });
  
  // Add signature lines
  yPos += 20;
  doc.setFontSize(12);
  doc.text('Signatures:', 20, yPos);
  
  yPos += 15;
  doc.line(20, yPos, 100, yPos); // Client signature line
  doc.text('Client Signature', 20, yPos + 5);
  
  doc.line(120, yPos, 190, yPos); // Company signature line
  doc.text('Company Representative', 120, yPos + 5);
  
  return doc;
};

const getContractDetails = (type: 'standard' | 'longterm' | 'corporate'): string[][] => {
  const commonDetails = [
    ['Contract Type', type === 'standard' ? 'Standard Rental' : type === 'longterm' ? 'Long-Term Rental' : 'Corporate Agreement'],
    ['Payment Terms', type === 'standard' ? 'Full payment upfront' : type === 'longterm' ? 'Monthly billing' : 'Custom billing cycle'],
  ];
  
  const specificDetails = type === 'standard' 
    ? [
        ['Duration', '1 day to 2 weeks'],
        ['Cancellation', '48-hour notice required'],
        ['Insurance', 'Standard coverage required'],
      ]
    : type === 'longterm'
      ? [
          ['Duration', '2 weeks to 12 months'],
          ['Cancellation', '7-day notice required'],
          ['Maintenance', 'Included in rental fee'],
          ['Discount', 'Up to 30% off standard rates'],
        ]
      : [
          ['Duration', 'Custom agreement periods'],
          ['Account Manager', 'Dedicated support'],
          ['Equipment Priority', 'Guaranteed availability'],
          ['Custom Terms', 'Tailored to business needs'],
        ];
        
  return [...commonDetails, ...specificDetails];
};

const getContractTerms = (type: 'standard' | 'longterm' | 'corporate'): string[] => {
  const commonTerms = [
    'Equipment must be returned in the same condition as received, normal wear and tear excepted.',
    'Renter is responsible for all damages not covered by insurance.',
    'Late returns will incur additional daily rental charges.',
  ];
  
  const specificTerms = type === 'standard'
    ? [
        'Equipment may not be subleased to any third party.',
        'Modifications to equipment are strictly prohibited.',
      ]
    : type === 'longterm'
      ? [
          'Scheduled maintenance will be performed by our technicians.',
          'Equipment swaps available with 3-day advance notice.',
          'Early termination fee applies for contracts ended before minimum term.',
        ]
      : [
          'Custom SLA terms apply as specified in the master agreement.',
          'Volume discounts calculated quarterly based on total rental value.',
          'Priority dispatch for emergency equipment needs included.',
          'Annual contract review and optimization included.',
        ];
        
  return [...commonTerms, ...specificTerms];
};
