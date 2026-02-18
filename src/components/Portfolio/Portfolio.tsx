import { 
  ShoppingCart, Cpu, Wifi, Shield, CreditCard, Monitor, 
  Scan, Weight, QrCode, Database, ArrowRight, CheckCircle2,
  Zap, Clock, Lock, Smartphone
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import trolleyImage from "@/assets/trolley-project.webp";
import rfidImage from "@/assets/rfid-display.jpeg";

const features = [
  { icon: Scan, title: "Auto Detection", desc: "RFID-based automatic product scanning" },
  { icon: Monitor, title: "Real-Time Billing", desc: "Instant bill display on LCD screen" },
  { icon: Clock, title: "Fast Checkout", desc: "Drastically reduced waiting time" },
  { icon: Lock, title: "Anti-Theft", desc: "Weight verification security system" },
  { icon: CreditCard, title: "Digital Payment", desc: "QR-based payment integration" },
  { icon: Smartphone, title: "User Friendly", desc: "Simple intuitive interface" },
];

const technologies = [
  { icon: Wifi, name: "RFID Technology" },
  { icon: Cpu, name: "Arduino & NodeMCU" },
  { icon: Weight, name: "Load Cell Sensor" },
  { icon: Monitor, name: "LCD Display" },
  { icon: Database, name: "Cloud Database" },
  { icon: QrCode, name: "QR Payment" },
];

const steps = [
  "Customer adds product to trolley",
  "RFID reader scans the product",
  "Bill updates automatically",
  "Weight sensor verifies product",
  "Customer completes digital payment",
  "System resets after checkout",
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-mesh opacity-40" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Featured Project
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="hero-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative embedded systems project combining hardware and software
          </p>
        </div>

        {/* Project Hero Banner */}
        <Card className="glass-card-strong mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Image gallery */}
              <div className="relative p-6 flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden border border-border/30">
                  <img 
                    src={trolleyImage} 
                    alt="Smart Trolley prototype" 
                    className="w-full h-64 lg:h-72 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-border/30">
                  <img 
                    src={rfidImage} 
                    alt="RFID billing display showing real-time scan" 
                    className="w-full h-48 lg:h-56 object-cover"
                  />
                </div>
              </div>

              {/* Project info */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Embedded Systems</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Advanced Automatic Bill Generation Trolley
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A smart shopping solution using RFID technology to automatically detect products, 
                  generate real-time bills, verify weight for accuracy, and support digital payments — 
                  eliminating long checkout queues.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">
                      Manual barcode scanning causes long queues, billing errors, and poor shopping efficiency during peak hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      RFID tags on products enable automatic scanning when placed in the trolley, with instant bill updates, weight verification, and QR-based digital payment.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["RFID", "Arduino", "NodeMCU", "Load Cell", "Cloud DB"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            Key <span className="hero-gradient">Features</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <Card key={i} className="skill-card group">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies & How It Works */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Technologies */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Technologies Used
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((t, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/20">
                    <t.icon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">{t.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                How It Works
              </h3>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5 border border-primary/20">
                      {i + 1}
                    </div>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Role */}
        <Card className="glass-card-strong mb-12">
          <CardContent className="p-8">
            <h3 className="text-lg font-bold mb-6 text-center">
              My <span className="hero-gradient">Role</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Designed embedded system architecture",
                "Integrated RFID hardware & billing software",
                "Developed real-time billing display",
                "Tested & validated system performance",
              ].map((role, i) => (
                <div key={i} className="flex items-start gap-2 p-4 rounded-lg bg-secondary/30 border border-border/20">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{role}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss This Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
