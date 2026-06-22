// src/app/page.tsx
import Image from 'next/image';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, FileCheck, Code2, Target, ExternalLink, ChevronRight, CircuitBoard, Sparkles } from 'lucide-react';

// 1. Custom Icons 
const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.14a5.8 5.8 0 0 0-1.6-3.8 5.36 5.36 0 0 0 .15-3.8s-1.3-.4-4 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.8-4-1.4-4-1.4a5.36 5.36 0 0 0 .15 3.8A5.8 5.8 0 0 0 3 8.84c0 5.58 3.32 6.79 6.5 7.14a4.8 4.8 0 0 0-1 3.02v4" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

// 2. Skills Data 
const skills = {
  "Programming": ["Java", "Python", "C", "C++", "JavaScript", "Go"],
  "Web Tech": ["HTML", "CSS", "Node.js", "Express.js", "React"],
  "Database": ["MySQL", "MongoDB"],
  "Tools & OS": ["GitHub", "Linux", "Power BI", "VS Code"],
};

// 3. Common Animated Card Component
const Card = ({ children, className = '', aosDelay = 0 }: { children: React.ReactNode, className?: string, aosDelay?: number }) => (
  <div 
    className={`bg-zinc-900 border border-zinc-800/60 p-8 rounded-3xl shadow-lg shadow-black/30 hover:border-indigo-500/50 hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)] transition-all duration-500 hover:-translate-y-1 group ${className}`}
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    {children}
  </div>
);

