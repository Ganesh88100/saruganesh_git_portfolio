import { Globe, Smartphone, Code, Zap, Users, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies. From simple landing pages to complex web applications.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "SEO Optimized",
        "Fast Loading",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App Development",
      description: "Simple, functional mobile and web applications that solve real problems and provide excellent user experience.",
      features: [
        "Cross-Platform",
        "User-Friendly",
        "Scalable Architecture",
        "API Integration",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Python Solutions",
      description: "Custom Python applications, automation scripts, and backend development with my strong Python expertise.",
      features: [
        "Backend Development",
        "API Development",
        "Data Processing",
        "Automation Scripts",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const whyChooseMe = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Approach",
      description: "Regular updates and feedback throughout the development process",
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "Post-delivery support and maintenance for your peace of mind",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="hero-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Freelance development services tailored to your needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="skill-card group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/5 group-hover:border-primary/40 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Me */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Me?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseMe.map((item, index) => (
              <Card key={index} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg text-primary mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your requirements and bring your ideas to life with clean, 
                efficient, and modern solutions.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;