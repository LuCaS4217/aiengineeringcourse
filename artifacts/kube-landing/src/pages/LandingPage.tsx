import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Network, Cloud, CheckCircle, Share2, Code, GraduationCap, ShieldCheck, ChevronDown } from 'lucide-react';

import logoWhite from '@assets/kube/logo-white.svg';
import iconWhite from '@assets/kube/icon-white.png';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);

const StaggerContainer = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.15
        }
      }
    }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const StaggerItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  useEffect(() => {
    document.title = "Agentic Engineering Course | Kube College";
    
    // Tally embed script
    const scriptId = 'tally-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground font-sans selection:bg-electric-blue selection:text-white overflow-x-hidden">
      
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-outline-variant/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img src={logoWhite} alt="Kube College" className="h-8 md:h-9 w-auto" />
            <span className="hidden sm:inline font-mono text-sm font-bold text-electric-blue uppercase tracking-widest border-l border-outline-variant/50 pl-3">Agentic AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-electric-blue font-bold border-b-2 border-electric-blue pb-1 transition-colors duration-200 hover:text-electric-blue/80" href="#curriculum">Curriculum</a>
            <a className="text-foreground/80 hover:text-electric-blue transition-colors duration-200" href="#audience">Audience</a>
            <a className="text-foreground/80 hover:text-electric-blue transition-colors duration-200" href="#trainers">Trainers</a>
          </nav>
          <a href="#register" className="bg-electric-blue text-white px-6 py-2 rounded font-mono text-xs font-bold uppercase active:scale-95 transition-all hover:brightness-110">
            Register Interest
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden hero-gradient technical-grid-bg pt-20">
          <FadeIn>
            <div className="z-10 max-w-4xl mx-auto space-y-8">
              <img src={iconWhite} alt="Kube College icon" className="h-14 w-auto mx-auto opacity-90" />
              
              <div className="inline-block border border-electric-blue/30 bg-electric-blue/5 px-4 py-1.5 rounded">
                <span className="font-mono text-xs font-bold text-electric-blue tracking-widest uppercase">FIRST INTAKE // SEPT 2026</span>
              </div>
              
              <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight">
                From Vibe Coding to <br />
                <span className="text-electric-blue">Agentic Engineering</span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Build software with coding agents without surrendering quality or understanding. Learn durable specifications, bounded delivery loops, and systematic verification — taught by a Senior ML Engineer from Microsoft, with a hands-on lab every Thursday.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a className="bg-terminal-green text-surface-lowest px-10 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,65,0.2)]" href="#register">
                  REGISTER INTEREST
                </a>
                <a className="border border-outline px-10 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:border-electric-blue hover:text-electric-blue active:scale-95" href="#curriculum">
                  VIEW CURRICULUM
                </a>
              </div>
              
              <p className="font-mono text-xs text-outline-variant pt-4">// Enrolment applications opening soon · Limited seats</p>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-outline" strokeWidth={1.5} />
          </div>
        </section>

        {/* Key Details Bar */}
        <section className="bg-surface-high border-y border-outline-variant/20 py-8 px-6 md:px-12">
          <FadeIn>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 md:divide-x divide-outline-variant/30">
              <div className="flex flex-col items-center md:items-start md:pl-8 first:pl-0">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">First Class</span>
                <span className="font-mono text-lg text-foreground">Tue 1 Sept 2026</span>
              </div>
              <div className="flex flex-col items-center md:items-start md:pl-8">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Duration</span>
                <span className="font-mono text-lg text-foreground">5 Weeks</span>
              </div>
              <div className="flex flex-col items-center md:items-start md:pl-8">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Schedule</span>
                <span className="font-mono text-lg text-foreground">Tue/Thu 18–21h</span>
              </div>
              <div className="flex flex-col items-center md:items-start md:pl-8">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Location</span>
                <span className="font-mono text-lg text-foreground">Surfers Paradise</span>
              </div>
              <div className="flex flex-col items-center md:items-start md:pl-8">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Tuition Fee</span>
                <span className="font-mono text-lg text-foreground">$1,490 AUD</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Curriculum Section */}
        <section className="py-32 px-6 md:px-12 bg-surface-lowest technical-grid-bg" id="curriculum">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-4 border-electric-blue pl-6">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-electric-blue uppercase tracking-widest">The Blueprint</span>
                  <h2 className="font-display font-bold text-4xl md:text-5xl">Module 01: Agentic Engineering</h2>
                </div>
                <div className="font-mono text-sm text-outline-variant mt-6 md:mt-0">
                  // EVERY_THURSDAY = LAB_DAY
                </div>
              </div>
              <p className="text-lg text-foreground/70 max-w-3xl mb-16 -mt-8 leading-relaxed">
                You build one real application <span className="text-foreground font-bold">twice</span> — first as a prompt-driven prototype, then as a spec-driven, agent-delivered reimplementation. In Week 5, the same unannounced maintenance change reveals the difference in correctness, review effort, maintainability, and comprehension.
              </p>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 lg:grid-cols-5 border border-outline-variant/30">
                
                <StaggerItem className="p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 01</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">From Vibe Coding to Agentic Engineering</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Build a prompt-driven prototype, then audit the skipped lifecycle phases, production risks, and resulting comprehension debt.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-outline-variant block"></span>
                    <span className="w-2 h-2 bg-outline-variant block"></span>
                  </div>
                </StaggerItem>

                <StaggerItem className="p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 02</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">Anatomy of a Coding Agent</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Trace the model-plus-harness system: repository context, tools, permissions, memory, and the gather → act → verify loop.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-outline-variant block"></span>
                  </div>
                </StaggerItem>

                <StaggerItem className="p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 03</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">Spec-Driven Development</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Turn customer interviews into durable, versioned specifications with explicit constraints, acceptance criteria, and verification.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                  </div>
                </StaggerItem>

                <StaggerItem className="p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 04</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">Loop Engineering</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Design bounded plan → execute → verify loops with persistent state, separate implementer and verifier roles, fault recovery, and human gates.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                  </div>
                </StaggerItem>

                <StaggerItem className="p-8 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 05</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">Agents as Reference Architecture</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Apply the same unseen change to both builds, defend the architecture without agent assistance, and bridge to Module 02.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                    <span className="w-2 h-2 bg-electric-blue block"></span>
                  </div>
                </StaggerItem>

              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Audience Section */}
        <section className="py-32 px-6 md:px-12 bg-surface" id="audience">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <FadeIn>
              <div className="space-y-12">
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-10">Who it's for</h2>
                <div className="space-y-10">
                  
                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-high p-4 border border-outline-variant shrink-0">
                      <Terminal className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl mb-2">Software Engineers</h4>
                      <p className="text-foreground/70 leading-relaxed">Engineers moving from prompt-driven code generation to verifiable delivery with coding agents.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-high p-4 border border-outline-variant shrink-0">
                      <Network className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl mb-2">Tech Leads & Architects</h4>
                      <p className="text-foreground/70 leading-relaxed">Leads responsible for architecture, review, quality gates, and the safe adoption of coding agents.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-high p-4 border border-outline-variant shrink-0">
                      <Cloud className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl mb-2">Cloud, Data & Platform Engineers</h4>
                      <p className="text-foreground/70 leading-relaxed">Technical practitioners who already work with code and want to adopt repository-capable agents safely.</p>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-deep-charcoal border border-outline-variant/50 p-10 md:p-14 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-6 font-mono text-xs text-outline-variant opacity-30">PREREQ_001</div>
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-electric-blue/50"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-electric-blue/50"></div>
                
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-12">Prerequisites</h2>
                
                <ul className="space-y-8">
                  <li className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-lg">Proficiency in Python or TypeScript (or similar)</span>
                  </li>
                  <li className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-lg">Git, tests & delivery workflows — branches, PR review, terminal</span>
                  </li>
                  <li className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-lg">LLM basics — prompts, context windows, tool use</span>
                  </li>
                  <li className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-lg">Access to a repository-capable coding agent (e.g. Claude Code, Codex, Cursor Agent)</span>
                  </li>
                </ul>
                
                <div className="mt-14 pt-10 border-t border-outline-variant/30">
                  <p className="font-mono text-sm text-foreground/50">
                    Note: This is an intensive engineering course. We do not cover basic AI concepts.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* Trainers Section */}
        <section className="py-32 px-6 md:px-12 bg-surface-lowest border-y border-outline-variant/10" id="trainers">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-20">
                <span className="font-mono text-xs font-bold text-electric-blue uppercase tracking-widest block mb-4">Subject Matter Experts</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl">Meet Your Instructors</h2>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <StaggerItem className="group flex flex-col sm:flex-row bg-surface border border-outline-variant/30 hover:border-electric-blue transition-all duration-300">
                  <div className="w-full sm:w-48 h-64 sm:h-auto bg-surface-high flex items-center justify-center border-b sm:border-b-0 sm:border-r border-outline-variant/30 shrink-0">
                    <span className="font-display font-bold text-5xl text-electric-blue/50 group-hover:text-electric-blue transition-colors">LP</span>
                  </div>
                  <div className="p-8 sm:p-10 flex-1 space-y-5">
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">Leonardo Pinheiro</h3>
                      <p className="font-mono text-xs font-bold text-electric-blue uppercase">Lead Trainer · Senior ML Engineer, Microsoft</p>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      Builds agentic Copilot features for Clipchamp and works on the LLM evaluation platform used across Microsoft's product organisation. 10+ years taking AI from prototype to production — Harrison AI, BCGX, and startups worldwide.
                    </p>
                    <div className="flex gap-5 pt-4">
                      <a href="https://www.linkedin.com/in/lspinheiro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Share2 className="w-5 h-5 text-outline-variant group-hover:text-electric-blue transition-colors" />
                      </a>
                      <Code className="w-5 h-5 text-outline-variant group-hover:text-electric-blue transition-colors" />
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem className="group flex flex-col sm:flex-row bg-surface border border-outline-variant/30 hover:border-electric-blue transition-all duration-300">
                  <div className="w-full sm:w-48 h-64 sm:h-auto bg-surface-high flex items-center justify-center border-b sm:border-b-0 sm:border-r border-outline-variant/30 shrink-0">
                    <span className="font-display font-bold text-5xl text-electric-blue/50 group-hover:text-electric-blue transition-colors">PG</span>
                  </div>
                  <div className="p-8 sm:p-10 flex-1 space-y-5">
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">Pedro Giesel</h3>
                      <p className="font-mono text-xs font-bold text-electric-blue uppercase">Support Trainer · Diploma of AI Trainer &amp; Assessor</p>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      Diploma of AI trainer at TAFE Queensland with 20+ years in IT as Director of IT and Solutions Architect. Co-founder of AImebee. Provides 1-on-1 support in every class and lab so every student keeps pace and every tool works.
                    </p>
                    <div className="flex gap-5 pt-4">
                      <a href="https://www.linkedin.com/in/pedrogiesel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Share2 className="w-5 h-5 text-outline-variant group-hover:text-electric-blue transition-colors" />
                      </a>
                      <GraduationCap className="w-5 h-5 text-outline-variant group-hover:text-electric-blue transition-colors" />
                    </div>
                  </div>
                </StaggerItem>

              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-32 px-6 md:px-12 bg-background overflow-hidden relative blue-gradient-bg" id="register">
          <FadeIn>
            <div className="max-w-2xl mx-auto border border-outline-variant/30 bg-surface/80 backdrop-blur-xl p-8 md:p-14 relative shadow-2xl">
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-electric-blue -translate-x-0.5 -translate-y-0.5"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-electric-blue translate-x-0.5 translate-y-0.5"></div>
              
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-4xl mb-6">Register Interest</h2>
                <p className="text-foreground/80 leading-relaxed">
                  First intake starts Tuesday 1 September 2026. Seats are limited to 15 participants to ensure 1-on-1 lab support quality. Enrolment applications opening soon — registrants get priority access.
                </p>
              </div>
              
              {/* Tally embed */}
              <div className="min-h-[831px] w-full">
                <iframe 
                  data-tally-src="https://tally.so/embed/7Rz4aP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="831" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Agentic AI Course"
                ></iframe>
              </div>
              
              <noscript>
                <a className="w-full block text-center bg-terminal-green text-surface-lowest py-5 font-mono text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all mt-8" href="https://tally.so/r/7Rz4aP">REGISTER YOUR INTEREST</a>
              </noscript>
              
              <p className="text-center font-mono text-[10px] text-outline-variant uppercase pt-8">
                PRIORITY_ACCESS // ENROLMENT_APPLICATIONS_OPENING_SOON
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Accreditation Section */}
        <section className="py-12 bg-surface-lowest border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="font-mono text-xs text-outline-variant/60 tracking-widest uppercase">
              Kube College | Australian Skills Higher Academy Pty Ltd | RTO 46256 | CRICOS 04272K | www.kubecollege.edu.au
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-lowest border-t border-outline-variant/10">
        <div className="w-full py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <img src={logoWhite} alt="Kube College" className="h-10 w-auto" />
            <div className="font-mono text-sm font-bold text-foreground">Agentic AI Course</div>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              Professional training for engineers building software with coding agents — durable specifications, bounded loops, and verification without losing system comprehension. Surfers Paradise, Gold Coast QLD.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex flex-wrap gap-8 mb-8 md:mb-0">
              <a className="text-foreground/70 hover:text-electric-blue transition-colors font-medium" href="https://www.kubecollege.edu.au">kubecollege.edu.au</a>
              <a className="text-foreground/70 hover:text-electric-blue transition-colors font-medium" href="https://www.kubecollege.edu.au/privacy">Privacy Policy</a>
              <a className="text-foreground/70 hover:text-electric-blue transition-colors font-medium" href="mailto:info@kubecollege.edu.au">Contact</a>
            </div>
            <div className="font-mono text-xs text-foreground/50 pt-8 uppercase tracking-wider">
              © 2026 Kube College. RTO 46256. Gold Coast, QLD.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}