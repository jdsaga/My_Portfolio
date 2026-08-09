import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiDeviantart, SiArtstation, SiInstagram, SiTiktok, SiItchdotio } from "react-icons/si";
import BubblesBackground from "./components/BubbleBackground.jsx";
import profilePic from "./assets/jdd.png";
import Works from "./components/Works.jsx";
import TypingText from "./components/TypingText.jsx";
import emailjs from "@emailjs/browser";
import { MdChevronRight } from "react-icons/md";

const socials = [
  { name: "GitHub", url: "https://github.com/your-username", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username", icon: <FaLinkedin /> },
  { name: "DeviantArt", url: "https://www.deviantart.com/your-username", icon: <SiDeviantart /> },
  { name: "ArtStation", url: "https://www.artstation.com/your-username", icon: <SiArtstation /> },
  { name: "Instagram", url: "https://www.instagram.com/your-username", icon: <SiInstagram /> },
  { name: "TikTok", url: "https://www.tiktok.com/@your-username", icon: <SiTiktok /> },
];

const skillCategories = [
  {
    name: "Front End",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Graphics & Design",
    skills: ["Krita", "Figma", "Aseprite", "Canvas", "UI/UX Design", "Icon Design", "Illustration", "Pixel Art", "Blender"],
  },
  {
    name: "Game Development",
    skills: ["Godot", "Unity", "2D Platformer", "Top-Down", "Game Design", "Level Degin", "Character Design", "3D Game Design", "Unreal Engine"],
  },
  {
    name: "AI Tools",
    skills: ["ChatGPT", "Claude", "Deepseek", "NoteGPT", "Gemini"],
  },
  {
    name: "Database",
    skills: ["MySQL", "MongoDB"],
  }

];

const contactRows = [ 
  { name: "GitHub", value: "https://github.com/jdsaga", href: "https://github.com/jdsaga", icon: <FaGithub /> },
  { name: "LinkedIn", value: "https://www.linkedin.com/in/john-dale-sagayno-b0571936b/", href: "https://www.linkedin.com/in/john-dale-sagayno-b0571936b/", icon: <FaLinkedin /> },
  { name: "DeviantArt", value: "https://www.deviantart.com/jeideru", href: "https://www.deviantart.com/jeideru", icon: <SiDeviantart /> },
  { name: "ArtStation", value: "https://www.artstation.com/jeideru", href: "https://www.artstation.com/jeideru", icon: <SiArtstation /> },
  { name: "Instagram", value: "https://www.instagram.com/jeideru_art/", href: "https://www.instagram.com/jeideru_art/", icon: <SiInstagram /> },
  { name: "TikTok", value: "https://www.tiktok.com/@jeideru_arts", href: "https://www.tiktok.com/@jeideru_arts", icon: <SiTiktok /> },
];

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
const [isVisible, setIsVisible] = useState(false); // controls DOM presence

useEffect(() => {
  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;
    const rect = contactSection.getBoundingClientRect();
    setShowBackToTop(rect.top <= window.innerHeight * 0.5);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  if (showBackToTop) {
    setIsVisible(true); // mount immediately, fade in plays
  } else if (isVisible) {
    const timeout = setTimeout(() => setIsVisible(false), 300); // wait for fade-out (300ms = animation duration)
    return () => clearTimeout(timeout);
  }
}, [showBackToTop]);

// 👇 ADD THIS
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  // ---- Contact form state ----
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_4siau6d",
        "template_eu7zrzg",
        formData,
        "i5JYwRd9azLMAx-WX"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="app">
      <BubblesBackground />
      <section id="home" className="intro">
        <div className="intro-text">
        <p className="intro-first_line">HELLO, I'M</p>
        <h1 className="user-name">John Dale V. Sagayno</h1>
        <p className="intro-role">
          I am into{" "}
          <TypingText
            words={["Front-End Development", "Game Development", "Digital Art"]}
            speed={60}
            deleteSpeed={35}
            pause={1200}
          />
        </p>
        {/* <p className="intro-description">
          I build clean, responsive websites and web apps.
          Passionate about crafting simple, functional user experiences.
        </p> */}

        <div className="intro-buttons">
          <a href="/Sagayno_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
          </a>
          <a href="#aboutme" className="btn btn-secondary">About Me</a>
        </div>
      </div>

        <div className="intro-image">
          <img src={profilePic} alt="John Dale V. Sagayno" />
        </div>
      </section>

      <section id="aboutme" className="about-me">
        <h2 className="section-title"><span>About Me</span></h2>
        <div className="about-me-content">
          <div className="about-me-image">
            <img src={profilePic} alt="About me" />
          </div>
          <p className="about-me-text">
            I'm John Dale V. Sagayno, a fresh graduate of Cavite State University – Silang Campus, 
            i'm pursuing my passion for creating clean, functional front-end 
            and game experiences. I specialize in front-end development and game development, where I enjoy 
            transforming ideas into interactive, user-friendly interfaces and engaging gameplay using tools 
            like React, JavaScript, and various game engines. Outside of coding, I'm also a digital artist, 
            working on illustrations and pixel art in my spare time. This combination of technical ability 
            and creative expression influences how I approach every project, balancing both functionality 
            and visual polish. I'm looking forward to starting my professional career and bringing this blend 
            of logic and creativity into real-world development work.
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title"><span>Skills</span></h2>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="skill-category">
              <h3 className="skill-category-title">{cat.name}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Works />

      <section id="contact" className="contact">
        <h2 className="section-title"><span>Contact Me</span></h2>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-image">
              <img src={profilePic} alt="John Dale V. Sagayno" />
            </div>
            <h3 className="contact-card-name">John Dale V. Sagayno</h3>
            <p className="contact-card-role">Front-End - Game Dev - Digital Artist</p>
            <p className="contact-card-bio">
             I am currently open to new job opportunities and collaborations. I look forward to connecting with you
            </p>
            <div className="contact-plain-info">
  <p><strong>Email:</strong> johndalesagayno2003@gmail.com</p>
  <p><strong>Phone:</strong> +63 975 228 1847</p>
</div>

            <div className="contact-info-list">
              {contactRows
                .filter((row) => row.name !== "Email" && row.name !== "Phone")
                .map((row) => (
                  <a
                    key={row.name}
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row"
                  >
                    <span className="contact-row-icon">{row.icon}</span>
                    <span className="contact-row-text">
                      <span className="contact-row-label">{row.name}</span>
                      <span className="contact-row-value">{row.value}</span>
                    </span>
                    <span className="contact-row-arrow"><MdChevronRight /></span>
                  </a>
                ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="form-status success">Message sent!</p>}
            {status === "error" && <p className="form-status error">Something went wrong. Try again.</p>}
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} John Dale Sagayno. All rights reserved.</p>
      </footer>

      {isVisible && (
        <button
          className={`back-to-top ${showBackToTop ? "fade-in" : "fade-out"}`}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;