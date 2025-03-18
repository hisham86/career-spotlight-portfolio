
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionTitle from './ui/SectionTitle';
import { ArrowUpRight } from 'lucide-react';
import ProjectCarousel from './skills/ProjectCarousel';

interface Project {
  title: string;
  category: string;
  description: string;
  impact: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Enterprise Analytics Dashboard",
    category: "B2B Platform",
    description: "Led the development of a comprehensive analytics dashboard that transformed how enterprise customers visualize and act on their data.",
    impact: [
      "Increased user engagement by 45%",
      "Reduced data analysis time by 60%",
      "Improved customer retention by 25%"
    ],
    tags: ["User Research", "Data Visualization", "UX Design", "Analytics"]
  },
  {
    title: "Mobile Customer Experience Redesign",
    category: "Consumer Application",
    description: "Spearheaded the complete redesign of a customer-facing mobile application, focusing on simplicity and ease of use.",
    impact: [
      "Improved app store rating from 3.2 to 4.7",
      "Increased conversion rate by 35%",
      "Reduced support tickets by 28%"
    ],
    tags: ["Mobile UX", "User Testing", "Design Systems", "Personalization"]
  },
  {
    title: "Product Integration Platform",
    category: "SaaS Solution",
    description: "Conceptualized and delivered a platform allowing seamless integration between multiple product lines, creating a cohesive ecosystem.",
    impact: [
      "Generated $4.2M in additional revenue",
      "Enabled 15 new use cases for customers",
      "Reduced implementation time by 70%"
    ],
    tags: ["API Design", "Systems Integration", "Technical Requirements", "Cross-functional Collaboration"]
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectsRef = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="projects" className="section bg-background relative">
      {/* Add a subtle gradient background */}
      <div className="absolute inset-0 dark-gradient-bg opacity-50"></div>
      
      <div className="section-inner relative z-10">
        <SectionTitle 
          title="Selected Projects" 
          subtitle="Product Leadership"
        />
        
        <div 
          ref={projectsRef}
          className="reveal-text grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`glass-card-dark rounded-lg p-6 transition-all duration-300 transform ${
                hoveredProject === idx ? 'scale-[1.02] shadow-lg' : 'hover:shadow-md'
              }`}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {project.category}
                </span>
                <ArrowUpRight 
                  size={20} 
                  className={`text-primary transition-opacity duration-300 ${
                    hoveredProject === idx ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              
              <p className="text-foreground/80 mb-4">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Key Impact:</h4>
                <ul className="space-y-1">
                  {project.impact.map((item, impactIdx) => (
                    <li key={impactIdx} className="flex text-sm">
                      <span className="mr-2 text-primary">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="text-xs px-2 py-1 bg-secondary/80 text-secondary-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Screenshots Carousel */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-center">Project Screenshots</h3>
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;
