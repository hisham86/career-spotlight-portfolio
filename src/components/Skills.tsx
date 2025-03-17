
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionTitle from './ui/SectionTitle';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Product Management",
    skills: [
      "Product Strategy",
      "Roadmapping",
      "User Research",
      "Market Analysis",
      "Product Analytics",
      "A/B Testing",
      "Feature Prioritization",
      "Product Requirements",
      "User Stories",
      "Go-to-Market Strategy"
    ]
  },
  {
    name: "Technical Skills",
    skills: [
      "Agile & Scrum",
      "JIRA",
      "Product Analytics",
      "SQL",
      "Data Visualization",
      "Wireframing",
      "Prototyping",
      "API Design",
      "Technical Documentation",
      "Version Control"
    ]
  },
  {
    name: "Leadership",
    skills: [
      "Team Leadership",
      "Cross-functional Collaboration",
      "Stakeholder Management",
      "Executive Communication",
      "Mentoring",
      "Decision Making",
      "Project Management",
      "Resource Allocation",
      "Risk Management",
      "Change Management"
    ]
  }
];

const Skills = () => {
  const skillsRef = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="skills" className="section bg-gradient-to-b from-white to-blue-50">
      <div className="section-inner">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Professional Toolset"
        />
        
        <div 
          ref={skillsRef}
          className="reveal-text grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-lg p-6 transition-all duration-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="inline-block px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full transition-all hover:bg-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium mb-4">Tools & Methodologies</h3>
          <div className="marquee py-5">
            <div className="marquee-content">
              {[
                "Figma", "Sketch", "Adobe XD", "InVision", "Miro", "JIRA", "Confluence", 
                "Asana", "Notion", "Google Analytics", "Amplitude", "Mixpanel", "Pendo", 
                "Optimizely", "Looker", "Tableau", "Scrum", "Kanban", "Design Thinking", 
                "Lean UX", "Jobs-to-be-Done", "OKRs", "Customer Journey Mapping"
              ].map((tool, idx) => (
                <span 
                  key={idx}
                  className="inline-block mx-3 px-4 py-2 bg-white shadow-sm rounded-md text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
