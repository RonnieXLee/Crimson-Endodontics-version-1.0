import { FC, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for the fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { label: 'Meet Dr. Tran', section: 'doctor' },
    { label: 'FAQs', section: 'faq' },
    { label: 'Reviews', section: 'reviews' },
    { label: 'Location', section: 'location' },
  ];

  return (
    <nav className={cn('fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b', className)}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <img src="/endo-logo.png" alt="Crimson Endodontics" className="h-12" />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.section}
              variant="ghost"
              onClick={() => scrollToSection(item.section)}
            >
              {item.label}
            </Button>
          ))}
          <Button variant="default" onClick={() => scrollToSection('contact')}>
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-background shadow-lg md:hidden"
            style={{ top: '80px' }}
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Button
                  key={item.section}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => scrollToSection(item.section)}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="default"
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;