import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  ChevronUp
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [expandedExperiences, setExpandedExperiences] = useState<{[key: number]: boolean}>({});

  const toggleExperience = (index: number) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
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
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Java", level: 88 },
    { name: "SQL", level: 92 },
    { name: "MongoDB", level: 75 },
    { name: "AWS", level: 82 },
    { name: "Docker", level: 78 },
    { name: "Git", level: 95 }
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Corporate Banking Solutions Ltd",
      period: "2022 - Present",
      description: "Leading development of core banking applications, implementing microservices architecture, and mentoring junior developers. Responsible for critical payment processing systems handling millions of transactions daily. Collaborated closely with product managers and stakeholders to define technical requirements and delivery timelines. Established coding standards and best practices for the development team. Implemented automated testing frameworks that reduced bug reports by 60%. Led the migration of legacy systems to cloud-native architecture using AWS services. Conducted technical interviews and onboarded new team members. Participated in architecture review boards and technical decision-making processes.",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Software Engineer",
      company: "Financial Tech Corp",
      period: "2020 - 2022",
      description: "Developed and maintained banking software solutions, collaborated with cross-functional teams, and improved system performance by 40%. Specialized in fraud detection algorithms and real-time transaction processing. Built RESTful APIs serving millions of requests per day with 99.9% uptime. Optimized database queries and implemented caching strategies that reduced response times by 50%. Worked on PCI DSS compliance initiatives ensuring secure handling of sensitive financial data. Mentored junior developers and conducted code reviews to maintain high code quality standards. Participated in agile development processes and sprint planning sessions.",
      technologies: ["Python", "Django", "React", "MySQL", "Redis", "Kubernetes"]
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      period: "2019 - Present",
      description: "Delivered custom software solutions for small to medium businesses, including e-commerce platforms, mobile applications, and web applications. Managed full project lifecycle from requirements gathering to deployment. Successfully completed over 25 projects with a 100% client satisfaction rate. Specialized in React Native mobile app development and modern web technologies. Provided ongoing maintenance and support for deployed applications. Built long-term relationships with clients resulting in repeat business and referrals. Handled project management, client communication, and technical implementation independently.",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Flutter"]
    }
  ];

  const certificates = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-SA-2023-001"
    },
    {
      name: "Certified Java Developer",
      issuer: "Oracle",
      year: "2022",
      credentialId: "OCA-Java-2022"
    },
    {
      name: "React Professional Certificate",
      issuer: "Meta",
      year: "2021",
      credentialId: "META-REACT-2021"
    },
    {
      name: "Financial Technology Certificate",
      issuer: "MIT Professional Education",
      year: "2021",
      credentialId: "MIT-FINTECH-2021"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Programming Competition Winner", "Computer Science Society President"]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Metropolitan High School",
      period: "2014 - 2016",
      gpa: "A+ Grade",
      achievements: ["Mathematics Olympiad Finalist", "Science Fair Winner"]
    },
    {
      degree: "Secondary School Certificate",
      institution: "Central Secondary School",
      period: "2012 - 2014",
      gpa: "A+ Grade",
      achievements: ["Top 5% of graduating class", "Computer Club President"]
    }
  ];

  const projects = [
    {
      title: "ShopEase - E-commerce Mobile App",
      description: "A full-featured e-commerce mobile application built with React Native, featuring user authentication, product catalog, shopping cart, payment integration, and order tracking. Includes admin panel for inventory management.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe API", "Firebase"],
      features: [
        "User authentication & profiles",
        "Product search & filtering",
        "Shopping cart & wishlist",
        "Secure payment processing",
        "Order tracking & history",
        "Push notifications",
        "Admin dashboard",
        "Real-time inventory updates"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      status: "Completed",
      year: "2023"
    },
    {
      title: "DesignSpace - Interior Design Portfolio",
      description: "A stunning landing page website for interior designers to showcase their portfolio and attract new clients. Features responsive design, interactive galleries, client testimonials, and contact forms with modern animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      features: [
        "Responsive portfolio gallery",
        "Project filtering & categories",
        "Client testimonials carousel",
        "Interactive contact forms",
        "Smooth scroll animations",
        "SEO optimization",
        "Mobile-first design",
        "Fast loading performance"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      status: "Completed",
      year: "2023"
    }
  ];

  const contactInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    whatsapp: "+1 (555) 123-4567",
    instagram: "@johndoe_dev"
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
                  <span className="text-sm font-medium">John Doe</span>
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building the Future of
                <span className="text-blue-300 block">Banking Technology</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Experienced software engineer specializing in corporate banking solutions with 4+ years of expertise in full-stack development. Passionate about creating secure, scalable applications that power financial institutions worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-50 scale-110"></div>
                <Avatar className="relative w-48 h-48 border-4 border-blue-300/50">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="John Doe - Software Engineer" />
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
              Proficient in modern technologies and frameworks used in enterprise banking applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
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
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {expandedExperiences[index] ? exp.description : truncateText(exp.description)}
                      </p>
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
                  <p className="text-sm text-gray-600">ID: {cert.credentialId}</p>
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
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-green-600 text-white">
                              <Smartphone className="w-3 h-3 mr-1" />
                              {project.status}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary">{project.year}</Badge>
                          </div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                          <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-blue-700 border-blue-200">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
      <section className="py-20 bg-white">
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
                  Software Engineer • Banking Technology Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">{contactInfo.whatsapp}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">{contactInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.583.07-4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849-.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Instagram</h3>
                        <p className="text-gray-600">{contactInfo.instagram}</p>
                      </div>
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
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
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
            Ready to bring your next banking or fintech project to life? Let's discuss how we can create something amazing together.
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
