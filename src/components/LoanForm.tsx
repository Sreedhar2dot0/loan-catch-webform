
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LoanForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "Agreement Required",
        description: "Please agree to be contacted by a bank representative.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Success!",
      description: "Your loan enquiry has been submitted successfully.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      branch: '',
      agreement: false
    });
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-[#2874d5]">
          Request For A New Loan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-sm text-muted-foreground mb-4">
            *Marked fields are mandatory.
          </div>
          
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Input
              type="tel"
              placeholder="Phone *"
              required
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Select
              value={formData.branch}
              onValueChange={(value) => setFormData({...formData, branch: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Branch *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="agreement"
              checked={formData.agreement}
              onCheckedChange={(checked) => 
                setFormData({...formData, agreement: checked as boolean})
              }
            />
            <label htmlFor="agreement" className="text-sm">
              I agree to be contacted by Cent Bank representative for loan enquiry.
            </label>
          </div>

          <Button type="submit" className="w-full bg-[#2874d5] hover:bg-[#2065c0]">
            SUBMIT
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoanForm;
