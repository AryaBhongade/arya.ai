import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Twitter, ExternalLink, Menu, X, Heart, Star } from "lucide-react";

const Squiggle = ({ color = "#e8845a", className = "" }: { color?: string; className?: string }) => (
  <svg width="120" height="16" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M2 8 C12 2, 22 14, 32 8 C42 2, 52 14, 62 8 C72 2, 82 14, 92 8 C102 2, 112 14, 118 8"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Star5 = ({ color = "#f9c74f", size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1 L12.5 7.5 L19.5 7.5 L14 12 L16 19 L10 15 L4 19 L6 12 L0.5 7.5 L7.5 7.5 Z" />
  </svg>
);

const projects = [
  {
    title: "Pixel Garden",
    desc: "A delightful app for tracking your houseplants, with watering reminders and growth logs.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#7dd4b0",
    emoji: "🌱",
  },
  {
    title: "Dreamboard",
    desc: "A mood board & vision board creator with drag-and-drop stickers and pastel palettes.",
    tags: ["TypeScript", "Canvas API"],
    color: "#c5b8f5",
    emoji: "✨",
  },
  {
    title: "Cozy Recipe Box",
    desc: "A personal recipe manager with cute card layouts and ingredient scaling.",
    tags: ["React", "Supabase", "Tailwind"],
    color: "#f4a4b8",
    emoji: "🍰",
  },
  {
    title: "Chirp Chat",
    desc: "A small-scale realtime messaging app with bird-themed stickers and emoji reactions.",
    tags: ["Socket.io", "Express", "React"],
    color: "#f9c74f",
    emoji: "🐦",
  },
  {
    title: "Mini Habit Tracker",
    desc: "Track tiny daily habits with streak stars and encouraging doodle mascots.",
    tags: ["React Native", "AsyncStorage"],
    color: "#e8845a",
    emoji: "⭐",
  },
  {
    title: "Stargazer",
    desc: "An interactive constellation viewer with hand-drawn star maps and lore cards.",
    tags: ["D3.js", "Three.js"],
    color: "#7dd4b0",
    emoji: "🌙",
  },
];

