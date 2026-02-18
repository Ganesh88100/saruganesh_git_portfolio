import { GraduationCap, MapPin, Calendar, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      title: "Full-Stack Development Intern",
      company: "Retech Solution, Chennai",
      date: "12 Feb 2025",
      type: "Python Focused",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "AWS Intern",
      company: "Aventro Private Limited",
      date: "24 Aug 2025",
      type: "Cloud Technologies",
      icon: <Briefcase className="h-5 w-5" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="hero-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate tech student with hands-on experience in modern development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a B.Tech Information Technology student at IFET College of Engineering, 
                Villupuram, with a strong foundation in computer science fundamentals and 
                a passion for solving real-world problems through technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise lies in Python development, and I'm constantly expanding 
                my skills in full-stack web development and cloud technologies. I believe 
                in writing clean, efficient code and creating user-friendly applications 
                that make a difference.
              </p>
            </div>

            {/* Education Card */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">B.Tech Information Technology</h4>
                    <p className="text-primary font-medium">IFET College of Engineering</p>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      Villupuram, Tamil Nadu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="skill-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.date}
                            </span>
                            <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* What drives me */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">What Drives Me</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Solving complex problems with simple, elegant solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Learning new technologies and staying current with industry trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Building applications that improve user experience and efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Collaborating with teams to create impactful digital solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;