import { ArrowDown, Download, Mail, Code, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/saruganesh-new-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 hero-mesh"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-element opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-element opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl floating-element opacity-20" style={{ animationDelay: '4s' }}></div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Status badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for Freelance</span>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="hero-glow text-glow">Saruganesh</span>
              </h1>
              
              <div className="space-y-3">
                <p className="text-2xl sm:text-3xl text-primary font-semibold">
                  B.Tech IT Student
                </p>
                <p className="text-xl sm:text-2xl text-muted-foreground font-medium flex items-center">
                  <Code className="mr-3 h-6 w-6 text-accent" />
                  Web & App Developer
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Building efficient web and app solutions with expertise in{" "}
                <span className="text-primary font-semibold">Python</span>, 
                full-stack development, and cloud technologies. Passionate about 
                creating modern, user-friendly applications that make a difference.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-500 group relative overflow-hidden text-lg px-8 py-4 neon-border"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-4 glass-card group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>

            {/* Enhanced stats with glass cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { number: "2+", label: "Internships", icon: <Zap className="h-5 w-5" /> },
                { number: "5+", label: "Technologies", icon: <Code className="h-5 w-5" /> },
                { number: "100%", label: "Dedication", icon: <Sparkles className="h-5 w-5" /> },
              ].map((stat, index) => (
                <Card key={index} className="glass-card-strong text-center group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse scale-110"></div>
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-2xl opacity-15 animate-pulse scale-105" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden neon-border shadow-strong group">
                <img
                  src={profileImage}
                  alt="Saruganesh - B.Tech IT Student and Developer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 glass-card-strong px-3 py-1 rounded-full floating-element">
                <span className="text-sm font-medium text-primary">🚀 Ready to Code</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card-strong px-4 py-2 rounded-full floating-element" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium text-accent">✨ Python Expert</span>
              </div>
              
              <div className="absolute top-1/2 -right-8 glass-card-strong px-3 py-1 rounded-full floating-element" style={{ animationDelay: '3s' }}>
                <span className="text-sm font-medium text-primary-glow">💡 Problem Solver</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
            <div className="absolute top-8 text-xs text-muted-foreground">Scroll</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;