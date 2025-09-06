import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Download, Search, Award, Calendar, Hash } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Certificate {
  id: string;
  participantName: string;
  workshopName: string;
  year: string;
  dateIssued: string;
  certificateUrl: string;
}

// Mock certificate data - in real app, this would come from API
const mockCertificates: Certificate[] = [
  {
    id: "CS2024001",
    participantName: "Alex Johnson",
    workshopName: "Arduino Fundamentals Workshop",
    year: "2024",
    dateIssued: "March 15, 2024",
    certificateUrl: "/certificates/CS2024001.pdf"
  }
];

const Certificate = () => {
  const [year, setYear] = useState("");
  const [participantId, setParticipantId] = useState("");
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!year || !participantId) {
      toast({
        title: "Missing Information",
        description: "Please enter both year and participant ID",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setSearched(true);

    // Simulate API call
    setTimeout(() => {
      const foundCertificate = mockCertificates.find(
        cert => cert.year === year && cert.id === participantId
      );

      if (foundCertificate) {
        setCertificate(foundCertificate);
        toast({
          title: "Certificate Found!",
          description: `Certificate for ${foundCertificate.participantName} found successfully.`,
        });
      } else {
        setCertificate(null);
        toast({
          title: "Certificate Not Found",
          description: "No certificate found with the provided details. Please check your year and ID.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 1500);
  };

  const handleDownload = () => {
    if (certificate) {
      // In a real app, this would download the actual certificate
      toast({
        title: "Download Started",
        description: "Your certificate is being downloaded.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Certificate Portal</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Download Your</span>
            <br />
            Workshop Certificate
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your participant details to retrieve and download your workshop completion certificate
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="card-tech">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Find Your Certificate
              </CardTitle>
              <CardDescription>
                Enter your workshop year and participant ID to retrieve your certificate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="year" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Workshop Year
                </Label>
                <Input
                  id="year"
                  placeholder="e.g., 2024"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  maxLength={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="participantId" className="flex items-center gap-2">
                  <Hash className="w-4 h-4" />
                  Student ID
                </Label>
                <Input
                  id="participantId"
                  placeholder="e.g., 59243"
                  value={participantId}
                  onChange={(e) => setParticipantId(e.target.value.toUpperCase())}
                />
              </div>
              
              <Button 
                onClick={handleSearch} 
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Searching...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Search Certificate
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Certificate Display */}
        {searched && (
          <div className="max-w-2xl mx-auto">
            {certificate ? (
              <Card className="card-tech">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Award className="w-6 h-6" />
                    Certificate Found
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                      <span className="text-muted-foreground">Participant Name:</span>
                      <span className="font-semibold">{certificate.participantName}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                      <span className="text-muted-foreground">Workshop:</span>
                      <span className="font-semibold">{certificate.workshopName}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                      <span className="text-muted-foreground">Certificate ID:</span>
                      <span className="font-mono font-semibold">{certificate.id}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                      <span className="text-muted-foreground">Date Issued:</span>
                      <span className="font-semibold">{certificate.dateIssued}</span>
                    </div>
                  </div>
                  
                  <Button onClick={handleDownload} className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="card-tech">
                <CardContent className="text-center py-12">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Certificate Not Found</h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn't find a certificate matching your details. Please verify:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left max-w-sm mx-auto">
                    <li>• Workshop year is correct</li>
                    <li>• Participant ID is entered correctly</li>
                    <li>• You have completed the workshop</li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Help Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="card-tech">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>
                Having trouble finding your certificate? Here are some common issues and solutions.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-1 gap-6">
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">Still can't find your certificate?</h4>
                <p className="text-sm text-muted-foreground">
                  Contact us at certificates@roboticsclub.edu with your full name, workshop name, 
                  and the date you completed the workshop.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Certificate;