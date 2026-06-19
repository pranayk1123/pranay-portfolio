// src/app/page.tsx
import Image from 'next/image';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, FileCheck, Code2, Target } from 'lucide-react';

// Custom LinkedIn Icon
const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom GitHub Icon
const GithubIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.14a5.8 5.8 0 0 0-1.6-3.8 5.36 5.36 0 0 0 .15-3.8s-1.3-.4-4 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.8-4-1.4-4-1.4a5.36 5.36 0 0 0 .15 3.8A5.8 5.8 0 0 0 3 8.84c0 5.58 3.32 6.79 6.5 7.14a4.8 4.8 0 0 0-1 3.02v4" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

// Common Card Component
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-sky-200">
    {children}
  </div>
);

// Skills Data based on Resume
const skills = {
  "Programming Languages": ["Java", "Python", "C", "C++", "JavaScript", "Go"],
  "Web Technologies": ["HTML", "CSS", "Node js", "Express js"],
  "Database": ["MySQL", "MongoDB"],
  "Tools": ["GitHub", "Linux", "Power BI", "Microsoft 365", "VS Code"],
  "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Eager to Learn"]
};

// Internship Experience Data
const experience = [
  {
    role: "Back-end Developer Intern",
    company: "Ervon Technology Pvt. Ltd.",
    date: "January 2026 – March 2026",
    details: [
      "Developed a travel platform using Express.js, focusing on optimized server-side logic and RESTful API integration.",
      "Managed full-stack synchronization to ensure seamless data flow between the UI and SQL databases.",
      "Optimized end-to-end workflows, including user authentication and booking processes."
    ],
    projectLink: "https://travalling-website.vercel.app/"
  }
];

// Certifications Data
const certifications = [
  {
    title: "Java Certification",
    issuer: "Asset Computer Education",
    description: "Gained knowledge of Core Java, OOP concepts, Collections Framework, Exception Handling, Multithreading, JDBC, Servlets, JSP, and database integration."
  }
];

// Areas of Interest
const interests = [
  "Cybersecurity", 
  "Networking", 
  "Software Testing", 
  "Web Development", 
  "Database Management"
];

// Navbar Links
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" }
];

