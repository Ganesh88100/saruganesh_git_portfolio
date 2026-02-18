import {
  Brain, Code2, Eye, MessageSquare, Layers, History,
  Shield, Lightbulb, ArrowRight, CheckCircle2, Zap,
  Layout, GitBranch, Cpu, Server, Component, Sparkles,
  Lock, FileCheck, AlertTriangle, Rocket
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const coreFeatures = [
  { icon: MessageSquare, title: "Natural Language Input", desc: "Describe UI in plain English" },
  { icon: Component, title: "Deterministic Output", desc: "Fixed component library ensures consistency" },
  { icon: Brain, title: "Multi-Step AI Agent", desc: "Planner → Generator → Explainer pipeline" },
  { icon: Eye, title: "Live Preview", desc: "Real-time UI rendering window" },
  { icon: History, title: "Version Rollback", desc: "Track and restore previous versions" },
  { icon: Lightbulb, title: "Explainable AI", desc: "Human-readable decision output" },
];

const agentModules = [
  {
    icon: Layers,
    name: "Planner",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    tasks: ["Interprets user intent", "Chooses layout structure", "Selects UI components", "Produces structured plan"],
  },
  {
    icon: Code2,
    name: "Generator",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    tasks: ["Converts plan into valid UI code", "Uses predefined components only", "Ensures consistent output"],
  },
  {
    icon: Lightbulb,
    name: "Explainer",
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
    tasks: ["Provides human-readable explanation", "Describes layout choices", "Explains modifications"],
  },
];

const technologies = [
  { icon: Layout, name: "React / Next.js" },
  { icon: Server, name: "Node.js / Python" },
  { icon: Brain, name: "LLM API" },
  { icon: Component, name: "Component Library" },
  { icon: Eye, name: "Real-Time Rendering" },
  { icon: GitBranch, name: "Version Control" },
];

const securityFeatures = [
  { icon: Shield, text: "Component whitelist enforcement" },
  { icon: Lock, text: "Prompt injection protection" },
  { icon: FileCheck, text: "Output validation before rendering" },
  { icon: AlertTriangle, text: "Error handling for invalid generation" },
];

const achievements = [
  "Developed structured AI agent workflow",
  "Implemented deterministic UI generation",
  "Built real-time UI preview system",
  "Created explainable AI architecture",
  "Implemented rollback version system",
  "Maintained strict UI consistency rules",
];

const futureEnhancements = [
  "Streaming AI responses",
  "Visual diff comparison between UI versions",
  "Advanced component schema validation",
  "Replayable UI generation workflow",
  "Integration with design tools like Figma",
];

const AIAgentProject = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-mesh opacity-30" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-500/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-emerald-500/8 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            AI / Full-Stack Project
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI Agent – <span className="hero-gradient">Deterministic UI Generator</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An AI-powered full-stack application that converts natural language UI descriptions into working UI code with live preview and version control
          </p>
        </div>

        {/* Project Hero Card */}
        <Card className="glass-card-strong mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-5">
              {/* Interface Layout Mockup */}
              <div className="lg:col-span-2 p-6 flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Application Layout</h4>
                <div className="grid grid-cols-3 gap-2 h-64 lg:h-80">
                  {/* Chat Panel */}
                  <div className="rounded-lg border border-blue-400/20 bg-blue-400/5 p-3 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-3">
                      <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
                      <span className="text-[10px] font-semibold text-blue-400">Chat</span>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="bg-muted/30 rounded-md p-1.5">
                        <div className="h-1.5 w-full bg-muted-foreground/20 rounded" />
                        <div className="h-1.5 w-3/4 bg-muted-foreground/20 rounded mt-1" />
                      </div>
                      <div className="bg-blue-400/10 rounded-md p-1.5 ml-2">
                        <div className="h-1.5 w-full bg-blue-400/30 rounded" />
                        <div className="h-1.5 w-2/3 bg-blue-400/30 rounded mt-1" />
                      </div>
                      <div className="bg-muted/30 rounded-md p-1.5">
                        <div className="h-1.5 w-4/5 bg-muted-foreground/20 rounded" />
                      </div>
                    </div>
                  </div>
                  {/* Code Panel */}
                  <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[10px] font-semibold text-emerald-400">Code</span>
                    </div>
                    <div className="space-y-1.5 flex-1 font-mono">
                      <div className="h-1.5 w-3/4 bg-emerald-400/20 rounded" />
                      <div className="h-1.5 w-full bg-emerald-400/15 rounded ml-2" />
                      <div className="h-1.5 w-2/3 bg-emerald-400/20 rounded ml-4" />
                      <div className="h-1.5 w-4/5 bg-emerald-400/15 rounded ml-2" />
                      <div className="h-1.5 w-1/2 bg-emerald-400/20 rounded" />
                      <div className="h-1.5 w-3/4 bg-emerald-400/15 rounded ml-2" />
                    </div>
                  </div>
                  {/* Preview Panel */}
                  <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-3 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Eye className="h-3.5 w-3.5 text-amber-400" />
                      <span className="text-[10px] font-semibold text-amber-400">Preview</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="h-4 w-full bg-amber-400/10 rounded" />
                      <div className="flex gap-1">
                        <div className="h-8 flex-1 bg-amber-400/10 rounded" />
                        <div className="h-8 flex-1 bg-amber-400/10 rounded" />
                      </div>
                      <div className="h-12 w-full bg-amber-400/10 rounded" />
                      <div className="h-3 w-2/3 bg-amber-400/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">AI-Powered Development Tool</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Bridging Natural Language to Functional UI
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A reliable AI UI generation system that bridges the gap between natural language design ideas and functional front-end code — maintaining deterministic and visually consistent outputs through a structured multi-step agent architecture.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Objective</h4>
                    <p className="text-sm text-muted-foreground">
                      Build a system where users describe UI in plain English, and the AI generates consistent, working code with live preview, iterative editing, and version control.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React", "LLM API", "Node.js", "AI Agent", "Live Preview", "Version Control"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            Core <span className="hero-gradient">Features</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreFeatures.map((f, i) => (
              <Card key={i} className="skill-card group">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-400/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
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

        {/* AI Agent Architecture */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            AI Agent <span className="hero-gradient">Architecture</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {agentModules.map((mod, i) => (
              <Card key={i} className={`glass-card border ${mod.bg}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${mod.bg}`}>
                      <mod.icon className={`h-5 w-5 ${mod.color}`} />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Module {i + 1}</span>
                      <h4 className={`font-bold ${mod.color}`}>{mod.name}</h4>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {mod.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`h-3.5 w-3.5 ${mod.color} shrink-0 mt-0.5`} />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Flow arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-sm font-medium text-blue-400">Planner</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-emerald-400">Generator</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-amber-400">Explainer</span>
          </div>
        </div>

        {/* Technologies & Security */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-400" />
                Technologies Used
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((t, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/20">
                    <t.icon className="h-4 w-4 text-blue-400 shrink-0" />
                    <span className="text-sm font-medium">{t.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                Security & Validation
              </h3>
              <div className="space-y-4">
                {securityFeatures.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-blue-400/10 shrink-0 mt-0.5">
                      <s.icon className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-sm text-muted-foreground">{s.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements & Future */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card-strong">
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-emerald-400" />
                Key Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card-strong">
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Rocket className="h-5 w-5 text-amber-400" />
                Future Enhancements
              </h3>
              <div className="space-y-3">
                {futureEnhancements.map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{e}</span>
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
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "Designed AI agent workflow architecture",
                "Built deterministic UI component system",
                "Integrated AI model for UI generation",
              ].map((role, i) => (
                <div key={i} className="flex items-start gap-2 p-4 rounded-lg bg-secondary/30 border border-border/20">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
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

export default AIAgentProject;
