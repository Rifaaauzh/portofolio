import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Linkedin, Trophy, School,
  Briefcase, Code2, Cpu, Cloud, Award, ChevronLeft, ChevronRight
} from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollCert = (direction) => {
    const container = document.getElementById("cert-container");
    if (!container) return;
    const scrollAmount = 380;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const projects = [
    { title: "SmartPlugAI", subtitle: "AIoT Energy Prediction System", award: true, desc: "Developed an AIoT-based energy prediction system integrating Flutter and AWS services (Lambda, API Gateway, EventBridge, EC2, RDS) for real-time monitoring and forecasting.", tech: ["Flutter", "AWS", "Python", "Node.js", "LightGBM", "XGBoost"] },
    { title: "GoPhis", subtitle: "Anti-Phishing Training System", desc: "Built a phishing-simulation platform using Golang & Docker to train employees in recognizing deceptive emails.", tech: ["Golang", "Docker"] },
    { title: "SafeHarbour", subtitle: "Anonymous Harassment Reporting App", desc: "Secure Flutter app with encrypted Firebase backend for anonymous reporting.", tech: ["Flutter", "Firebase Auth", "Firestore"] },
    { title: "Smart Irrigation IoT", subtitle: "Automated Agriculture System", desc: "IoT system automating irrigation using soil moisture, water level & temperature sensors.", tech: ["IoT", "Flutter", "Firebase", "Python", "VOne Cloud"] },
    { title: "Health Monitoring System", subtitle: "Real-time Health Tracker", desc: "Web-based health metrics tracking with PHP backend and Firebase Realtime DB.", tech: ["PHP", "JavaScript", "Firebase"] },
    { title: "ToDoList Website", subtitle: "Task Management App", desc: "Modern responsive task manager built with Next.js.", tech: ["Next.js", "React"] },
  ];

  const certifications = [
    "Backend Development & API – Packt",
    "Cyber Security: Application of AI – Macquarie Univ.",
    "Cybersecurity Case Studies & Capstone – IBM",
    "Developing AI Applications with Python – IBM",
    "Frontend Development with React – Packt",
    "Incident Response & Digital Forensics – IBM",
    "MERN Stack Front To Back – Packt",
    "Python for Data Science & AI – IBM",
    "Security Analyst Fundamentals – IBM",
    "Foundations of Cybersecurity – Google",
    "Connect and Protect: Networks – Google",
    "Penetration Testing & Threat Hunting – IBM",
    "Play It Safe: Manage Security Risks – Google"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-gray-900/95 shadow-2xl backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center pointer-events-auto">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Rifa Fauziah
          </h1>
          <div className="hidden md:flex gap-10 text-lg font-medium">
            {["About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white pt-20 md:pt-24 lg:pt-28 pb-10">
        <div className="text-center px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-80 h-80 mx-auto mb-12 rounded-full overflow-hidden border-12 border-white/40 shadow-3xl"
          >
            <img
              src="/photo.jpg"
              alt="Rifa Fauziah"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/320/9333ea/ffffff?text=Rifa+F"; }}
            />
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">RIFA FAUZIAH</h1>
          <h2 className="text-4xl md:text-6xl font-light mb-8">Full-Stack • Cloud • Cybersecurity</h2>

          <p className="text-2xl mb-12 flex items-center justify-center gap-4">
            <span>Fresh Graduate • Universiti Sains Malaysia</span>
          </p>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#projects" className="group relative overflow-hidden bg-white text-purple-700 font-bold text-2xl px-14 py-7 rounded-2xl shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="mailto:rifafau1155@gmail.com" className="bg-transparent border-4 border-white text-white font-bold text-2xl px-14 py-7 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:border-pink-300 hover:scale-105 transition-all duration-300">
                Hire Me Now
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="https://drive.google.com/file/d/1bGpEgBF5Pe_hESbKqulKQddBzLO72fp0/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                 className="bg-white/20 backdrop-blur-xl border border-white/40 text-white px-10 py-5 rounded-full hover:bg-white/30 hover:border-white/60 hover:scale-105 transition-all font-medium">
                Resume (PDF)
              </a>
              <a href="https://drive.google.com/file/d/1etFdguUJg5aFxx6z8bdpgJ_4WoCGMt2m/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                 className="bg-white/20 backdrop-blur-xl border border-white/40 text-white px-10 py-5 rounded-full hover:bg-white/30 hover:border-white/60 hover:scale-105 transition-all font-medium">
                UI/UX Prototypes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-12">About Me</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            Computer Science graduate majoring in <strong className="text-purple-400">Computing Infrastructure</strong> with hands-on experience in mobile development, cloud platforms (AWS, GCP), IoT systems, and cybersecurity.<br /><br />
            Winner of <strong className="text-yellow-400">Best Final Year Project 2025</strong> for <strong>SmartPlugAI</strong> - AIoT energy management and prediction system using ML + full AWS stack.
          </p>
        </div>
      </section>

   {/* Skills – FINAL & PERFECT VERSION */}
<section id="skills" className="py-32 bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
      Technical Skills
    </h2>
    <div className="grid lg:grid-cols-3 gap-12">

      {/* Languages */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <Code2 size={36} className="text-purple-400" /> Languages
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Dart", "Python", "JavaScript", "TypeScript", 
            "Golang", "Java", "Swift", "C++", "PHP", "SQL",
            "HTML", "CSS"
          ].map(l => (
            <div key={l} className="bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-center font-medium shadow-md hover:shadow-xl hover:border-purple-500 transition-all">
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <Cpu size={36} className="text-pink-400" /> Frameworks & Libraries
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {["Flutter", "React.js", "Next.js", "Node.js"].map(f => (
            <div key={f} className="bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-center font-medium shadow-md hover:shadow-xl hover:border-pink-500 transition-all">
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Cloud, DevOps & Tools */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <Cloud size={36} className="text-purple-400" /> Cloud, DevOps & Tools
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            "AWS", "GCP", "Docker", 
            "Git & GitHub", "Postman", "Figma", 
            "Arduino", "Raspberry Pi"
          ].map(t => (
            <div key={t} className="bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-center font-medium shadow-md hover:shadow-xl hover:border-purple-500 transition-all">
              {t}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Projects */}
      <section id="projects" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-20">Selected Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -20 }} className={`bg-gray-800 rounded-3xl shadow-3xl overflow-hidden ${p.award ? "ring-8 ring-yellow-400" : ""}`}>
                {p.award && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white text-center py-4 font-bold text-xl flex items-center justify-center gap-3">
                    <Trophy size={32} /> BEST FINAL YEAR PROJECT 2025
                  </div>
                )}
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-3">{p.title}</h3>
                  <h4 className="text-purple-400 text-xl mb-4">{p.subtitle}</h4>
                  <p className="text-gray-400 mb-8">{p.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {p.tech.map(t => (
                      <span key={t} className="bg-purple-900/50 text-purple-300 px-5 py-2 rounded-full text-sm font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-32 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-bold mb-16 flex items-center gap-6"><Briefcase size={60} /> Experience</h2>
            <div className="space-y-10">
              <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-purple-400">Software Engineer Intern</h3>
                <p className="text-2xl font-semibold">Smartlab Sdn Bhd</p>
                <p className="text-gray-400">Mar 2024 – Aug 2024</p>
              </div>
              <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-purple-400">Web Pentesting Intern</h3>
                <p className="text-2xl font-semibold">Chaitanya Cyber Strix</p>
                <p className="text-gray-400">Sep 2023 – Dec 2023</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-6xl font-bold mb-16 flex items-center gap-6"><School size={60} /> Education</h2>
            <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold text-purple-400">B.Sc. Computer Science (Honours)</h3>
              <p className="text-2xl font-semibold">Universiti Sains Malaysia</p>
              <p className="text-gray-400">2021 – 2025</p>
              <p className="mt-4 text-green-400 font-bold text-xl">Best Final Year Project 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-16">Certifications</h2>
          <div className="relative">
            <button onClick={() => scrollCert("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 p-4 rounded-full shadow-2xl hover:scale-110 transition backdrop-blur">
              <ChevronLeft size={36} />
            </button>
            <button onClick={() => scrollCert("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 p-4 rounded-full shadow-2xl hover:scale-110 transition backdrop-blur">
              <ChevronRight size={36} />
            </button>
            <div id="cert-container" className="flex overflow-x-auto gap-8 scroll-smooth snap-x pb-8" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <style jsx>{`#cert-container::-webkit-scrollbar { display: none; }`}</style>
              {certifications.map((c, i) => (
                <div key={i} className="min-w-[340px] snap-center bg-gray-800 p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition-transform duration-300">
                  <Award size={60} className="text-yellow-500 mx-auto mb-4" />
                  <p className="font-semibold text-lg leading-tight">{c}</p>
                  <p className="text-sm text-gray-400 mt-2">2024–2025</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="text-center px-6">
          <h2 className="text-7xl font-black mb-12">Let's Build Together!</h2>
          <p className="text-3xl mb-16">Open to full-time roles • Available immediately</p>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
            <div className="flex flex-col items-center"><Mail size={60} className="mb-4" /><p className="text-2xl">rifafau1155@gmail.com</p></div>
            <div className="flex flex-col items-center"><Phone size={60} className="mb-4" /><p className="text-2xl">+62 813-1344-0451</p></div>
            <div className="flex flex-col items-center"><MapPin size={60} className="mb-4" /><p className="text-2xl">Bandung Barat, Indonesia</p></div>
          </div>
          <a href="https://linkedin.com/in/rifa-fauziah-1155f" target="_blank" rel="noopener noreferrer"
             className="bg-white text-purple-600 px-16 py-8 rounded-full text-3xl font-bold hover:scale-110 transition inline-flex items-center gap-6 shadow-3xl">
            <Linkedin size={48} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}