const skills = [
  { name: "React", color: "#c5b8f5" },
  { name: "TypeScript", color: "#7dd4b0" },
  { name: "Node.js", color: "#f9c74f" },
  { name: "Tailwind CSS", color: "#f4a4b8" },
  { name: "Figma", color: "#e8845a" },
  { name: "GraphQL", color: "#c5b8f5" },
  { name: "PostgreSQL", color: "#7dd4b0" },
  { name: "Next.js", color: "#f9c74f" },
  { name: "Three.js", color: "#f4a4b8" },
  { name: "Git", color: "#e8845a" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            style={{ fontFamily: "'Caveat', cursive", fontSize: "1.6rem", color: "var(--primary)", fontWeight: 700 }}
          >
            maya.dev ✏️
          </a>
          <ul className="hidden md:flex gap-8 items-center">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors hover:text-primary"
                  style={{ fontWeight: 600 }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
                style={{ fontWeight: 600 }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 opacity-40 rotate-12"><Star5 color="#f9c74f" size={32} /></div>
          <div className="absolute top-40 right-16 opacity-30 -rotate-6"><Star5 color="#c5b8f5" size={24} /></div>
          <div className="absolute bottom-32 left-20 opacity-30 rotate-45"><Star5 color="#7dd4b0" size={20} /></div>
          <div className="absolute bottom-24 right-24 opacity-30"><Star5 color="#f4a4b8" size={28} /></div>
          <svg className="absolute top-16 right-32 opacity-20" width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="36" stroke="#e8845a" strokeWidth="2.5" fill="none" strokeDasharray="6 4" />
          </svg>
          <svg className="absolute bottom-40 left-1/3 opacity-15" width="60" height="60" viewBox="0 0 60 60">
            <rect x="5" y="5" width="50" height="50" rx="10" stroke="#c5b8f5" strokeWidth="2.5" fill="none" strokeDasharray="5 3" />
          </svg>
          <svg className="absolute top-1/2 left-6 opacity-20" width="40" height="80" viewBox="0 0 40 80">
            <path d="M20 5 C30 20, 10 40, 20 55 C30 70, 10 80, 20 75" stroke="#7dd4b0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          <svg className="absolute top-1/3 right-10 opacity-15" width="50" height="50" viewBox="0 0 50 50">
            <path d="M10 25 Q25 5 40 25 Q25 45 10 25 Z" stroke="#f4a4b8" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl relative z-10"
        >
          {/* Avatar */}
          <div className="relative inline-block mb-8">
            <div
              className="w-32 h-32 rounded-full mx-auto overflow-hidden"
              style={{ border: "3px dashed var(--primary)", padding: "4px", background: "var(--card)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1573850038488-ad1a0a86e853?w=200&h=200&fit=crop&auto=format"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-yellow-300 rounded-full w-8 h-8 flex items-center justify-center text-lg border-2 border-white shadow">
              ✨
            </div>
          </div>

          <div className="mb-4 flex items-center justify-center gap-3">
            <Squiggle color="#e8845a" />
            <span style={{ color: "var(--primary)", fontFamily: "'Caveat', cursive", fontSize: "1.1rem", fontWeight: 600 }}>
              hello, i'm
            </span>
            <Squiggle color="#e8845a" />
          </div>

          <h1
            style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--foreground)" }}
            className="mb-5"
          >
            Maya Chen
          </h1>

          <p
            style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}
            className="mb-10 max-w-lg mx-auto"
          >
            a full-stack developer who loves crafting{" "}
            <span style={{ color: "var(--primary)", fontWeight: 700 }}>cute & functional</span>{" "}
            digital experiences 🎀
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-2xl text-white"
              style={{
                background: "var(--primary)",
                fontFamily: "'Caveat', cursive",
                fontSize: "1.2rem",
                fontWeight: 700,
                boxShadow: "4px 4px 0 #2d2417",
                display: "inline-block",
              }}
            >
              See my work ✨
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-2xl"
              style={{
                background: "var(--card)",
                border: "2.5px dashed var(--border)",
                fontFamily: "'Caveat', cursive",
                fontSize: "1.2rem",
                fontWeight: 700,
                boxShadow: "4px 4px 0 var(--border)",
                display: "inline-block",
              }}
            >
              Say hi! 👋
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll bounce */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ color: "var(--muted-foreground)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5 L12 19 M6 13 L12 19 L18 13" />
          </svg>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&h=420&fit=crop&auto=format"
                alt="cozy desk workspace"
                className="w-full h-72 object-cover rounded-2xl relative z-10"
                style={{ border: "3px solid var(--border)" }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl"
                style={{ background: "var(--secondary)", border: "2.5px dashed var(--border)", zIndex: 0 }}
              />
              <div
                className="absolute -top-3 -left-3 bg-yellow-200 rounded-xl px-3 py-1 z-20"
                style={{ fontFamily: "'Caveat', cursive", fontSize: "1rem", fontWeight: 700, border: "2px solid #d4b896", transform: "rotate(-4deg)" }}
              >
                that's me! ☕
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{ fontFamily: "'Caveat', cursive", fontSize: "3rem", fontWeight: 700, color: "var(--foreground)" }}
              className="mb-2"
            >
              about me
            </h2>
            <Squiggle color="#7dd4b0" className="mb-6" />
            <p style={{ lineHeight: 1.8, color: "var(--muted-foreground)", marginBottom: "1rem" }}>
              Hi there! I'm a full-stack developer based in San Francisco with 4+ years of experience
              building web apps that are both beautiful and functional. I believe great software should
              feel like a warm hug 🤗
            </p>
            <p style={{ lineHeight: 1.8, color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
              When I'm not coding, you'll find me sketching UI ideas in my bullet journal, tending to
              my plant collection, or baking way too many cookies.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Open to work ✨", "Remote-friendly 🌍", "Available Q3 2026 📅"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{
                    background: "var(--background)",
                    border: "2px dashed var(--primary)",
                    color: "var(--primary)",
                    fontWeight: 700,
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com" },
                { icon: <Twitter size={20} />, href: "https://twitter.com" },
                { icon: <Mail size={20} />, href: "mailto:maya@example.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  className="p-3 rounded-xl"
                  style={{ background: "var(--muted)", border: "2px solid var(--border)" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "'Caveat', cursive", fontSize: "3rem", fontWeight: 700 }}
              className="mb-2"
            >
              my projects 🛠️
            </h2>
            <Squiggle color="#c5b8f5" className="mx-auto" />
            <p className="mt-4" style={{ color: "var(--muted-foreground)" }}>
              things i've built with love (and too much coffee)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ rotate: i % 2 === 0 ? -1.5 : 1.5, scale: 1.02 }}
                className="relative p-6 rounded-2xl"
                style={{
                  background: "var(--card)",
                  border: "2.5px dashed var(--border)",
                  boxShadow: hoveredProject === i ? `5px 5px 0 ${project.color}` : "4px 4px 0 var(--border)",
                  transition: "box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <div
                  className="text-3xl mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: project.color + "33" }}
                >
                  {project.emoji}
                </div>
                <h3
                  style={{ fontFamily: "'Caveat', cursive", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.5rem" }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-lg text-xs"
                      style={{ background: project.color + "33", color: "var(--foreground)", fontWeight: 700 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm hover:gap-2 transition-all"
                  style={{ color: "var(--primary)", fontWeight: 700 }}
                >
                  View project <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: "'Caveat', cursive", fontSize: "3rem", fontWeight: 700 }}
            className="mb-2"
          >
            skills & tools 🎨
          </h2>
          <Squiggle color="#f4a4b8" className="mx-auto mb-10" />

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? -3 : 3 }}
                className="px-5 py-3 rounded-2xl"
                style={{
                  background: skill.color + "33",
                  border: `2.5px solid ${skill.color}`,
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  cursor: "default",
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>

          {/* Fun stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4+", label: "years coding", emoji: "💻" },
              { value: "30+", label: "projects shipped", emoji: "🚀" },
              { value: "∞", label: "cups of tea", emoji: "🍵" },
              { value: "100%", label: "commit to cute", emoji: "🎀" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{ background: "var(--background)", border: "2.5px dashed var(--border)" }}
              >
                <div className="text-3xl mb-1">{stat.emoji}</div>
                <div
                  style={{ fontFamily: "'Caveat', cursive", fontSize: "2.2rem", fontWeight: 700, color: "var(--primary)" }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", fontWeight: 600 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            style={{ fontFamily: "'Caveat', cursive", fontSize: "3rem", fontWeight: 700 }}
            className="mb-2"
          >
            let's chat! 💌
          </h2>
          <Squiggle color="#e8845a" className="mx-auto mb-4" />
          <p className="mb-10" style={{ color: "var(--muted-foreground)" }}>
            Have a project in mind, or just want to say hi? My inbox is always open ✨
          </p>

          <form onSubmit={handleSubmit} className="text-left space-y-5">
            {[
              { key: "name", label: "your name 🌸", type: "text", placeholder: "e.g. Jamie" },
              { key: "email", label: "email address 📧", type: "email", placeholder: "you@example.com" },
            ].map((field) => (
              <div key={field.key}>
                <label
                  style={{ display: "block", fontFamily: "'Caveat', cursive", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem" }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl outline-none"
                  style={{
                    background: "var(--card)",
                    border: "2.5px solid var(--border)",
                    fontFamily: "'Nunito', sans-serif",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            ))}

            <div>
              <label
                style={{ display: "block", fontFamily: "'Caveat', cursive", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem" }}
              >
                your message ✍️
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, or just say hello!"
                className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                style={{
                  background: "var(--card)",
                  border: "2.5px solid var(--border)",
                  fontFamily: "'Nunito', sans-serif",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-4 rounded-2xl"
                style={{
                  background: "#7dd4b033",
                  border: "2.5px dashed #7dd4b0",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                }}
              >
                yay, message sent! 🎉 I'll get back to you soon~
              </motion.div>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, rotate: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-2xl text-white"
                style={{
                  background: "var(--primary)",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  boxShadow: "4px 4px 0 #2d2417",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                send it! 🚀
              </motion.button>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center border-t border-border"
        style={{ color: "var(--muted-foreground)", fontSize: "0.9rem" }}
      >
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: "1.1rem", fontWeight: 600 }}>
          made with{" "}
          <Heart size={14} className="inline" style={{ color: "#f4a4b8", fill: "#f4a4b8", verticalAlign: "middle" }} />{" "}
          by maya chen · 2026
        </p>
        <p className="mt-1 text-sm">
          <Star size={12} className="inline" style={{ verticalAlign: "middle", marginRight: "4px" }} />
          built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
