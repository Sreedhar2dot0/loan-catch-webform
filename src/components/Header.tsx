
import { Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#2874d5] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-xl font-bold">Cent Bank Home Finance Limited</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>customercare@cbhfl.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>1800-8896-606</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
