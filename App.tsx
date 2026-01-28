
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Terminal, 
  Code2, 
  Layers, 
  Database, 
  Cpu,
  ChevronRight,
  ExternalLink,
  Bot,
  Send,
  X,
  Menu,
  ChevronDown,
  User,
  Heart,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { RESUME_DATA, PROJECTS, EDUCATION, SKILLS } from './constants';
import { askResumeAssistant } from './services/geminiService';
import { Message } from './types';

// Global Event to trigger Assistant from other components
const openAssistantEvent = new Event('openAssistant');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-rose-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          EW.
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-rose-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-rose-300 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-rose-300 transition-colors">Projects</a>
          <a href="#education" className="hover:text-rose-300 transition-colors">Education</a>
          <a href="#contact" className="hover:text-rose-300 transition-colors">Contact</a>
        </div>
        <button className="md:hidden text-rose-300 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass border-b border-white/10 p-6 flex flex-col gap-6 text-center md:hidden animate-in slide-in-from-top duration-300">
          <a href="#about" className="text-lg font-medium hover:text-rose-300" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="text-lg font-medium hover:text-rose-300" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="text-lg font-medium hover:text-rose-300" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#education" className="text-lg font-medium hover:text-rose-300" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#contact" className="text-lg font-medium hover:text-rose-300" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden bg-grid">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-medium text-rose-400 mb-8 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Building <span className="text-rose-400">elegant</span> software solutions.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl font-light leading-relaxed">
            I'm {RESUME_DATA.name}, a Software Engineer specializing in full-stack development and system design with a passion for clean, purposeful code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(251,113,133,0.3)]">
              View My Work <ChevronRight size={18} />
            </a>
            <button 
              onClick={() => window.dispatchEvent(openAssistantEvent)}
              className="px-8 py-4 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-full font-bold hover:bg-rose-500/20 transition-all flex items-center gap-2"
            >
              Ask AI about me <MessageCircle size={18} />
            </button>
            <div className="flex gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
              <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-rose-500/10 hover:border-rose-500/30 transition-all group" title="GitHub Profile">
                <Github size={20} className="group-hover:text-rose-400 transition-colors" />
              </a>
              <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-rose-500/10 hover:border-rose-500/30 transition-all group" title="LinkedIn Profile">
                <Linkedin size={20} className="group-hover:text-rose-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 bg-rose-500/10 rounded-[40px] blur-2xl group-hover:bg-rose-500/20 transition-all duration-500"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[40px] overflow-hidden border border-rose-500/20 glass rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-2xl">
              {imgError ? (
                <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-600">
                  <User size={120} strokeWidth={1} />
                </div>
              ) : (
                <img 
                  src={RESUME_DATA.profileImage} 
                  alt={RESUME_DATA.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-all duration-700 block"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-4 glass border border-rose-500/20 rounded-2xl shadow-2xl animate-float">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                    <Heart size={20} className="text-white fill-current" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Role</p>
                    <p className="text-sm font-bold">Engineer</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-500/50 animate-bounce p-2" aria-label="Scroll Down">
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-neutral-900/30">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((cat, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-rose-500/40 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
              {i === 0 && <Code2 size={24} />}
              {i === 1 && <Layers size={24} />}
              {i === 2 && <Database size={24} />}
              {i === 3 && <Cpu size={24} />}
            </div>
            <h3 className="text-xl font-bold mb-4">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span key={j} className="text-xs px-2 py-1 rounded bg-rose-500/5 text-rose-200/60 border border-rose-500/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-neutral-400">Engineering robust platforms with high-quality user experiences.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <div key={i} className="group relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10 hover:border-rose-500/20 transition-all flex flex-col h-full">
            <div className="h-64 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
            </div>
            <div className="p-8 relative flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, j) => (
                  <span key={j} className="text-[10px] uppercase tracking-wider font-bold text-rose-400 px-2 py-0.5 rounded-full bg-rose-400/10">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-neutral-400 text-sm mb-6 font-light">{project.description}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {project.longDescription.map((desc, k) => (
                  <li key={k} className="text-xs text-neutral-500 flex gap-2">
                    <span className="text-rose-500">•</span> {desc}
                  </li>
                ))}
              </ul>
              {project.url ? (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  View on GitHub <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium opacity-50 cursor-not-allowed">
                  Under NDA
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ResumeAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Erykah's AI assistant. Ask me anything about her skills, projects, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenAssistant = () => setIsOpen(true);
    window.addEventListener('openAssistant', handleOpenAssistant);
    return () => window.removeEventListener('openAssistant', handleOpenAssistant);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await askResumeAssistant(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I had an error connecting. Please try again soon!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[550px] glass border border-rose-500/30 rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-rose-600/30 to-fuchsia-600/30 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Erykah's Assistant</h4>
                <p className="text-[10px] text-rose-300 font-medium tracking-wide">Powered by Gemini Flash</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={20} className="text-white" />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-neutral-950/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-rose-600 text-white rounded-tr-none shadow-lg shadow-rose-900/30' 
                  : 'bg-white/10 text-rose-50 rounded-tl-none border border-rose-500/10'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-rose-500/10 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-rose-400/60 animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-neutral-900/50 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me a question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-500/50 transition-all placeholder:text-neutral-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className={`p-3 rounded-xl transition-all shadow-lg ${
                isLoading ? 'bg-neutral-800 text-neutral-600' : 'bg-rose-600 text-white hover:bg-rose-500 shadow-rose-500/30'
              }`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-6 transition-all group shadow-rose-500/40 relative"
        >
          <Bot size={30} className="text-white" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-fuchsia-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute right-full mr-4 px-4 py-2 bg-rose-600 text-white text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl flex items-center gap-2 pointer-events-none">
            <Sparkles size={14} /> Hire Me? Ask AI
          </div>
        </button>
      )}
    </div>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 px-6 relative text-center">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6">Let's work together.</h2>
        <p className="text-neutral-400 max-w-xl mx-auto">
          I'm currently looking for new opportunities to build impactful software. Feel free to reach out and say hello!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
        <a href={`mailto:${RESUME_DATA.email}`} className="flex-1 p-8 glass border border-white/10 rounded-3xl flex flex-col items-center gap-4 hover:border-rose-500 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
            <Mail className="text-rose-400" />
          </div>
          <span className="text-sm text-neutral-400 mb-2 font-medium">Email Me</span>
          <span className="font-bold break-all text-rose-50 underline decoration-rose-500/30 group-hover:decoration-rose-500 transition-all">{RESUME_DATA.email}</span>
        </a>
        <div className="flex-1 p-8 glass border border-white/10 rounded-3xl flex flex-col items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MapPin className="text-rose-400" />
          </div>
          <span className="text-sm text-neutral-400 mb-2 font-medium">Location</span>
          <span className="font-bold text-rose-50">{RESUME_DATA.location}</span>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-neutral-200">
      <Navbar />
      <Hero />
      <Skills />
      
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 rounded-full overflow-hidden border border-rose-500/50 p-1 bg-white/5 shadow-lg shadow-rose-500/10">
                  <img src={RESUME_DATA.profileImage} alt={RESUME_DATA.name} className="w-full h-full object-cover rounded-full" />
               </div>
               <span className="text-rose-400 font-bold tracking-widest uppercase text-xs">My Story</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-8 leading-tight">Engineering with <span className="text-rose-500 italic">passion</span>.</h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
              {RESUME_DATA.summary}
            </p>
            <div className="flex items-center gap-4 text-sm text-rose-500/60 font-mono">
              <Terminal size={16} />
              <span>&lt;Erykah /&gt;</span>
            </div>
          </div>
          <div id="education" className="space-y-8">
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
               Education <div className="h-px bg-rose-500/20 flex-1"></div>
             </h3>
             {EDUCATION.map((edu, i) => (
               <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/20 transition-all group">
                 <h4 className="font-bold text-lg text-rose-50 group-hover:text-rose-400 transition-colors">{edu.degree}</h4>
                 <p className="text-rose-400/80 text-sm mb-2">{edu.institution} — {edu.duration}</p>
                 {edu.coursework && (
                   <div className="flex flex-wrap gap-2 mt-4">
                     {edu.coursework.map((course, j) => (
                       <span key={j} className="text-[10px] bg-rose-500/5 px-2 py-1 rounded text-rose-200/40 border border-rose-500/10">
                         {course}
                       </span>
                     ))}
                   </div>
                 )}
               </div>
             ))}
          </div>
        </div>
      </section>

      <Projects />
      <Contact />

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} {RESUME_DATA.name}. Designed with passion & code.</p>
          <div className="flex gap-6">
             <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-rose-400 transition-colors">
               <Github size={18} />
             </a>
             <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-rose-400 transition-colors">
               <Linkedin size={18} />
             </a>
             <a href={`mailto:${RESUME_DATA.email}`} className="text-neutral-600 hover:text-rose-400 transition-colors">
               <Mail size={18} />
             </a>
          </div>
        </div>
      </footer>

      <ResumeAssistant />
    </div>
  );
};

export default App;
