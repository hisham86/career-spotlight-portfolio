
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

const experiences: ExperienceItem[] = [
  {
    title: "Senior Product Manager",
    company: "Microsoft",
    period: "2020 - Present",
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
    company: "Amazon",
    period: "2017 - 2020",
    description: "Managed the entire product lifecycle from ideation to launch, working closely with cross-functional teams to deliver innovative solutions that met customer needs.",
    achievements: [
      "Spearheaded the redesign of a key customer-facing application, resulting in a 35% increase in user retention",
      "Defined product requirements and user stories for agile development teams",
      "Created and maintained product roadmaps aligned with business goals and user needs",
      "Introduced a customer feedback loop that improved NPS scores by 28 points"
    ]
  },
  {
    title: "Associate Product Manager",
    company: "Google",
    period: "2015 - 2017",
    description: "Assisted in the development and launch of consumer applications, focusing on user experience research and feature prioritization.",
    achievements: [
      "Contributed to the launch of three successful products with over 2 million active users",
      "Conducted A/B testing that led to a 20% improvement in user conversion rates",
      "Collaborated with UX researchers to gather and implement user feedback",
      "Created comprehensive analytics dashboards to track KPIs and inform product decisions"
    ]
  }
];

const Experience = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="experience" className="section bg-white">
      <div className="section-inner">
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
