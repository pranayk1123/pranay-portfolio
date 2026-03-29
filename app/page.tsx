// src/app/page.tsx
import Image from 'next/image';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award, FileCheck, Code2 } from 'lucide-react';

// Custom LinkedIn Icon
const LinkedinIcon = ({ size = 28 }) => (
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

// Common Card Component (Upgraded for professional look)
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-sky-200">
    {children}
  </div>
);

// Skills Data
const skills = {
  "Programming": ["Java", "Python", "SQL", "C", "C++"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
  "OS & Security": ["Linux", "Kali Linux (Basic Knowledge)"],
  "Data & Tools": ["Power BI", "Tableau", "Git/GitHub", "Excel", "Data Cleaning/Analysis"]
};

// Awards Data
const awards = [
  {
    title: "1st Prize - Hackathon (Ruia College)",
    event: "TECHSTORM 2025",
    project: "Orbit Scope",
    date: "Dec 2025"
  },
  {
    title: "1st Prize - Code Relay (KC College)",
    event: "FIESTRON 25-26",
    date: "Dec 2025"
  }
];

// Certificates Data
const certificates = [
  "Java Programming Certificate",
  "Linux Certification"
];

// Navbar Links
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Awards", href: "#awards" }
];

export default function Home() {
  const info = {
    name: "Pranay Shekhar Kalekar",
    title: "IT Graduate | Software Developer Enthusiast",
    email: "pranaykalekar10@gmail.com",
    phone: "8108802249",
    address: "Bhandup (W), Mumbai, Maharashtra"
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
            Hire Me
          </a>
        </div>
      </nav>

      {/* --- 1. HERO / HEADER SECTION --- */}
      <header className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          
          {/* CIRCULAR PROFILE PHOTO */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-slate-700 p-1 mb-8 shadow-2xl overflow-hidden bg-slate-800">
            <Image 
              src="/pranay.jpg" 
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
            <a href="/Pranay_Kalekar_Resume.pdf" target="_blank" className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-sky-500/30 flex items-center gap-2 text-lg">
              <FileCheck size={20} /> View Resume
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-20">
        
        {/* --- 2. CAREER OBJECTIVE --- */}
        <section id="about" className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-3">About Me</h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Professional Summary</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Recent IT Graduate eager to obtain a responsible position in an organization where I can apply my best capabilities, skills, and knowledge. Motivated to learn continuously, contribute effectively to team goals, and further develop my technical and problem-solving skills in a dynamic environment.
          </p>
        </section>

        {/* --- 3. EDUCATION SECTION --- */}
        <section id="education">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
            <GraduationCap className="text-sky-600" size={32} /> Education Background
          </h2>
          <Card>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Graduated</span>
                <h3 className="text-2xl font-bold text-slate-900">TYBSc Information Technology</h3>
                <p className="text-lg text-slate-700 font-medium mt-1">Kirti College</p>
                <p className="text-slate-500 mt-1">Passed in 2025</p>
              </div>
              <div className="md:text-right bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-4xl font-black text-sky-600">8.91 <span className="text-lg text-slate-500 font-medium">CGPA</span></span>
                <p className="text-slate-500 mt-1">(Semester 4)</p>
              </div>
            </div>
            <div className="border-t border-slate-200 my-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 bg-slate-50 p-6 rounded-xl">
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">12th Commerce</p>
                <p className="font-medium text-slate-900">Ramananda Arya D.A.V. College</p>
                <p>62.67% (2023)</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">10th Standard</p>
                <p className="font-medium text-slate-900">Navjeevan Vidya Mandir</p>
                <p>83.20% (2022)</p>
              </div>
            </div>
          </Card>
        </section>

        {/* --- 4. ACHIEVEMENTS SECTION --- */}
        <section id="awards">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
            <Award className="text-sky-600" size={32} /> Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index}>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-sky-100 p-3 rounded-lg text-sky-600">
                    <Award size={24} />
                  </div>
                  <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{award.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h3>
                <p className="text-slate-600 font-medium">{award.event}</p>
                {award.project && (
                  <div className="mt-4 inline-block bg-slate-100 border border-slate-200 text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold">
                    Project: <span className="text-sky-600">{award.project}</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* --- 5. TECHNICAL SKILLS SECTION --- */}
        <section id="skills">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
            <Code2 className="text-sky-600" size={32} /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* --- 6. CERTIFICATIONS --- */}
        <section id="certifications">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
            <FileCheck className="text-sky-600" size={32} /> Certifications
          </h2>
          <Card>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 text-lg font-medium">
              {certificates.map((cert, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* --- 7. FOOTER / CONTACT SECTION --- */}
        <footer id="contact" className="border-t border-slate-200 pt-16 text-center text-slate-600 pb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
          <p className="text-lg max-w-xl mx-auto mb-8">I am currently open for junior developer roles and internships. My inbox is always open!</p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" className="bg-white p-4 rounded-full shadow-sm border border-slate-200 hover:border-sky-500 hover:text-sky-600 hover:shadow-md transition-all">
              <LinkedinIcon size={24} />
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