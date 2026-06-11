import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Briefcase,
  GraduationCap,
  FileText,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  Award,
  Code2,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Github,
  ChevronLeft,
  ChevronRight,
  Globe,
  CheckCircle2,
  Target,
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const Index = () => {
  const [expandedExperiences, setExpandedExperiences] = useState<{[key: number]: boolean}>({});
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const toggleExperience = (index: number) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleSkills = () => {
    setShowAllSkills(prev => !prev);
  };

  const truncateText = (text: string, maxLines: number = 5) => {
    const words = text.split(' ');
    const wordsPerLine = 12; // Approximate words per line
    const maxWords = maxLines * wordsPerLine;

    if (words.length <= maxWords) {
      return text;
    }

    return words.slice(0, maxWords).join(' ') + '...';
  };

  const skills = [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Angular", level: 80 },
    { name: "Docker", level: 90 },
    { name: "Git", level: 95 },
    { name: "Github Actions", level: 85 },
    { name: "Jenkins", level: 87 },
    { name: "Maven", level: 90 },
    { name: "Linux", level: 85 },
    { name: "Bash", level: 85 },
    { name: "Nginx", level: 80 },
    { name: "ELK", level: 80 },
    { name: "Keycloak", level: 80 },
    { name: "Grafana", level: 88 },
    { name: "Kuberenetes", level: 80 },
    { name: "AWS", level: 80 },
    { name: "SQL", level: 85 },
  ];

  const experiences = [
    {
      title: "Software Developer (Kuala Lumpur)",
      company: "Permodalan Nasional Berhad (PNB)",
      period: "2024 - Present",
      description: `• Led end-to-end development of a donation platform covering system design, implementation, deployment, data migration, and production support using Spring Boot and Angular.\n
• Reduced API response times by 60% (from ~10s to ~4s) by optimizing business logic and SQL query performance.\n
• Spearheaded cloud migration of critical internal applications from on-premise to Microsoft Azure using Docker and Azure-native services.\n
• Remediated VAPT findings across Java (Spring Boot) and .NET applications, resolving XSS, SQL Injection, and missing security headers.\n
• Conducted code reviews to eliminate security risks including SQL injection, deadlocks, and path traversal vulnerabilities.\n
• Integrated Keycloak as authentication provider with Spring Boot and Angular, exposing user management through secure REST APIs.\n
• Deployed ELK Stack to centralize logs across multiple servers for real-time monitoring and faster root cause analysis.`,
      technologies: ["Java", "Spring Boot", "Angular", "Microsoft Azure", "Docker", "ELK", "Keycloak", "SQL Server"]
    },
    {
      title: "Software Engineer (Kuala Lumpur)",
      company: "Maybank Berhad",
      period: "2022 - 2023",
      description: `• Developed and maintained mobile banking application features using Spring Boot with microservices and BFF architecture.\n
• Automated Java package deployments to SIT/UAT environments via GitHub Actions and Bash scripts.\n
• Managed production deployments, Oracle database queries, and server configurations on RHEL Linux.\n
• Presented project changes to the Change Advisory Board (CAB) with implementation plans and sign-off documentation.\n
• Led Disaster Recovery exercises in compliance with BNM regulations, coordinating with network and Core Banking teams.\n
• Built internal productivity dashboards using Grafana, ExpressJS, and MongoDB.\n
• Utilized ELK Stack for production issue analysis, monitoring API response times and server resource utilization.`,
      technologies: ["Java", "Spring Boot", "Github Actions", "ExpressJS", "NodeJS", "Bash", "RHEL", "Oracle", "ELK", "Grafana"]
    },
    {
      title: "GEES (Protege) (Kuala Lumpur)",
      company: "Petronas Berhad",
      period: "2021",
      description: `• Maintained server inventory and documentation, with hands-on exposure to AWS and Azure cloud infrastructure.\n
• Developed internal CRUD applications using Microsoft PowerApps and Power Automate to streamline operational workflows.\n
• Built data visualizations using Power BI to surface insights from PowerApps and Excel datasets.\n
• Hosted and facilitated online department events including knowledge-sharing meetups and quiz sessions.`,
      technologies: ["PowerApps", "Power Automate", "Power BI", "AWS", "Azure"]
    }
  ];

  const certificates = [
    {
      name: "Agile SCRUM Master",
      issuer: "EXIN",
      year: "2025",
      credentialId: "6593957.20893816",
      downloadUrl: "https://drive.google.com/file/d/1qbr0-PZ804FqCUE6IQ8zJIhKuAbpw3UX/view?usp=sharing"
    },
    {
      name: "Agile SCRUM Foundation",
      issuer: "EXIN",
      year: "2024",
      credentialId: "6593957.20881928",
      downloadUrl: "https://drive.google.com/file/d/1zHAiQytUjNLecbte-G9qEZbO3vm6EHwz/view?usp=sharing"
    },
    {
      name: "DecSecOps Foundation",
      issuer: "DevOps Institute",
      year: "2024",
      credentialId: "GR555000255AS",
      downloadUrl: "https://drive.google.com/file/d/1ARtYcBc9wrtl_yyXN6P4e3AjH_eZhKQL/view?usp=sharing"
    },
    {
      name: "Docker & Containers",
      issuer: "Amigoscode",
      year: "2021",
      credentialId: "",
      downloadUrl: "https://drive.google.com/file/d/1LEwykwGLfdoLOOq2FEYG-IdPBTk_4p9n/view?usp=drive_link"
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science: Hons",
      institution: "University Teknologi Mara Kampus Jasin, Melaka",
      period: "2017 - 2021",
      gpa: "3.59",
      achievements: ["Participate in military training called Reserve Officer Training Unit(ROTU).",
        "Silver award placement in i-JAMCSIIX Competition with Project titled Smart Irrigation System using Raspberry Pi.",
        "Final Year Project: Smart Irrigation System using Raspberry Pi where integrating sensors to Raspberry Pi for data collection and use the data fo machine learning processing to determine the best timing to water the plant."]
    },
    {
      degree: "Foundation In Science",
      institution: "University Teknologi Mara Kampus Dengkil, Selangor ",
      period: "2016 - 2017",
      gpa: "3.45",
      achievements: [""]
    },
    {
      degree: "Secondary SChool",
      institution: "SMKA Sheikh Haji Mohd Said",
      period: "2014 - 2015",
      gpa: "10A 1B (SPM)",
      achievements: ["Head of Cleanliness Prefects Unit", "Class Monitor"]
    }
  ];

  const projects = [
    {
      title: "Blanco Fragrance",
      subtitle: "E-commerce Mobile App",
      role: "Lead Developer — end-to-end delivery",
      type: "Mobile App",
      problem: "A fragrance retailer needed a dedicated mobile storefront to sell products, accept payments, and manage orders without relying on third-party marketplaces.",
      outcome: "Live on Google Play with a complete purchase flow — product browsing, secure checkout, and order tracking in a single native app.",
      technologies: ["Flutter", "Supabase", "ExpressJS", "Chip Payment Gateway", "OneSignal"],
      highlights: [
        "Published to Google Play Store",
        "Chip payment gateway integration for secure checkout",
        "Real-time inventory sync and push notifications",
        "Promotions, wishlist, and order history built in",
      ],
      features: [
        "User authentication & profiles",
        "Product search & filtering",
        "Shopping cart & wishlist",
        "Secure payment processing",
        "Order tracking & history",
        "Push notifications",
        "Promotion & campaigns",
        "Real-time inventory updates",
      ],
      images: [
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/blanco/image1.jpg",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/blanco/image2.png",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/blanco/image3.png",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/blanco/image4.png",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/blanco/image5.png",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/blanco/image6.png",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/blanco/image7.png",
      ],
      status: "Completed",
      year: "2025",
      url: "https://play.google.com/store/apps/details?id=com.mycompany.blancoapp",
      ctaLabel: "View on Google Play",
    },
    {
      title: "NF Studio",
      subtitle: "Interior Design Portfolio",
      role: "Full-Stack Developer — design & build",
      type: "Web Application",
      problem: "An interior design studio needed a polished online presence to showcase completed work and turn site visitors into client inquiries.",
      outcome: "A fast, animated portfolio site at nfstudio.my with project galleries, testimonials, and contact forms that present the studio professionally.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      highlights: [
        "Live production site with custom branding",
        "Interactive project gallery with category filtering",
        "Client testimonials and lead-capture contact forms",
        "Mobile-first layout with smooth scroll animations",
      ],
      features: [
        "Responsive portfolio gallery",
        "Project filtering & categories",
        "Client testimonials carousel",
        "Interactive contact forms",
        "Smooth scroll animations",
        "Mobile-first design",
        "Fast loading performance",
      ],
      images: [
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/nfstudio/image1.jpg",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/nfstudio/image2.jpg",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/nfstudio/image3.jpg",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/nfstudio/image4.jpg",
        "https://raw.githubusercontent.com/syamil24/code-banker-folio/refs/heads/main/public/nfstudio/image5.jpg",
      ],
      status: "Completed",
      year: "2024",
      url: "https://nfstudio.my",
      ctaLabel: "Visit Live Site",
    },
  ];

  const contactInfo = {
    name: "Ahmad Syamil Bin Sahrom",
    email: "syamil2498@gmail.com",
    phone: "+6019 629 0138",
    location: "Kuala Lumpur, Malaysia",
    whatsapp: "+60 (19) 629-0138",
    whatsappUrl: "https://wa.me/60196290138",
    instagram: "@syamil24",
    instagramUrl: "https://instagram.com/syamil24",
    github: "syamil24",
    blog: "https://blog.syamilthoughts.com"
  };

  const ProjectImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
      dragFree: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      emblaApi.on('select', onSelect);
      return () => {
        emblaApi.off('select', onSelect);
      };
    }, [emblaApi, onSelect]);

    return (
      <div className="embla relative w-full h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {images.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 h-full">
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-full object-contain bg-muted"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-primary scale-125' : 'bg-foreground/30'
              } backdrop-blur-sm`}
            />
          ))}
        </div>
      </div>
    );
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-foreground border-b border-border">
        <div className="absolute inset-0 hero-glow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(38_92%_55%_/_0.06),_transparent_60%)]"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Software Engineer</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Ahmad Syamil</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="inline-flex items-center gap-2 bg-secondary/50 border-border text-foreground hover:bg-secondary"
                  onClick={() => window.open(`https://github.com/${contactInfo.github}`, '_blank')}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">@{contactInfo.github}</span>
                </Button>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Full-Stack Developer Who
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">Ships What You Need</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                I help businesses and founders turn ideas into working software — mobile apps, web platforms, APIs, and backends that hold up in production. My background building systems at Maybank and PNB (used by millions of users) means you get enterprise-level reliability without the agency overhead: clear communication, sensible architecture, and delivery from design through deployment. Whether you need a storefront app, a client-facing website, or a secure integration, I handle the full stack so you can focus on your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary" onClick={() => window.open("https://drive.google.com/file/d/12VVZpGKc04IBfXLzTOhLcWmp0Ut_372J/view?usp=sharing", '_blank')}>
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-accent/40 text-foreground hover:bg-accent/10"
                  onClick={() => window.open(contactInfo.blog, '_blank')}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Visit Blog
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-40 scale-110"></div>
                <Avatar className="relative w-48 h-48 border-4 border-primary/30">
                  <AvatarImage src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg" alt="Ahmad Syamil - Software Engineer" />
                  <AvatarFallback className="text-6xl bg-primary text-primary-foreground">AS</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 section-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real client work — from mobile commerce to portfolio websites — built end-to-end and shipped to production
            </p>
          </div>

          {/* Project selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setCurrentProjectIndex(index)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  index === currentProjectIndex
                    ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border-border/60 bg-card hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {project.type === 'Mobile App' ? (
                    <Smartphone className="w-4 h-4 text-primary" />
                  ) : (
                    <Globe className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{project.type}</span>
                  <Badge variant="secondary" className="ml-auto text-xs">{project.year}</Badge>
                </div>
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-border/60 bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-w-0 overflow-hidden h-72 sm:h-80 lg:h-auto lg:min-h-[32rem] bg-muted/30 border-b lg:border-b-0 lg:border-r border-border/60">
                  <ProjectImageCarousel
                    images={projects[currentProjectIndex].images}
                    title={projects[currentProjectIndex].title}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-emerald-600/90 text-white backdrop-blur-sm">
                      {projects[currentProjectIndex].type === 'Mobile App' ? (
                        <Smartphone className="w-3 h-3 mr-1" />
                      ) : (
                        <Globe className="w-3 h-3 mr-1" />
                      )}
                      {projects[currentProjectIndex].status}
                    </Badge>
                  </div>
                </div>

                <div className="relative z-10 min-w-0 p-6 lg:p-8 flex flex-col bg-card">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-primary mb-1">{projects[currentProjectIndex].subtitle}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {projects[currentProjectIndex].title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{projects[currentProjectIndex].role}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg bg-secondary/40 border border-border/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-accent" />
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">The Challenge</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {projects[currentProjectIndex].problem}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">The Outcome</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {projects[currentProjectIndex].outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">Key Deliverables</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projects[currentProjectIndex].highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProjectIndex].technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-primary border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-4">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(projects[currentProjectIndex].url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {projects[currentProjectIndex].ctaLabel}
                    </Button>
                    <div className="flex justify-between items-center gap-4">
                      <Button
                        variant="outline"
                        className="flex-1 border-border hover:bg-secondary"
                        onClick={prevProject}
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                      </Button>
                      <span className="text-sm text-muted-foreground tabular-nums">
                        {currentProjectIndex + 1} / {projects.length}
                      </span>
                      <Button
                        variant="outline"
                        className="flex-1 border-border hover:bg-secondary"
                        onClick={nextProject}
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A track record of delivering high-quality software solutions in the financial industry
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6 mb-12">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <Card className="flex-1 border-border/60 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                          <CardDescription className="text-primary font-medium text-lg">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
                        {expandedExperiences[index] ? exp.description : truncateText(exp.description)}
                      </div>
                      {exp.description.split(' ').length > 60 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExperience(index)}
                          className="mb-4 text-primary hover:text-primary/80 p-0 h-auto font-medium"
                        >
                          {expandedExperiences[index] ? (
                            <>
                              <ChevronUp className="w-4 h-4 mr-1" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4 mr-1" />
                              Show More
                            </>
                          )}
                        </Button>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-primary border-primary/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-12 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 section-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The stack behind reliable delivery — from backend APIs and databases to deployment and monitoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.slice(0, showAllSkills ? skills.length : 5).map((skill) => (
              <Card key={skill.name} className="text-center border-border/60 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Code2 className="w-8 h-8 mx-auto text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{skill.name}</h3>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={toggleSkills}
              className="text-primary hover:text-primary/80 border-primary/30 hover:border-primary/50"
            >
              {showAllSkills ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Show More Skills
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications validating expertise in key technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center border-border/60 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-2">{cert.year}</Badge>
                  <p className="text-sm text-muted-foreground mb-4">ID: {cert.credentialId}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(cert.downloadUrl, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 section-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6 mb-12">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20">
                      <GraduationCap className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <Card className="flex-1 border-border/60 bg-card hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                          <CardDescription className="text-accent font-medium text-lg">
                            {edu.institution}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <span className="font-semibold text-muted-foreground">GPA: </span>
                        <span className="text-accent font-medium">{edu.gpa}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-muted-foreground">
                              <Award className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-12 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact-section" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities to work together
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-border/60 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">{contactInfo.name}</CardTitle>
                <CardDescription className="text-primary font-medium text-lg">
                  Software Engineer • Your System Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary border border-border/50 transition-colors cursor-pointer" onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary border border-border/50 transition-colors cursor-pointer" onClick={() => window.open(contactInfo.whatsappUrl, '_blank')}>
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">{contactInfo.whatsapp}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary border border-border/50 transition-colors cursor-pointer" onClick={() => window.open(contactInfo.instagramUrl, '_blank')}>
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.583.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849-.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Instagram</h3>
                      <p className="text-muted-foreground">instagram.com/syamil24</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary border border-border/50 transition-colors cursor-pointer" onClick={() => window.open(contactInfo.blog, '_blank')}>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Blog</h3>
                      <p className="text-muted-foreground">blog.syamilthoughts.com</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Ready to start a conversation?</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button variant="outline" className="border-emerald-600/50 text-emerald-400 hover:bg-emerald-600/10" onClick={() => window.open("https://wa.link/3s1b4x", '_blank')}>
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your company to the digital era? Let's discuss how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              <Phone className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
