import { motion } from 'framer-motion';
import { FC } from 'react';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import EndoCareImage from '@/components/EndoCareImage';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Dr. Tran and his team are amazing! They made my root canal procedure completely painless and comfortable."
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Very professional and modern facility. Dr. Tran took the time to explain everything clearly."
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Best endodontist in the area! The staff is friendly and the care is top-notch."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/Tooth AI - Blue Molar.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto relative z-10 px-4 pt-32 pb-16">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1 space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold">
                Crimson Endodontics
              </h1>
              <p className="text-lg opacity-90">
                Specialized root canal treatment with a focus on patient comfort and the latest technology
              </p>
              <Button 
                size="lg" 
                variant="default"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule an Appointment
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <EndoCareImage width={500} height={400} className="bg-white/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-primary/5 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="text-primary h-5 w-5" />
              <p>244 River Street, Dedham, MA 02026</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary h-5 w-5" />
              <p>(617) 555-1234</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-primary h-5 w-5" />
              <p>Mon-Fri: 8AM - 5PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Tran Section */}
      <section id="doctor" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <img 
                src="/Photo-David_Tran.jpg" 
                alt="Dr. David Tran"
                className="rounded-lg shadow-xl max-w-md mx-auto"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Meet Dr. David Tran, DMD</h2>
              <div className="prose prose-lg">
                <p>
                  Dr. David Tran earned his Doctor of Medicine in Dentistry from Boston University Dental School 
                  and a certificate in Endodontics from Harvard Medical School. His career began with a passion 
                  for comprehensive dental care, ensuring that each patient receives thorough treatment planning 
                  and evaluation early on.
                </p>
                <p>
                  Dr. Tran has been practicing in the Boston Metro Area for several years, earning a reputation 
                  for exceptional quality and a conservative approach to dental treatment.
                </p>
                <p>
                  Outside of the office, Dr. Tran enjoys spending time with his wife Janet and their daughter Audrey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="what-is">
                <AccordionTrigger>What is a root canal?</AccordionTrigger>
                <AccordionContent>
                  A root canal is a dental procedure that removes infected or damaged pulp from inside a tooth. 
                  The space is then cleaned, filled, and sealed to protect it from future infection. This 
                  procedure saves teeth that would otherwise need to be extracted.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="why-need">
                <AccordionTrigger>Why do I need a root canal?</AccordionTrigger>
                <AccordionContent>
                  A root canal may be necessary if you have severe tooth decay, a cracked tooth, or an injury 
                  that has damaged the tooth's pulp. Signs you might need a root canal include severe tooth pain, 
                  sensitivity to hot and cold, swollen gums, or darkening of the tooth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pain">
                <AccordionTrigger>Do root canals hurt?</AccordionTrigger>
                <AccordionContent>
                  Modern root canal procedures are virtually painless thanks to advanced techniques and anesthesia. 
                  Most patients report that it's no more uncomfortable than getting a filling. Any discomfort you 
                  may have been experiencing due to infection will be relieved by the procedure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="recovery">
                <AccordionTrigger>How long does it take to recover from a root canal?</AccordionTrigger>
                <AccordionContent>
                  Most patients return to their normal activities the day after the procedure. Some mild 
                  discomfort may be present for a few days but can be managed with over-the-counter pain 
                  medication. Full healing typically occurs within a week.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="insurance">
                <AccordionTrigger>Is a root canal covered by insurance?</AccordionTrigger>
                <AccordionContent>
                  Most dental insurance plans cover root canal procedures as they are considered a medically 
                  necessary treatment. Coverage typically ranges from 50% to 80% of the cost after deductibles. 
                  We recommend checking with your insurance provider for specific coverage details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              What Our Patients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <p className="font-medium">{testimonial.name}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="https://www.google.com/search?q=Crimson+Endodontics+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                See more reviews on Google
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location and Hours Section */}
      <section id="location" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="space-y-12">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Visit Our Office
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary h-5 w-5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p>244 River Street, Dedham, MA 02026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary h-5 w-5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p>(617) 555-1234</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary h-5 w-5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p>info@crimsonendodontics.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary h-5 w-5" />
                    <div>
                      <h3 className="font-medium">Hours of Operation</h3>
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.9762452204533!2d-71.1661413!3d42.2487567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37f4d7d5c3c45%3A0x1cb5c444c8a33f06!2s244%20River%20St%2C%20Dedham%2C%20MA%2002026!5e0!3m2!1sen!2sus!4v1707780000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center">Contact Us</h2>
            <Card className="p-6">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                    <Input id="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                    <Input id="email" type="email" required placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone *</label>
                    <Input id="phone" type="tel" required placeholder="Your phone number" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea id="message" placeholder="How can we help you?" className="h-32" />
                  </div>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}