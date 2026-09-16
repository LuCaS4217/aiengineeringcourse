import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Network, Cloud, CheckCircle, Share2, Code, GraduationCap, ShieldCheck, ChevronDown, Users, Calendar, MapPin, Trophy, Star } from 'lucide-react';

import logoWhite from '@assets/kube/logo-white.svg';
import iconWhite from '@assets/kube/icon-white.png';
import leoPhoto from '@assets/e010439d-abb1-411e-a90a-55ff3ae99c06_1785468147585.png';
import pedroPhoto from '@assets/pedro-photo_1785467880503.png';

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

const SCHEDULE = [
  { week: 'WEEK 01', dates: 'Foundations', days: ['Class 01', 'Class 02'] },
  { week: 'WEEK 02', dates: 'Agent systems', days: ['Class 03', 'Class 04'] },
  { week: 'WEEK 03', dates: 'Specifications', days: ['Class 05', 'Class 06'] },
  { week: 'WEEK 04', dates: 'Engineering loops', days: ['Class 07', 'Class 08'] },
  { week: 'WEEK 05', dates: 'Build and present', days: ['Class 09', 'Class 10'] },
];

export default function LandingPage() {
  useEffect(() => {
    document.title = "AI Engineer Course | Kube College, Gold Coast";

    const tallyWidgetUrl = 'https://tally.so/widgets/embed.js';
    const tally = (window as Window & { Tally?: { loadEmbeds: () => void } }).Tally;
    const loadTallyEmbeds = () => {
      if (tally) {
        tally.loadEmbeds();
      } else {
        document.querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])').forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc || '';
        });
      }
    };

    if (tally) {
      loadTallyEmbeds();
    } else if (document.querySelector(`script[src="${tallyWidgetUrl}"]`) === null) {
      const script = document.createElement('script');
      script.src = tallyWidgetUrl;
      script.onload = loadTallyEmbeds;
      script.onerror = loadTallyEmbeds;
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
          <a href="https://www.kubecollege.edu.au/" className="flex items-center gap-3" aria-label="Visit the Kube College website">
            <img src={logoWhite} alt="Kube College" className="h-8 md:h-9 w-auto" />
            <span className="hidden lg:inline font-mono text-sm font-bold text-electric-blue uppercase tracking-widest border-l border-outline-variant/50 pl-3">AI Engineer</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-foreground/80 hover:text-electric-blue transition-colors duration-200" href="#schedule">Schedule</a>
            <a className="text-electric-blue font-bold border-b-2 border-electric-blue pb-1 transition-colors duration-200 hover:text-electric-blue/80" href="#curriculum">Curriculum</a>
            <a className="text-foreground/80 hover:text-electric-blue transition-colors duration-200" href="#trainers">Trainers</a>
          </nav>
          <a href="#register" className="bg-electric-blue text-white px-6 py-2 rounded font-mono text-xs font-bold uppercase active:scale-95 transition-all hover:brightness-110">
            Register Your Interest
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section id="top" className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden hero-gradient technical-grid-bg pt-20">
          <FadeIn>
            <div className="z-10 max-w-4xl mx-auto space-y-8">
              <a href="https://www.kubecollege.edu.au/" aria-label="Visit the Kube College website" className="inline-block">
                <img src={iconWhite} alt="Kube College icon" className="h-14 w-auto mx-auto opacity-90" />
              </a>

              <div className="inline-block border border-electric-blue/30 bg-electric-blue/5 px-4 py-1.5 rounded">
                <span className="font-mono text-xs font-bold text-electric-blue tracking-widest uppercase">FACE TO FACE AI ENGINEERING COURSE</span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight">
                Build Real AI Systems.<br />
                <span className="text-electric-blue">Become an AI Engineer.</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Move beyond prompts and tutorials. Learn how to design, build and deploy AI applications through ten face to face classes, guided engineering labs and real project work.
              </p>

              {/* Course info bullets */}
              <ul className="text-left inline-flex flex-col gap-3 text-base text-foreground/80 pt-2">
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-terminal-green shrink-0" /> Next face to face cohort coming soon</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-terminal-green shrink-0" /> Face to face at Kube College on the Gold Coast</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-terminal-green shrink-0" /> Maximum 15 students</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-terminal-green shrink-0" /> Build a working AI project and prepare it for a public showcase</li>
              </ul>

              {/* Availability callout */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 border border-terminal-green/40 bg-terminal-green/5 px-6 py-4 rounded">
                <div className="text-left">
                  <div className="font-mono text-xs font-bold text-terminal-green uppercase tracking-widest mb-1">Course Price</div>
                  <div className="font-display font-bold text-2xl text-white">$1,490 AUD</div>
                  <div className="font-mono text-xs text-foreground/60 mt-0.5">Standard course enrolment</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-outline-variant/30" />
                <div className="font-mono text-xs text-terminal-green font-bold uppercase tracking-wider text-center">
                  Interest<br />now open
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a className="bg-terminal-green text-surface-lowest px-10 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,65,0.2)]" href="#register">
                  REGISTER YOUR INTEREST
                </a>
                <a className="border border-outline px-10 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:border-electric-blue hover:text-electric-blue active:scale-95" href="#schedule">
                  VIEW THE COURSE SCHEDULE
                </a>
              </div>

              <p className="font-mono text-xs text-terminal-green/70 pt-2">// Get priority access when enrolment opens</p>
            </div>
          </FadeIn>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-outline" strokeWidth={1.5} />
          </div>
        </section>

        {/* ── Course Details Bar ── */}
        <section className="bg-surface-high border-y border-outline-variant/20 py-8 px-6 md:px-12">
          <FadeIn>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:divide-x divide-outline-variant/30">
              <div className="flex flex-col items-center md:items-start lg:pl-6 first:pl-0">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Course</span>
                <span className="font-mono text-sm text-foreground leading-snug">AI Engineer Course</span>
              </div>
              <div className="flex flex-col items-center md:items-start lg:pl-6">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Dates</span>
                <span className="font-mono text-sm text-foreground leading-snug">Announced soon</span>
              </div>
              <div className="flex flex-col items-center md:items-start lg:pl-6">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Classes</span>
                <span className="font-mono text-sm text-foreground leading-snug">10 face to face<br />Tue &amp; Thu 18–21h</span>
              </div>
              <div className="flex flex-col items-center md:items-start lg:pl-6">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Location</span>
                <span className="font-mono text-sm text-foreground leading-snug">Kube College<br />Gold Coast</span>
              </div>
              <div className="flex flex-col items-center md:items-start lg:pl-6">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Capacity</span>
                <span className="font-mono text-sm text-foreground leading-snug">Max 15 students</span>
              </div>
              <div className="flex flex-col items-center md:items-start lg:pl-6">
                <span className="font-mono text-[10px] font-bold text-electric-blue mb-1 uppercase tracking-widest">Standard Price</span>
                <span className="font-mono text-sm text-foreground leading-snug">$1,490 AUD</span>
              </div>
              <div className="flex flex-col items-center md:items-start lg:pl-6">
                <span className="font-mono text-[10px] font-bold text-terminal-green mb-1 uppercase tracking-widest">Availability</span>
                <span className="font-mono text-sm text-terminal-green font-bold leading-snug">Register interest</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── Excerpt + Course Image ── */}
        <section className="relative overflow-hidden bg-surface-lowest" aria-label="Course overview">
          <div className="relative w-full h-[420px] md:h-[560px] overflow-hidden">
            <img
              src="/course-hero.jpg"
              alt="Software engineer working with agentic coding tools at a terminal, Gold Coast cityscape in the background"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <FadeIn>
                  <div className="max-w-xl space-y-6">
                    <span className="font-mono text-[10px] font-bold text-terminal-green uppercase tracking-widest">// Course Overview</span>
                    <blockquote className="font-display font-bold text-2xl md:text-3xl leading-snug text-white">
                      You will not finish the course with only a certificate. You will finish with a working AI project, a public presentation and a stronger professional portfolio.
                    </blockquote>
                    <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                      Five weeks of face to face classes, guided engineering labs and practical project development on the Gold Coast, designed around a working AI project and public presentation.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <span className="font-mono text-xs text-electric-blue">MAX 15 STUDENTS · NEXT COHORT COMING SOON</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ── Next Cohort Interest ── */}
        <section className="py-20 px-6 md:px-12 bg-surface border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs font-bold text-terminal-green uppercase tracking-widest block mb-3">Next Cohort</span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
                      Be First to Hear<br /><span className="text-terminal-green">When Enrolment Opens.</span>
                    </h2>
                  </div>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    The current cohort is underway. Register your interest to receive the next course dates, enrolment details and priority access before public registration opens.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-4">
                      <span className="font-mono text-xs text-foreground/50 w-32 shrink-0">Course price</span>
                      <span className="font-display font-bold text-xl text-foreground">$1,490 AUD</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="font-mono text-xs text-foreground/50 w-32 shrink-0">Next intake</span>
                      <span className="font-display font-bold text-xl text-foreground">Coming soon</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="font-mono text-xs text-terminal-green font-bold w-32 shrink-0">Interest list</span>
                      <span className="font-display font-bold text-3xl text-terminal-green">Now open</span>
                    </li>
                  </ul>
                  <p className="font-mono text-xs text-foreground/50">
                    No commitment required. We will contact you when dates and enrolment details are confirmed.
                  </p>
                  <a href="#register" className="inline-block bg-terminal-green text-surface-lowest px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                    REGISTER YOUR INTEREST
                  </a>
                </div>

                <div className="bg-deep-charcoal border border-terminal-green/30 p-10 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-terminal-green/50" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-terminal-green/50" />
                  <div className="space-y-8">
                    <div>
                      <div className="font-mono text-xs font-bold text-terminal-green uppercase tracking-widest mb-4">Course Format</div>
                      <ul className="space-y-4">
                        {[
                          'Five week intensive program',
                          'Ten face to face classes',
                          'Two classes per week',
                          'Small classes, maximum 15 students',
                          'Guided AI Engineering labs',
                          'Practical project development',
                          'Public final project presentation',
                        ].map(item => (
                          <li key={item} className="flex items-start gap-4">
                            <CheckCircle className="w-5 h-5 text-terminal-green shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-outline-variant/30">
                      <p className="font-mono text-xs text-foreground/50">
                        Small class sizes allow each student to receive direct support, debugging assistance, architecture feedback and meaningful access to the trainer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Schedule ── */}
        <section className="py-32 px-6 md:px-12 bg-surface-lowest technical-grid-bg" id="schedule">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-4 border-electric-blue pl-6">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-electric-blue uppercase tracking-widest">Ten Face to Face Classes</span>
                  <h2 className="font-display font-bold text-4xl md:text-5xl">Typical Five-Week Schedule</h2>
                </div>
                <div className="font-mono text-sm text-foreground/70 mt-6 md:mt-0">
                  // NEXT_COHORT_DATES = COMING_SOON
                </div>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-5 border border-outline-variant/30">
                {SCHEDULE.map(({ week, dates, days }, i) => (
                  <StaggerItem
                    key={week}
                    className={`p-8 hover:bg-deep-charcoal transition-all group flex flex-col gap-6 ${i < 4 ? 'border-b md:border-b-0 md:border-r border-outline-variant/30' : ''}`}
                  >
                    <div className="font-mono text-sm font-bold text-electric-blue">{week}</div>
                    <div className="flex-1 space-y-3">
                      {days.map(d => (
                        <div key={d} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-terminal-green block shrink-0" />
                          <span className="font-mono text-sm text-foreground/80">{d}</span>
                        </div>
                      ))}
                    </div>
                    <div className="font-mono text-xs text-foreground/70 uppercase tracking-widest">{dates}</div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="mt-8 border border-electric-blue/20 bg-electric-blue/5 px-8 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <div>
                  <span className="font-mono text-[10px] font-bold text-electric-blue uppercase tracking-widest block mb-1">Class Times</span>
                  <span className="font-mono text-sm text-foreground">Two face to face classes each week</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-outline-variant/30" />
                <div>
                  <span className="font-mono text-[10px] font-bold text-electric-blue uppercase tracking-widest block mb-1">Location</span>
                  <span className="font-mono text-sm text-foreground">Kube College · Gold Coast, QLD</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-outline-variant/30" />
                <div>
                  <span className="font-mono text-[10px] font-bold text-electric-blue uppercase tracking-widest block mb-1">Class Capacity</span>
                  <span className="font-mono text-sm text-foreground">Maximum 15 students</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Curriculum ── */}
        <section className="py-32 px-6 md:px-12 bg-surface technical-grid-bg" id="curriculum">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-4 border-electric-blue pl-6">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-electric-blue uppercase tracking-widest">The Blueprint</span>
                  <h2 className="font-display font-bold text-4xl md:text-5xl">Agentic Engineering</h2>
                </div>
                <div className="font-mono text-sm text-foreground/70 mt-6 md:mt-0">
                  // EVERY_THURSDAY = LAB_DAY
                </div>
              </div>
              <p className="text-lg text-foreground/70 max-w-3xl mb-16 -mt-8 leading-relaxed">
                You build one real application <span className="text-foreground font-bold">twice</span>, first as a prompt-driven prototype, then as a spec-driven, agent-delivered reimplementation. In Week 5, the same unannounced maintenance change reveals the difference in correctness, review effort, maintainability, and comprehension.
              </p>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 lg:grid-cols-5 border border-outline-variant/30">

                <StaggerItem className="p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 01</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">From Vibe Coding to Agentic Engineering</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Build a prompt-driven prototype, then audit the skipped lifecycle phases, production risks, and resulting comprehension debt.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-outline-variant block" />
                    <span className="w-2 h-2 bg-outline-variant block" />
                  </div>
                </StaggerItem>

                <StaggerItem className="p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 02</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">Anatomy of a Coding Agent</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Trace the model-plus-harness system: repository context, tools, permissions, memory, and the gather → act → verify loop.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-outline-variant block" />
                  </div>
                </StaggerItem>

                <StaggerItem className="p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 03</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">Spec-Driven Development</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Turn customer interviews into durable, versioned specifications with explicit constraints, acceptance criteria, and verification.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-electric-blue block" />
                  </div>
                </StaggerItem>

                <StaggerItem className="p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 04</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">Loop Engineering</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Design bounded plan → execute → verify loops with persistent state, separate implementer and verifier roles, fault recovery, and human gates.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-electric-blue block" />
                  </div>
                </StaggerItem>

                <StaggerItem className="p-8 hover:bg-deep-charcoal transition-all group flex flex-col">
                  <div className="font-mono text-sm font-bold text-electric-blue mb-6">WEEK 05</div>
                  <h3 className="font-display font-bold text-xl mb-4 leading-tight group-hover:text-electric-blue transition-colors">Agents as Reference Architecture</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">Apply the same unseen change to both builds, defend the architecture without agent assistance.</p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-electric-blue block" />
                    <span className="w-2 h-2 bg-electric-blue block" />
                  </div>
                </StaggerItem>

              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* ── Audience ── */}
        <section className="py-32 px-6 md:px-12 bg-surface-lowest" id="audience">
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
                      <h4 className="font-display font-bold text-xl mb-2">Tech Leads &amp; Architects</h4>
                      <p className="text-foreground/70 leading-relaxed">Leads responsible for architecture, review, quality gates, and the safe adoption of coding agents.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-high p-4 border border-outline-variant shrink-0">
                      <Cloud className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl mb-2">Cloud, Data &amp; Platform Engineers</h4>
                      <p className="text-foreground/70 leading-relaxed">Technical practitioners who already work with code and want to adopt repository-capable agents safely.</p>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-deep-charcoal border border-outline-variant/50 p-10 md:p-14 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-6 font-mono text-xs text-outline-variant opacity-30">PREREQ_001</div>
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-electric-blue/50" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-electric-blue/50" />

                <h2 className="font-display font-bold text-4xl md:text-5xl mb-12">Prerequisites</h2>

                <ul className="space-y-8">
                  <li className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-lg">Proficiency in Python, TypeScript or any other similar programming language</span>
                  </li>
                  <li className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-lg">Git, tests &amp; delivery workflows, branches, PR review, terminal</span>
                  </li>
                  <li className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-lg">LLM basics, prompts, context windows, tool use</span>
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

        {/* ── Trainers ── */}
        <section className="py-32 px-6 md:px-12 bg-surface border-y border-outline-variant/10" id="trainers">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-20">
                <span className="font-mono text-xs font-bold text-electric-blue uppercase tracking-widest block mb-4">Subject Matter Experts</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl">Meet Your Instructors</h2>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                <StaggerItem className="group flex flex-col sm:flex-row bg-surface-lowest border border-outline-variant/30 hover:border-electric-blue transition-all duration-300">
                  <div className="sm:w-56 shrink-0 overflow-hidden">
                    <img
                      src={leoPhoto}
                      alt="Leonardo Pinheiro, Lead Trainer"
                      loading="lazy"
                      className="w-full h-64 sm:h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="p-8 sm:p-10 flex-1 space-y-5">
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">Leonardo Pinheiro</h3>
                      <p className="font-mono text-xs font-bold text-electric-blue uppercase">Lead Trainer · Senior ML Engineer, Microsoft</p>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      Builds agentic Copilot features for Clipchamp and works on the LLM evaluation platform used across Microsoft's product organisation. 10+ years taking AI from prototype to production, Harrison AI, BCGX, and startups worldwide.
                    </p>
                    <div className="flex gap-5 pt-4">
                      <a href="https://www.linkedin.com/in/lspinheiro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Share2 className="w-5 h-5 text-outline-variant group-hover:text-electric-blue transition-colors" />
                      </a>
                      <Code className="w-5 h-5 text-outline-variant group-hover:text-electric-blue transition-colors" />
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem className="group flex flex-col sm:flex-row bg-surface-lowest border border-outline-variant/30 hover:border-electric-blue transition-all duration-300">
                  <div className="sm:w-56 shrink-0 overflow-hidden">
                    <img
                      src={pedroPhoto}
                      alt="Pedro Giesel, Support Trainer"
                      loading="lazy"
                      className="w-full h-64 sm:h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="p-8 sm:p-10 flex-1 space-y-5">
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">Pedro Giesel</h3>
                      <p className="font-mono text-xs font-bold text-electric-blue uppercase">Support Trainer · Diploma of AI Trainer &amp; Assessor</p>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      Diploma of AI Trainer and Assessor with 20+ years in IT as Director of IT and Solutions Architect. Co-founder of AImebee. Provides 1-on-1 support in every class and lab so every student keeps pace and every tool works.
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

        {/* ── Final Milestone — Project Showcase ── */}
        <section className="py-32 px-6 md:px-12 bg-surface-lowest border-b border-outline-variant/10" id="showcase">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-8">
                  <div>
                    <span className="font-mono text-xs font-bold text-terminal-green uppercase tracking-widest block mb-4">Your Final Milestone</span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
                      Build Toward a<br /><span className="text-terminal-green">Public Project Showcase</span>
                    </h2>
                  </div>

                  <p className="text-foreground/70 text-lg leading-relaxed">
                    Every cohort works toward an <strong className="text-foreground">AI Engineer Project Showcase</strong>. Students present the AI solutions they developed during the course to members of the Gold Coast technology, startup and business community.
                  </p>

                  <blockquote className="border-l-4 border-terminal-green pl-6 font-display font-bold text-xl text-white leading-snug">
                    You will not finish the course with only a certificate. You will finish with a working AI project, a public presentation and a stronger professional portfolio.
                  </blockquote>

                  <p className="text-foreground/70 leading-relaxed">
                    The showcase connects students with AI professionals, developers, founders, business leaders and members of the local technology community.
                  </p>

                  <p className="text-foreground/70 leading-relaxed">
                    Students will have the opportunity to explain what they built, demonstrate how it works and discuss the engineering decisions behind their solution.
                  </p>
                </div>

                <div className="bg-deep-charcoal border border-terminal-green/30 p-10 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-terminal-green/50" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-terminal-green/50" />
                  <Trophy className="w-10 h-10 text-terminal-green mb-8" />

                  <div className="space-y-6 mb-10">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-terminal-green uppercase tracking-widest block mb-1">Event</span>
                      <span className="font-display font-bold text-lg">AI Engineer Project Showcase</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold text-terminal-green uppercase tracking-widest block mb-1">Date</span>
                      <span className="font-mono text-lg">Announced with each cohort</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold text-terminal-green uppercase tracking-widest block mb-1">Location</span>
                      <span className="font-mono text-lg">Kube College, Gold Coast</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold text-terminal-green uppercase tracking-widest block mb-1">Access</span>
                      <span className="font-mono text-lg">Open to the public</span>
                    </div>
                  </div>

                  <div className="border-t border-outline-variant/30 pt-8">
                    <div className="font-mono text-[10px] font-bold text-electric-blue uppercase tracking-widest mb-3">Kube College will invite</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Local companies',
                        'Technology leaders',
                        'Startup founders',
                        'Entrepreneurs',
                        'AI professionals',
                        'Local business community',
                        'Potential collaborators',
                        'Members of the investment community',
                      ].map(g => (
                        <div key={g} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-electric-blue block shrink-0" />
                          <span className="font-mono text-xs text-foreground/60">{g}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Registration ── */}
        <section className="py-32 px-6 md:px-12 bg-background overflow-hidden relative blue-gradient-bg" id="register">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
              <span className="font-mono text-xs font-bold text-terminal-green uppercase tracking-widest block">Limited to 15 students</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
                Stop Watching AI Tutorials.<br />
                <span className="text-electric-blue">Start Building AI Systems.</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Join a small group of no more than 15 technical professionals for five weeks of face to face classes, guided engineering labs and practical project development on the Gold Coast.
              </p>
              <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Build a working AI solution and prepare to present it at an AI Engineer Project Showcase for the local technology and business community.
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center gap-6 border border-terminal-green/40 bg-terminal-green/5 px-8 py-5 rounded mx-auto">
                <div className="text-left">
                  <div className="font-mono text-xs font-bold text-terminal-green uppercase tracking-widest mb-1">Course Price</div>
                  <div className="font-display font-bold text-3xl text-white">$1,490 AUD</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-outline-variant/30" />
                <div className="text-left">
                  <div className="font-mono text-xs font-bold text-terminal-green uppercase tracking-widest mb-1">Interest List</div>
                  <div className="font-display font-bold text-3xl text-terminal-green">Now Open</div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto border border-outline-variant/30 bg-surface/80 backdrop-blur-xl p-8 md:p-14 relative shadow-2xl">
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-electric-blue -translate-x-0.5 -translate-y-0.5" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-electric-blue translate-x-0.5 translate-y-0.5" />

              <div className="text-center mb-10">
                <h3 className="font-display font-bold text-2xl mb-4">Register Your Interest</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Join the priority list for the next face to face AI Engineer course at Kube College. We will contact you when dates and enrolment details are confirmed.
                </p>
              </div>

              {/* Tally embed */}
              <div className="min-h-[500px] w-full">
                <iframe
                  data-tally-src="https://tally.so/embed/D4j8XE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="AI Engineering Course – Register Your Interest"
                />
              </div>

              <noscript>
                <a className="w-full block text-center bg-terminal-green text-surface-lowest py-5 font-mono text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all mt-8" href="https://tally.so/r/D4j8XE">REGISTER YOUR INTEREST</a>
              </noscript>

              <p className="text-center font-mono text-[10px] text-outline-variant uppercase pt-8">
                Next cohort dates will be announced soon
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ── Accreditation ── */}
        <section className="py-12 bg-surface-lowest border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="font-mono text-xs text-outline-variant/60 tracking-widest uppercase">
              Kube College | Australian Skills Higher Academy Pty Ltd | RTO 46256 | CRICOS 04272K | www.kubecollege.edu.au
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-surface-lowest border-t border-outline-variant/10">
        <div className="w-full py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <a href="https://www.kubecollege.edu.au/" aria-label="Visit the Kube College website">
              <img src={logoWhite} alt="Kube College" className="h-10 w-auto" loading="lazy" />
            </a>
            <div className="font-mono text-sm font-bold text-foreground">AI Engineer Course</div>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              Face to face AI engineering training on the Gold Coast. Ten classes, maximum 15 students, real project work and a public final presentation. Register your interest for the next cohort.
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
