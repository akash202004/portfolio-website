"use client"
import { useDarkMode } from "@/context/Darkmode";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkmode, darkModeButton } = useDarkMode();

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className={darkmode ? 'darkMode' : ""}>
        <header>
          <a href="#" className="logo-holder">
            <div className="logo">A</div>
            <div className="logo-text">Portfolio Website</div>
            <div className="dark-light" onClick={darkModeButton}>
              <img src="./imgs/darkmode.png" alt="Dark-Light" width="50px" />
            </div>
          </a>
          <nav>
            <ul id="menu" className={menuOpen ? 'active' : ''}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <Link href="/project">Projects</Link>
              </li>
              <li>
                <a className="button contact-me" href="mailto:akashlaha48@gmail.com">Contact Me</a>
              </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
              <img src="./imgs/menu.png" alt="" width={30} height={30} />
            </a>
          </nav>
        </header>

        <main>
          <section className="hero container">
            <div className="hero-blue">
              <div>
                <h1><small>Hi I'm</small>
                  Akash Laha
                </h1>
                <p>Full stack software developer with expertise in front-end and back-end development, experience in
                  leading cross-functional teams.</p>
                  <div className="call-to-action">
  <a href="./Akash_Laha_FullStackDeveloper.pdf" className="button white" target="_blank" rel="noopener noreferrer">
    View Resume
  </a>
  <a href="mailto:akashlaha48@gmail.com" className="button black">
    Contact Me
  </a>