export default function Home() {
  const info = {
    name: "Pranay Kalekar",
    title: "Software Engineer & IT Graduate",
    email: "pranaykalekar1123@gmail.com",
    phone: "+91-8108802269",
    address: "Mumbai, Maharashtra",
    github: "https://github.com/pranayk1123",
    linkedin: "https://www.linkedin.com/in/pranay-kalekar-921850338"
  };

  return (
    <main className="min-h-screen bg-[#06080d] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden">
      
      {/* --- FLOATING NAVBAR (Logo Left, Pill Centered) --- */}
      <nav className="fixed top-6 w-full z-50 px-6 md:px-12 flex items-center">
        
        {/* LOGO - Left Side */}
        <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2 z-10 cursor-pointer hover:scale-105 transition-transform">
          <CircuitBoard size={24} className="text-indigo-500" />
          pranay<span className="text-indigo-500">.NetSec</span>
        </div>

        {/* PILL - Absolute Center */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-full flex items-center gap-6 md:gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="hidden md:flex gap-6">
            {['About', 'Experience', 'Education', 'Skills'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <a href="/Resume.pdf" target="_blank" className="bg-white hover:bg-zinc-200 text-[#06080d] px-5 py-2 rounded-full text-sm font-bold transition-all items-center gap-2 flex hover:scale-105">
            Resume <ChevronRight size={16} />
          </a>
        </div>

      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-visible min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center" data-aos="zoom-out">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-black/50 hover:bg-zinc-800 transition-colors cursor-default">
            <Sparkles size={16} className="text-indigo-400 animate-pulse" />
              Building digital experiences that matter
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white">
            Hi, I'm <br className="md:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 animate-pulse">
              Pranay Kalekar.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-3xl leading-relaxed">
            Crafting robust backend systems and exploring the exciting realms of <span className="text-white font-medium">Cybersecurity, Networking</span> and <span className="text-white font-medium">Modern Web Technologies</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full sm:w-auto mb-16">
            <a href="#contact" className="w-full sm:w-auto bg-white text-[#06080d] px-10 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 text-lg">
              <Mail size={20} /> Let's Connect
            </a>
            <div className="flex items-center gap-4">
              <a href={info.github} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-indigo-500 transition-all hover:scale-110 shadow-lg shadow-black/50">
                <GithubIcon size={24} />
              </a>
              <a href={info.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-indigo-500 transition-all hover:scale-110 shadow-lg shadow-black/50">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>

          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 shadow-[0_0_60px_rgba(99,102,241,0.4)] hover:shadow-[0_0_80px_rgba(99,102,241,0.6)] transition-shadow duration-500 group animate-pulse">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-950 border-4 border-zinc-950 group-hover:scale-95 transition-transform duration-500">
              <Image 
                src="/profile.png" 
                alt="Pranay Shekhar Kalekar"
                fill 
                className="object-cover hover:scale-110 transition-transform duration-700" 
                priority 
                sizes="(max-width: 768px) 192px, 256px" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <div className="max-w-6xl mx-auto px-6 pb-32 space-y-32 z-10 relative">

        {/* --- 2. ABOUT --- */}
        <section id="about" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">About Me</h2>
            <div className="h-px bg-gradient-to-r from-indigo-500/50 to-transparent flex-1"></div>
          </div>
          <Card aosDelay={100}>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              I am an IT Graduate with a solid foundation in <span className="text-indigo-400 font-semibold">computer systems, networking, cybersecurity, software testing, web technologies,</span> and <span className="text-cyan-400 font-semibold">database management</span>. Skilled at learning new technologies and solving technical challenges through analytical thinking and problem-solving. Currently seeking an entry-level IT opportunity to apply my skills, contribute to team success, and grow professionally.
            </p>
          </Card>
        </section>

        {/* --- 3. EXPERIENCE --- */}
        <section id="experience" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Experience</h2>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1"></div>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-16">
            <div className="relative pl-10 md:pl-16 group" data-aos="fade-right">
              <div className="absolute w-6 h-6 bg-zinc-950 border-4 border-indigo-500 rounded-full -left-[14px] top-1 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">Back-end Developer Intern</h3>
                  <div className="text-xl text-slate-400 mt-2 flex items-center gap-2">
                    <Briefcase size={20} className="text-indigo-500" /> Ervon Technology Pvt. Ltd.
                  </div>
                </div>
                <div className="text-sm font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-full backdrop-blur-md w-fit">
                  Jan 2026 – Mar 2026
                </div>
              </div>
              
              <div className="bg-zinc-900 border border-white/5 hover:border-indigo-500/30 p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 shadow-lg shadow-black/50 hover:shadow-[0_10px_40px_rgba(99,102,241,0.1)]">
                <ul className="space-y-4 text-lg text-slate-300 mb-8 font-light">
                  <li className="flex gap-4">
                    <span className="text-indigo-500 mt-1">✦</span>
                    <span>Developed a robust travel platform using <strong className="text-white font-medium">Express.js</strong>, optimizing server-side logic and RESTful API integration.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-indigo-500 mt-1">✦</span>
                    <span>Managed full-stack synchronization to ensure seamless data flow between the UI and SQL databases.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-indigo-500 mt-1">✦</span>
                    <span>Optimized end-to-end workflows, including user authentication and booking processes.</span>
                  </li>
                </ul>
                
                <a href="https://travalling-website.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-black bg-indigo-400 hover:bg-indigo-300 transition-colors px-6 py-3 rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105">
                  <ExternalLink size={18} /> View Live Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. EDUCATION --- */}
        <section id="education" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Education</h2>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card aosDelay={100}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">B.Sc. Information Technology</h3>
                  <p className="text-xl text-slate-400 mt-2 flex items-center gap-2">
                    <GraduationCap size={20} className="text-indigo-500" /> Kirti College, Dadar
                  </p>
                </div>
                <div className="text-sm font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-full backdrop-blur-md w-fit">
                  Graduated
                </div>
              </div>
              <p className="text-slate-500 mt-6">Passed in <strong className="text-white">2025</strong> with a final <strong className="text-white text-xl">CGPA of 8.73</strong>.</p>
            </Card>

            <Card aosDelay={200} className="relative overflow-hidden group">
                <CircuitBoard size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-900 opacity-30 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-xl font-bold text-white mb-3">Key Focus Areas</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Database Architecture, Operating Systems, Networking Fundamentals, & Web Security.</p>
                <a href="#skills" className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-white transition-colors">
                    Explore Skills <ChevronRight size={14} />
                </a>
            </Card>
          </div>
        </section>

        {/* --- 5. TECHNICAL SKILLS --- */}
        <section id="skills" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Tech Arsenal</h2>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-lg shadow-black/40 hover:border-indigo-500/30 transition-colors group" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code2 size={24} className="text-indigo-400 group-hover:rotate-12 transition-transform" /> {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map(skill => (
                    <span key={skill} className="bg-zinc-950 border border-zinc-800 text-slate-300 text-base px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 6. CERTIFICATIONS & ACHIEVEMENTS --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-800 p-10 rounded-3xl relative overflow-hidden group hover:border-indigo-500/40 transition-colors" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-4 mb-8">
               <FileCheck size={28} className="text-indigo-400" />
               <h2 className="text-2xl font-bold text-white">Certification</h2>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Java Certification</h3>
            <p className="text-indigo-400 font-semibold mb-6">Asset Computer Education</p>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Mastered Core Java, OOP concepts, Collections Framework, Exception Handling, Multithreading, JDBC, Servlets, JSP, and database integration.
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-800 p-10 rounded-3xl relative overflow-hidden group hover:border-blue-500/40 transition-colors" data-aos="zoom-in" data-aos-delay={100}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-4 mb-8">
               <CircuitBoard size={28} className="text-blue-400" />
               <h2 className="text-2xl font-bold text-white">Areas of Interest</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
              {["Cybersecurity", "Networking", "Software Testing", "Web Development", "Database Mgt."].map((interest, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300 text-lg font-medium group-hover:translate-x-1 transition-transform">
                  <span className="text-blue-400">✧</span>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* --- 7. FOOTER / CONTACT --- */}
      <footer id="contact" className="relative border-t border-white/5 bg-[#030408] pt-24 pb-12 overflow-hidden mt-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Let's craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">excellent systems together.</span></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
            I'm currently seeking entry-level developer roles. Whether you have a question or just want to chat, my inbox is always open!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 w-full sm:w-auto">
            <a href={`mailto:${info.email}`} className="flex items-center gap-3 text-white font-bold bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto text-lg">
              <Mail size={20} className="text-indigo-400"/> Email Me
            </a>
            <a href={`tel:${info.phone}`} className="flex items-center gap-3 text-white font-bold bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto text-lg">
              <Phone size={20} className="text-indigo-400"/> Call Me
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-20 text-slate-400 font-medium">
            <a href={info.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
               <LinkedinIcon size={24} /> LinkedIn
            </a>
            <a href={info.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
               <GithubIcon size={24} /> GitHub
            </a>
             <div className="flex items-center gap-2"><MapPin size={24} /> {info.address}</div>
          </div>
          
          <div className="text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
            <p>© {new Date().getFullYear()} Pranay Kalekar. sys.exit(0);</p>
            <p className="flex items-center gap-2">Built with <span className="text-white font-bold">Next.js</span> & <span className="text-blue-400 font-bold">Tailwind</span></p>
          </div>
        </div>
      </footer>
    </main>
  );
}