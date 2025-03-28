
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionTitle from './ui/SectionTitle';
import { Calendar, Building, Briefcase } from 'lucide-react';
import AIGlowingSphere from './experience/AIGlowingSphere';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const calculateDuration = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();
  
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();
  
  const totalMonths = years * 12 + months;
  const finalYears = Math.floor(totalMonths / 12);
  const finalMonths = totalMonths % 12;
  
  if (finalYears > 0 && finalMonths > 0) {
    return `${finalYears} year${finalYears > 1 ? 's' : ''} ${finalMonths} month${finalMonths > 1 ? 's' : ''}`;
  } else if (finalYears > 0) {
    return `${finalYears} year${finalYears > 1 ? 's' : ''}`;
  } else {
    return `${finalMonths} month${finalMonths > 1 ? 's' : ''}`;
  }
};

const experiences: ExperienceItem[] = [
  {
    title: "Senior Product Manager",
    company: "Xsolla",
    period: `May 2022 - Present · 2 yrs 11 mos`,
    description: "Leading product strategy and development for enterprise software solutions, driving growth and innovation through user-centric design and data-driven decision making.",
    achievements: [
      "Led the development of a new enterprise product that increased revenue by 30% in its first year",
      "Orchestrated product roadmap and prioritization for a suite of B2B applications",
      "Collaborated with engineering, design, and marketing teams to deliver features that increased user engagement by 45%",
      "Conducted extensive market research and competitive analysis to identify new opportunities"
    ]
  },
  {
    title: "Product Manager (Software & Hardware for Oil & Gas Team)",
    company: "SICPA",
    period: "Jan 2020 - Apr 2022 · 2 yrs 4 mos",
    description: "Led development of digital solutions for global brands, focusing on user experience and performance optimization.",
    achievements: [
      "Spearheaded the redesign of a key customer-facing application, resulting in a 35% increase in user retention",
      "Defined product requirements and user stories for agile development teams",
      "Created and maintained product roadmaps aligned with business goals and user needs",
      "Introduced a customer feedback loop that improved NPS scores by 28 points"
    ]
  },
  {
    title: "Lead Product Manager (SaaS Cloud Accounting)",
    company: "ABSS (Asian Business Software Solutions)",
    period: "May 2018 - Jan 2020 · 1 yr 9 mos",
    description: "Led the cloud product strategy and development for business software solutions targeting SMEs across Asia.",
    achievements: [
      "Led the transformation of legacy desktop software to cloud-based solutions",
      "Managed development of cloud accounting and business management tools",
      "Collaborated with regional teams to ensure products met diverse market needs",
      "Implemented agile methodologies that increased development efficiency by 40%"
    ]
  },
  {
    title: "Product Manager (Search Algorithm, Product Ranking & Online Promotion)",
    company: "11street.my (Celcom Planet Sdn Bhd)",
    period: "Jan 2015 - Apr 2018 · 3 yrs 4 mos",
    description: "Managed search functionality and online promotion systems for one of Malaysia's largest e-commerce platforms.",
    achievements: [
      "Improved search relevancy algorithms resulting in 25% higher conversion rates",
      "Designed and launched promotional features that increased merchant participation by 60%",
      "Led integration of AI-powered search recommendations that improved user engagement",
      "Collaborated with marketing teams to create data-driven promotional campaigns"
    ]
  },
  {
    title: "Project Engineer",
    company: "Technip",
    period: "Apr 2012 - Dec 2014 · 2 yrs 9 mos",
    description: "Executed multiple Brownfield and Greenfield projects in the oil and gas industry, based in Kuala Lumpur, Malaysia.",
    achievements: [
      "Successfully executed 3 Brownfield projects worth RM 2.9 million simultaneously and secured RM 500,000 in net profit (17% which is above company average 9% profit per project)",
      "Managed 3 Greenfield projects which include designing a Platform for Statoil (Norwegian)",
      "Designed a knowledge sharing portal for Project Management Department",
      "Volunteered and organized Project Management Department trip to Singapore and Bali"
    ]
  },
  {
    title: "Project Engineer",
    company: "Samsung Engineering",
    period: "Apr 2010 - Mar 2012 · 2 yrs",
    description: "Served as Mechanical Project Engineer for international oil and gas projects, based in Gangnam-gu, Seoul, Korea.",
    achievements: [
      "In charge as Mechanical Project Engineer in Shah Gas Development project located in Abu Dhabi, United Arab Emirates (U.A.E) for ADNOC (Abu Dhabi National Oil Company)",
      "Managed Procurement and Expediting for Mechanical equipment supplier from Abu Dhabi, America, China, Japan and United Kingdom",
      "Inspected Japanese Mechanical Package vendors in Kobe, Hiroshima and Tokyo just after the Fukushima Daiichi nuclear disaster",
      "Acting as Client Coordinator to manage their welfare and family needs"
    ]
  }
];

const Experience = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="experience" className="section bg-background relative">
      {/* Add subtle gradient in background */}
      <div className="absolute inset-0 dark-gradient-bg opacity-30"></div>
      
      <div className="section-inner relative z-10">
        {/* Add the AI Glowing Sphere animation before the section title */}
        <AIGlowingSphere />
        
        <SectionTitle 
          title="Professional Experience" 
          subtitle="Career Journey"
        />
        
        <div ref={sectionRef} className="reveal-text relative">
          {/* Timeline connector */}
          <div className="timeline-connector" />
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="relative pl-10 md:pl-14"
              >
                {/* Timeline dot */}
                <div className="timeline-dot" />
                
                <div className="glass-card-dark rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 text-primary">
                    <Building size={18} className="mr-2" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                  
                  <p className="mb-4 text-foreground/80">
                    {experience.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium flex items-center">
                      <Briefcase size={16} className="mr-1.5" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex">
                          <span className="mr-2 text-primary">•</span>
                          <span className="text-sm text-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