</div>
                <div className="social-links">
                  <a href="https://github.com/akash202004">
                    <img src="./imgs/github.png" alt="GitHub" width="50" />
                  </a>
                  <a href="https://www.linkedin.com/in/akash-laha-799427244/">
                    <img src="./imgs/linkedin.png" alt="LinkedIn" width="55" />
                  </a>
                  <a href="https://twitter.com/Akash_202004">
                    <img src="./imgs/twitter.png" alt="Twitter" width="40" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-yellow">
              <img src="./imgs/hero-banner.png" alt="Akash Laha" width="100%" height="108%" />
            </div>
          </section>

          <section className="logos container">
            <div className="marquee">
              <div className="track">
                <img src="./imgs/azure.png" alt="Azure" width="128" />
                <img src="./imgs/c.png" alt="C" width="128" />
                <img src="./imgs/java.png" alt="Java" width="128" />
                <img src="./imgs/html.png" alt="Html" width="128" />
                <img src="./imgs/css.png" alt="Css" width="128" />
                <img src="./imgs/javascript.png" alt="Javascript" width="128" />
                <img src="./imgs/tailwind.png" alt="Tailwind" width="128" />
                <img src="./imgs/sass.png" alt="Sass" width="128" />
                <img src="./imgs/nextjs.png" alt="nextjs" width="128" />
                <img src="./imgs/mongodb.png" alt="Mongodb" width="128" />
                <img src="./imgs/node.png" alt="NodeJs" width="128" />
                <img src="./imgs/vscode.png" alt="Vscode" width="128" />
                <img src="./imgs/firebase.png" alt="Firebase" width="128" />
                <img src="./imgs/appwrite.png" alt="Appwrite" width="128" />
                <img src="./imgs/c.png" alt="C" width="128" />
                <img src="./imgs/azure.png" alt="Azure" width="128" />
                <img src="./imgs/java.png" alt="Java" width="128" />
                <img src="./imgs/html.png" alt="Html" width="128" />
                <img src="./imgs/css.png" alt="Css" width="128" />
                <img src="./imgs/javascript.png" alt="Javascript" width="128" />
                <img src="./imgs/tailwind.png" alt="Tailwind" width="128" />
                <img src="./imgs/sass.png" alt="Sass" width="128" />
                <img src="./imgs/nextjs.png" alt="nextjs" width="128" />
                <img src="./imgs/mongodb.png" alt="Mongodb" width="128" />
                <img src="./imgs/node.png" alt="NodeJs" width="128" />
                <img src="./imgs/vscode.png" alt="Vscode" width="128" />
                <img src="./imgs/firebase.png" alt="Firebase" width="128" />
                <img src="./imgs/appwrite.png" alt="Appwrite" width="128" />
              </div>
            </div>
          </section>

          {/* <section className="masterpiece container">
            <div className="masterpiece-grid">
              <a href="#" className="masterpiece-item">
                <img src="./imgs/arrow.jpg" alt="" width="80%" />
              </a>
              <a href="#" className="masterpiece-item">
                2
              </a>
              <a href="#" className="masterpiece-item">
                <img src="./imgs/luffy.jpg" alt="" width="100%" />
              </a>
              <a href="#" className="masterpiece-item">
                <img src="https://i.pinimg.com/564x/19/0f/53/190f5342e26919fc6f32a2bbe10738a4.jpg" alt="" width="100%" />
              </a>
              <a href="#" className="masterpiece-item">
                <img src="https://i.pinimg.com/564x/35/10/5f/35105f8d99da79c944915fa0dd6c57c7.jpg" alt="" width="100%" />
              </a>
              <a href="#" className="masterpiece-item">
                6
              </a>
            </div>
          </section> */}

          <section id="skills" className={`skills container ${darkmode ? 'lightMode' : ''}`}>
            <h2>
              <small>About Me</small>
              Skills
            </h2>
            <div className="holder-blue">
              <div className="left-column">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML + CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>

                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Prisma</li>
                </ul>

                <h3>Databases</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Firebase</li>
                </ul>

                <h3>DevOps & Tools</h3>
                <ul>
                  <li>VS Code</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
              </div>

              <div className="right-column">
                <h3>A Bit About Me...</h3>

                <p>👋 Hey there! I'm Akash Laha, a passionate Full Stack Developer currently pursuing my Bachelor's in 💻 Computer Science and Engineering. Over the past years, I have developed a strong foundation in Data Structures and Algorithms with Java and expanded my skills into building scalable and efficient web applications using the MERN stack and modern technologies like Next.js and TypeScript.</p>

                <p>My interests go beyond traditional development — I'm deeply fascinated by emerging technologies like 🌐 Web3 and 🤖 AI. I've actively explored these domains, contributing to open-source projects, participating in hackathons, and building real-world applications like AI Content Catalyst and Edu-Empower.</p>

                <p>Throughout my journey, I've embraced challenges through hackathons, collaborative projects, and leadership roles, constantly sharpening my technical and problem-solving skills. 🚀 I believe in continuous learning, innovation, and building solutions that create real-world impact. Let's connect and shape the future of technology together! 🛠️🌟</p>
              </div>
            </div>
          </section>

          <section className="work-experience container">
            <h2>
              <small>Recent</small>
              work Experience
            </h2>
            <div className="jobs">
              {/* <article>
                <figure>
                  <div>
                    <img src="./imgs/workplace-1.jpg" alt="Work" width="100%" />
                    <figcaption>Workplace - 1</figcaption>
                  </div>
                </figure>
                <h3>Work - 1</h3>
                <div>2000 - 2020</div>
                <p>This is a example</p>
              </article> */}
              <article>
                <figure>
                  <div>
                    <img src="./imgs/SIM-FLUENCE.png" alt="Simfluence Project" width="100%" />
                    <figcaption>Simfluence - AI Social Media Simulator</figcaption>
                  </div>
                </figure>
                <h3>Sim-Fluence (Group Project)</h3>
                <div>2024 - 2025</div>
                <p>
                  Sim-Fluence simulates social media engagement using AI, helping creators test and optimize posts before publishing. Delivered 10,000+ custom content pieces, built 35+ flexible templates, and boosted user engagement by 40%.
                </p>
              </article>

              <article>
                <figure>
                  <div>
                    <img src="./imgs/edu-empower.png" alt="Edu-Empower Project" width="100%" />
                    <figcaption>Edu-Empower - Crowdfunding Platform</figcaption>
                  </div>
                </figure>
                <h3>Edu-Empower (Group Project)</h3>
                <div>2024 - 2025</div>
                <p>
                  Led a team to build a scalable crowdfunding and scholarship platform, reducing dropout rates by 25% among underprivileged students. Developed a donor-matching system that saved 20+ weekly hours and an AI-driven ranking model to streamline user evaluation by 50%.
                </p>
              </article>

            </div>
          </section>

          <section id="projects" className="bento container">
            <h2>
              <small>
                Previous
              </small>
              Completed Projects
            </h2>
            <div className="bento-grid">
              <a href="https://tomato-website.vercel.app/" className="bento-item">
                <img src="./imgs/tomato.png" alt="Work" width="100%" />
              </a>
              <a href="https://experiencing-nextjs-aceternity-ui.vercel.app/" className="bento-item">
                <img src="./imgs/acertune.png" alt="Work" width="100%" />
              </a>
              <a href="https://akash202004.github.io/squarespace-landing-page/" className="bento-item">
                <img src="./imgs/landingpage.png" alt="Work" width="100%" />
              </a>
              <a href="https://akash202004.github.io/dinex-dental-website/" className="bento-item">
                <img src="./imgs/dentist.png" alt="Work" width="100%" />
              </a>
              <a href="https://akash202004.github.io/jawa-website/" className="bento-item">
                <img src="./imgs/jawa.png" alt="Work" width="100%" />
              </a>
              <a href="https://content-catalyst.vercel.app/" className="bento-item">
                <img src="./imgs/aicontent.png" alt="Work" width="100%" />
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div>
            <a href="mailto:akashlaha48@gmail.com">
              <img src="https://w7.pngwing.com/pngs/4/365/png-transparent-computer-icons-email-email-miscellaneous-trademark-logo-thumbnail.png" alt="Email" width="48" />
            </a>
            <a href="https://github.com/akash202004">
              <img src="./imgs/github.png" alt="GitHub" width="48" />
            </a>
            <a href="https://www.linkedin.com/in/akash-laha-799427244/">
              <img src="https://w7.pngwing.com/pngs/1002/775/png-transparent-in-logo-linkedin-facebook-social-media-font-awesome-icon-linkedin-blue-text-trademark-thumbnail.png" alt="LinkedIn" width="48" />
            </a>
            <a href="https://twitter.com/Akash_202004">
              <img src="./imgs/twitter.png" alt="Twitter" width="40" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );

}