export default function Home() {
  const info = {
    name: "Pranay Shekhar Kalekar",
    title: "BSc. Information Technology Graduate",
    email: "pranaykalekar1123@gmail.com",
    phone: "+91-8108802269",
    address: "Mumbai, Maharashtra",
    github: "https://github.com/pranayk1123",
    linkedin: "https://www.linkedin.com/in/pranay-kalekar-921850338"
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- PROFESSIONAL NAVBAR --- */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-extrabold text-slate-900 tracking-tight">
            Pranay<span className="text-sky-600">.</span>
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <a href="#contact" className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
            Contact Me
          </a>
        </div>
      </nav>

      {/* --- 1. HERO / HEADER SECTION --- */}
      <header className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          
          {/* PROFILE PHOTO UPDATED HERE */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-slate-700 p-1 mb-8 shadow-2xl overflow-hidden bg-slate-800 flex items-center justify-center">
            <Image 
              src="/profile.png" 
              alt="Pranay Shekhar Kalekar"
              fill 
              className="object-cover rounded-full" 
              priority 
              sizes="(max-width: 768px) 160px, 192px" 
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{info.name}</h1>
          <p className="mt-5 text-xl md:text-2xl text-sky-200 font-medium">{info.title}</p>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-300 font-medium">
            <a href={`mailto:${info.email}`} className="flex items-center gap-2.5 hover:text-sky-400 transition-colors">
              <Mail size={20} className="text-sky-500" /> {info.email}
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href={`tel:${info.phone}`} className="flex items-center gap-2.5 hover:text-sky-400 transition-colors">
              <Phone size={20} className="text-sky-500" /> {info.phone}
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-2.5">
              <MapPin size={20} className="text-sky-500" /> {info.address}
            </span>
          </div>

          <div className="mt-12 flex gap-5 justify-center">
            <a href="/Resume.pdf" target="_blank" className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-sky-500/30 flex items-center gap-2 text-lg">
              <FileCheck size={20} /> View Resume
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-20">
        
        {/* --- 2. CAREER OBJECTIVE --- */}
        <section id="about" className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-3">About Me</h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Profile Summary</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            IT Graduate with a strong foundation in computer systems, networking, cybersecurity, software testing, web technologies and database management. Skilled at learning new technologies and solving technical challenges through analytical thinking and problem-solving. Seeking an entry-level IT opportunity to apply my skills, contribute to team success, and grow professionally in the fields of Networking, Cybersecurity, Software Testing, Web Development, or related IT domains.
          </p>
        </section>

        {/* --- 3. INTERNSHIP / EXPERIENCE SECTION --- */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
            <Briefcase className="text-sky-600" size={32} /> Internship Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-lg text-sky-600 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="inline-block bg-slate-100 text-slate-600 text-sm font-bold px-4 py-2 rounded-full">
                    {exp.date}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed mb-4 ml-1">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                {exp.projectLink && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-sm font-semibold text-slate-500 mr-2">Project Link:</span>
                    <a href={exp.projectLink} target="_blank" rel="noreferrer" className="text-sky-600 hover:text-sky-800 font-medium underline underline-offset-4">
                      {exp.projectLink}
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* --- 4. EDUCATION SECTION --- */}
        <section id="education">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
            <GraduationCap className="text-sky-600" size={32} /> Education Background
          </h2>
          <Card>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">B.Sc. Information Technology</h3>
                <p className="text-lg text-slate-700 font-medium mt-1">Kirti College, Dadar</p>
              </div>
              <div className="md:text-right bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-4xl font-black text-sky-600">8.73 <span className="text-lg text-slate-500 font-medium">CGPA</span></span>
              </div>
            </div>
          </Card>
        </section>

        {/* --- 5. TECHNICAL SKILLS SECTION --- */}
        <section id="skills">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
            <Code2 className="text-sky-600" size={32} /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-300 transition-colors">
                <h3 className="font-bold text-slate-900 border-b-2 border-slate-100 pb-3 mb-4 uppercase text-sm tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-md font-medium hover:bg-sky-100 hover:text-sky-800 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 6. CERTIFICATIONS & INTERESTS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section id="certifications">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
              <FileCheck className="text-sky-600" size={32} /> Certification
            </h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <h3 className="text-xl font-bold text-slate-900">{cert.title}</h3>
                  <p className="text-sky-600 font-medium mb-3">{cert.issuer}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="interests">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
              <Target className="text-sky-600" size={32} /> Areas of Interest
            </h2>
            <Card>
              <ul className="space-y-4">
                {interests.map((interest, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-slate-700 font-medium">
                    <span className="w-2.5 h-2.5 bg-sky-500 rounded-full"></span>
                    {interest}
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        </div>

        {/* --- 7. FOOTER / CONTACT SECTION --- */}
        <footer id="contact" className="border-t border-slate-200 pt-16 text-center text-slate-600 pb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
          <p className="text-lg max-w-xl mx-auto mb-8">I am currently seeking entry-level IT opportunities to apply my skills. My inbox is always open!</p>
          <div className="flex justify-center gap-6 mb-12">
            <a href={info.linkedin} target="_blank" rel="noreferrer" className="bg-white p-4 rounded-full shadow-sm border border-slate-200 hover:border-sky-500 hover:text-sky-600 hover:shadow-md transition-all">
              <LinkedinIcon size={24} />
            </a>
            <a href={info.github} target="_blank" rel="noreferrer" className="bg-white p-4 rounded-full shadow-sm border border-slate-200 hover:border-sky-500 hover:text-sky-600 hover:shadow-md transition-all">
              <GithubIcon size={24} />
            </a>
            <a href={`mailto:${info.email}`} className="bg-white p-4 rounded-full shadow-sm border border-slate-200 hover:border-sky-500 hover:text-sky-600 hover:shadow-md transition-all">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-slate-500">© 2026 Pranay Kalekar. Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>
    </main>
  );
}