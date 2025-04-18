
import Header from '@/components/Header';
import LoanForm from '@/components/LoanForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#2874d5]">
                Welcome to Cent Bank Home Finance
              </h2>
              <p className="text-gray-600">
                Take the first step towards owning your dream home. Fill out the form to get started with your loan enquiry.
              </p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="font-semibold text-[#2874d5] mb-2">Why Choose Us?</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Competitive interest rates</li>
                  <li>Quick loan processing</li>
                  <li>Dedicated support team</li>
                  <li>Flexible repayment options</li>
                </ul>
              </div>
            </div>
            <div>
              <LoanForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
