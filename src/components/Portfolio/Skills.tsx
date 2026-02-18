import { Code, Database, Cloud, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90, color: "bg-green-500" },
        { name: "JavaScript", level: 75, color: "bg-yellow-500" },
        { name: "Java", level: 70, color: "bg-red-500" },
        { name: "C", level: 80, color: "bg-blue-500" },
      ],
    },
    {
      title: "Web Technologies",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "HTML", level: 95, color: "bg-orange-500" },
        { name: "CSS", level: 85, color: "bg-blue-600" },
        { name: "React", level: 70, color: "bg-cyan-500" },
        { name: "Node.js", level: 65, color: "bg-green-600" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 85, color: "bg-gray-600" },
        { name: "GitHub", level: 90, color: "bg-gray-800" },
        { name: "VS Code", level: 95, color: "bg-blue-700" },
        { name: "Linux", level: 70, color: "bg-yellow-600" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS Basics", level: 60, color: "bg-orange-600" },
        { name: "Docker", level: 50, color: "bg-blue-400" },
        { name: "CI/CD", level: 45, color: "bg-purple-500" },
        { name: "Cloud Deploy", level: 55, color: "bg-indigo-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="hero-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise gained through education, internships, and hands-on projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="skill-card"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly updating my skills and staying current with the latest technologies. 
                My focus areas include advanced Python frameworks, cloud computing with AWS, 
                modern frontend frameworks, and DevOps practices. I believe in hands-on learning 
                and practical application of knowledge through real-world projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;