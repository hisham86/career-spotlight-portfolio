
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionTitle from './ui/SectionTitle';
import { Calendar, Building, Briefcase } from 'lucide-react';

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
    title: "Product Manager & Entrepreneur",
    company: "Xsolla",
    period: `May 2022 - Present (${calculateDuration('2022-05-01')})`,
    description: "Leading product strategy and development for enterprise software solutions, driving growth and innovation through user-centric design and data-driven decision making.",
    achievements: [
      "Led the development of a new enterprise product that increased revenue by 30% in its first year",
      "Orchestrated product roadmap and prioritization for a suite of B2B applications",
      "Collaborated with engineering, design, and marketing teams to deliver features that increased user engagement by 45%",
      "Conducted extensive market research and competitive analysis to identify new opportunities"
    ]
  },
  {
    title: "Product Manager",
    company: "Commerce Media",
    period: `Jan 2020 - Apr 2022 (2 years 4 months)`,
    description: "Led development of digital marketing and e-commerce solutions for global brands, focusing on user experience and performance optimization.",
    achievements: [
      "Spearheaded the redesign of a key customer-facing application, resulting in a 35% increase in user retention",
      "Defined product requirements and user stories for agile development teams",
      "Created and maintained product roadmaps aligned with business goals and user needs",
      "Introduced a customer feedback loop that improved NPS scores by 28 points"
    ]
  },
  {
    title: "Entrepreneur",
    company: "Various Startups",
    period: "Jan 2015 - Dec 2019 (5 years)",
    description: "Founded and managed multiple technology startups, with a focus on mobile applications and digital solutions for businesses.",
    achievements: [
      "Successfully launched three mobile applications with over 500,000 combined downloads",
      "Secured seed funding for two ventures, totaling $850,000",
      "Built and led cross-functional teams of developers, designers, and marketers",
      "Developed strategic partnerships with key industry players to accelerate growth"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Technology Solutions Inc.",
    period: "Jun 2010 - Dec 2014 (4 years 7 months)",
    description: "Developed scalable enterprise software solutions and led development teams in implementing complex technical requirements.",
    achievements: [
      "Architected and implemented a microservices platform that reduced system downtime by 75%",
      "Led a team of 8 engineers in the development of a high-performance data processing system",
      "Improved code quality and reduced bugs by implementing comprehensive testing strategies",
      "Mentored junior developers and introduced best practices that increased team productivity by 30%"
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
