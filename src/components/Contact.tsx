
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionTitle from './ui/SectionTitle';
import { Mail, Linkedin, MapPin, Phone, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const contactRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLFormElement>({ threshold: 0.2 });
  
  return (
    <section id="contact" className="section bg-background relative">
      {/* Add subtle gradient in background */}
      <div className="absolute inset-0 dark-gradient-bg opacity-20"></div>
      
      <div className="section-inner relative z-10">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Contact Me"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div 
            ref={contactRef}
            className="reveal-text space-y-6"
          >
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-foreground/80">
              I'm always open to discussing new product opportunities, innovative ideas, or potential collaborations. Feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hisham.mohamaf@gmail.com" className="font-medium hover:text-primary transition-colors">
                    hisham.mohamaf@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/hisham86" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    linkedin.com/in/hisham86
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Github size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a 
                    href="https://github.com/hisham86" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    github.com/hisham86
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Twitter size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Twitter</p>
                  <a 
                    href="https://x.com/Solo_Level_27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    @Solo_Level_27
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+60122803585" className="font-medium hover:text-primary transition-colors">
                    +6 (012) 280-3585
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco Bay Area</p>
                </div>
              </div>
            </div>
          </div>
          
          <form 
            ref={formRef}
            className="reveal-text glass-card-dark rounded-lg p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="Your message"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary mt-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
