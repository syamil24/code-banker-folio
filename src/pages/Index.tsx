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
      description: `• Proactively resolved Vulnerability Assessment Penetration Testing (VAPT) issues across multiple applications, including those built on Java (Spring Boot Framework)
        and .NET platforms. Successfully addressed critical security concerns such as XSS, SQL Injection, Missing SSL Certificates, and inadequate security headers like CSP and HSTS. \n
        • Conducted rigorous code reviews to identify and rectify code smells flagged by the security team. Implemented robust solutions to address vulnerabilities, including SQL
        injection risks, deadlock and thread starvation possibilities, and inadvertent exposure of sensitive data in logs. Proactively mitigated potential security threats such as path
        traversal vulnerabilities, ensuring the integrity and security of the application codebase. \n
        • Demonstrated strong collaboration skills by coordinating with users and business stakeholders to identify and address issues promptly. Achieved high customer
        satisfaction by diligently resolving tickets and providing comprehensive feedback on fixes. Utilized a combination of code changes, SQL Server data patching, and Java log
        analysis to effectively troubleshoot and resolve reported bugs \n
        • Developed a commission processing system, including generating 7 different types of reports to display commission entitlements. Designed and implemented complex
        business logic to handle complex reversal scenarios (e.g., multi-day or multi-month reversals) using Java Stream API. \n
        • Implemented Keycloak as the authentication provider, seamlessly integrated it with Spring Boot and Angular, enabling user management (e.g., creating users, changing
        passwords, and updating roles) via Spring Boot APIs, eliminating the need to directly access Keycloak for these processes. \n
        • Implemented ELK Stack (Elasticsearch, Logstash, Kibana) to centralize and aggregate logs across multiple servers, reducing time to find and analyze logs by providing a
        unified, real-time dashboard for easier and faster log access. \n
        • Reduced API response times by 60% from an average of 10 seconds to 4 seconds in a Spring Boot application by streamlined business logic complexity, leading to faster
        execution and reduced processing overhead. Enhanced SQL queries to improve efficiency, resulting in quicker data retrieval and minimized database calls, reducing
        server load and improving overall system responsiveness. \n`,
      technologies: ["Java", "Spring Boot", "Angular", "Jenkins", "ELK", "Keycloak", "SQL Server"]
    },
    {
      title: "Software Engineer (Kuala Lumpur)",
      company: "Maybank Berhad",
      period: "2022 - 2023",
      description: `• Actively contributes to the development, implementation, maintenance, and smooth operations of application systems and IT solutions, particularly focused on the mobile banking application. \n
        • Demonstrates strong expertise in developing banking applications using Spring Boot framework with Maven as build tools, applying microservices architecture with a Backend for Frontend (BFF) design.  \m
        • Utilizes JIRA and Confluence for streamlined development ticket tracking. \n
        • Drives efficiency by automating Java package deployment to SIT/UAT servers through the use of GitHub Actions and Bash scripts. \n
        • Ensures seamless user support during SIT/UAT and staging testing phases, promptly resolving any issues that arise, such as environmental challenges, connectivity hiccups, and code fixes. \n
        • Actively participates in project change presentations to the Change Advisory Board (CAB) and produces comprehensive documentation, including signoffs and implementation plans to enable
        smooth transitions into production releases. \n
        • Contributes to various operational activities, including migration and deployment of source code using Bash scripts and Linux commands. Proficiently manages configurations,
        database queries (Oracle), and deployments to production environments running on RHEL OS.  \n
        • Plays a crucial role in Disaster Recovery (DR) activities to ensure compliance with BNM regulations. Effectively coordinates with network teams, Core Banking teams to
        resolve any issues during downtime, ensuring the prompt resumption of services. \n
        • Utilizes Grafana and ExpressJS, coupled with MongoDB, to develop insightful productivity dashboards. Captures metrics from attendance data, JIRA issues, and GitHub activity to visualize internal department productivity. \n
        • Utilizes ELK Stack to resolve production issues by doing log analysis, viewing API metrics such as response time, RTT (Round Trip Time), and server resources usage such as CPU, Memory and Disks. \n `,
      technologies: ["Java", "Spring Boot", "Github Actions", "ExpressJS", "NodeJS", "Bash", "RHEL", "Docker", "ELK", "Grafana"]
    },
    {
      title: "GEES (Protege) (Kuala Lumpur)",
      company: "Petronas Berhad",
      period: "2021",
      description: `• Handling servers detail using Microsoft Excel and exposed with cloud server's implementation such as AWS and Azure. \n
        • Experience in using PowerApps and Power Automate to create CRUD related applications. \n
        • Basic usage of Power BI to visualize data from PowerApps and Excel. \n
        • Conduct and host online events such as meetups and quiz sessions during department activity. \n`,
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Flutter"]
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
      title: "Blanco Fragrance - E-commerce Mobile App",
      description: "A full-featured e-commerce mobile application built with Flutter, featuring user authentication, product catalog, shopping cart, payment integration, and order/shipping tracking.",
      technologies: ["Flutter", "Supabase", "ExpressJS", "Chip Payment Gateway", "OneSignal"],
      features: [
        "User authentication & profiles",
        "Product search & filtering",
        "Shopping cart & wishlist",
        "Secure payment processing",
        "Order tracking & history",
        "Push notifications",
        "Promotion & Campaigns",
        "Real-time inventory updates"
      ],
      images: [
        "../public/blanco/image1.jpg",
        "../public/blanco/image2.jpg",
        "../public/blanco/image3.jpg",
        "../public/blanco/image4.jpg",
        "../public/blanco/image5.jpg",
        "../public/blanco/image6.jpg",
        "../public/blanco/image7.jpg",
      ],
      status: "Completed",
      year: "2025",
      url: "https://play.google.com/store/apps/details?id=com.mycompany.blancoapp"
    },
    {
      title: "NF Studio - Interior Design Portfolio",
      description: "A stunning landing page website for interior designers to showcase their portfolio and attract new clients. Features responsive design, interactive galleries, client testimonials, and contact forms with modern animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      features: [
        "Responsive portfolio gallery",
        "Project filtering & categories",
        "Client testimonials carousel",
        "Interactive contact forms",
        "Smooth scroll animations",
        "Mobile-first design",
        "Fast loading performance"
      ],
      images: [
        "../public/nfstudio/image1.jpg",
        "../public/nfstudio/image2.jpg",
        "../public/nfstudio/image3.jpg",
        "../public/nfstudio/image4.jpg",
        "../public/nfstudio/image5.jpg",
      ],
      status: "Completed",
      year: "2024",
      url: "https://nfstudio.my"
    }
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
      <div className="embla relative w-full h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {images.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 h-full">
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-blue-600 scale-125' : 'bg-white/50'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">Software Engineer</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-indigo-800/50 px-4 py-2 rounded-full">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Ahmad Syamil</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="inline-flex items-center gap-2 bg-gray-800/50 border-gray-600 text-gray-100 hover:bg-gray-700/50"
                  onClick={() => window.open(`https://github.com/${contactInfo.github}`, '_blank')}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">@{contactInfo.github}</span>
                </Button>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building the Future of
                <span className="text-blue-300 block">Financial Services</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Experienced IT professional adept at supporting development, implementation, and operations of banking and investment applications, leveraging Spring Boot and microservices architecture. Skilled in providing user support, resolving issues promptly
                during testing phases. Expertise in disaster recovery, documentation, and CAB presentations. Strong background in security, resolving VAPT issues, conducting code reviews, and ensuring application integrity. Proven track record in building,
                maintaining, and scaling financial applications with millions of user base. Comprehensive understanding of IT infrastructure from the development to the operations end to end.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-black hover:bg-blue-800" onClick={() => window.open("https://drive.google.com/file/d/12VVZpGKc04IBfXLzTOhLcWmp0Ut_372J/view?usp=sharing", '_blank')}>
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-300 text-black hover:bg-purple-800"
                  onClick={() => window.open(contactInfo.blog, '_blank')}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Visit Blog
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-50 scale-110"></div>
                <Avatar className="relative w-48 h-48 border-4 border-blue-300/50">
                  <AvatarImage src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg" alt="Ahmad Syamil - Software Engineer" />
                  <AvatarFallback className="text-6xl bg-blue-600">JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks used in enterprise banking and financial services applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.slice(0, showAllSkills ? skills.length : 5).map((skill, index) => (
              <Card key={skill.name} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Code2 className="w-8 h-8 mx-auto text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={toggleSkills}
              className="text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300"
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

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A track record of delivering high-quality software solutions in the financial industry
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6 mb-12">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                          <CardDescription className="text-blue-600 font-medium text-lg">
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
                      <div className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                        {expandedExperiences[index] ? exp.description : truncateText(exp.description)}
                      </div>
                      {exp.description.split(' ').length > 60 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExperience(index)}
                          className="mb-4 text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
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
                          <Badge key={tech} variant="outline" className="text-blue-700 border-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-12 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional certifications validating expertise in key technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-2">{cert.year}</Badge>
                  <p className="text-sm text-gray-600 mb-4">ID: {cert.credentialId}</p>
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

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="relative h-96">
                    <ProjectImageCarousel images={projects[currentProjectIndex].images} title={projects[currentProjectIndex].title} />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white">
                        <Smartphone className="w-3 h-3 mr-1" />
                        {projects[currentProjectIndex].status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{projects[currentProjectIndex].year}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{projects[currentProjectIndex].title}</h3>
                    <p className="text-gray-700 mb-6">{projects[currentProjectIndex].description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {projects[currentProjectIndex].features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentProjectIndex].technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-blue-700 border-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-6" onClick={() => window.open(projects[currentProjectIndex].url, '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project Details
                    </Button>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center gap-4">
                      <Button
                        variant="outline"
                        className="flex-1 bg-white hover:bg-gray-50"
                        onClick={prevProject}
                      >
                        <ChevronLeft className="h-4 w-2 mr-1" />
                        Prev Project
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-white hover:bg-gray-50"
                        onClick={nextProject}
                      >
                        Next Project
                        <ChevronRight className="h-4 w-2 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Project Counter */}
              <div className="flex justify-center mt-4 gap-2">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6 mb-12">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-gray-900">{edu.degree}</CardTitle>
                          <CardDescription className="text-indigo-600 font-medium text-lg">
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
                        <span className="font-semibold text-gray-700">GPA: </span>
                        <span className="text-indigo-600 font-medium">{edu.gpa}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <Award className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-12 bg-indigo-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's connect and discuss opportunities to work together
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{contactInfo.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium text-lg">
                  Software Engineer • Your System Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => window.open(contactInfo.whatsappUrl, '_blank')}>
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">{contactInfo.whatsapp}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => window.open(contactInfo.instagramUrl, '_blank')}>
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.583.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849-.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Instagram</h3>
                      <p className="text-gray-600">instagram.com/syamil24</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => window.open(contactInfo.blog, '_blank')}>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Blog</h3>
                      <p className="text-gray-600">blog.syamilthoughts.com</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to start a conversation?</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" onClick={() => window.open("https://wa.link/3s1b4x", '_blank')}>
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
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to bring your company to the digital era? Let's discuss how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
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
