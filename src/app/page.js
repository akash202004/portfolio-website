"use client"
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">A</div>
          <div className="logo-text">Portfolio Website</div>
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
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a className="button" href="mailto:akashlaha48@gmail.com">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
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
                <a href="#" className="button white">View Resume</a>
                <a href="mailto:akashlaha48@gmail.com" className="button black">Contact Me</a>
              </div>
              <div className="social-links">
                <a href="https://github.com/akash202004">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/akash-laha-799427244/">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
                <a href="https://twitter.com/Akash_202004">
                  <img src="./imgs/twitter.png" alt="Twitter" width="48" />
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

        <section className="masterpiece container">
          <div className="left-masterpiece">
            <div></div>
            <div></div>
          </div>
          <div className="right-masterpiece"></div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Front-End</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Sass</li>
                <li>GitHub</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Appwrite</li>
                <li>FireBase</li>
              </ul>
              <h3>Area of Interest</h3>
              <ul>
                <li>Web3</li>
                <li>AI</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, architecto. Neque incidunt porro ex
                fuga fugit? Dolor, cupiditate! Doloribus eligendi fuga facilis aliquam architecto harum minus
                cum repudiandae provident unde?' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illo explicabo eos nobis sunt sequi, deserunt recusandae, eum perferendis eligendi voluptatibus quam! Omnis blanditiis facilis cumque et sit magni consequuntur, doloribus vel, quas distinctio harum? Voluptas illum vel, deleniti repellat ullam culpa. Quisquam, enim?</p>
              <div className="inside-holder-blue">
                <div className="left-inside"></div>
                <div className="right-inside"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/workplace-1.jpg" alt="Work" width="100%" />
                  <figcaption>Workplace - 1</figcaption>
                </div>
              </figure>
              <h3>Work - 1</h3>
              <div>2000 - 2020</div>
              <p>This is a example</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/workplace-1.jpg" alt="Work" width="100%" />
                  <figcaption>Workplace - 1</figcaption>
                </div>
              </figure>
              <h3>Work - 1</h3>
              <div>2000 - 2020</div>
              <p>This is a example</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/workplace-1.jpg" alt="Work" width="100%" />
                  <figcaption>Workplace - 1</figcaption>
                </div>
              </figure>
              <h3>Work - 1</h3>
              <div>2000 - 2020</div>
              <p>This is a example</p>
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
            <a href="#" className="bento-item">
              <img src="./imgs/workplace-1.jpg" alt="Work" width="100%" />
            </a>
            <a href="#" className="bento-item">
              2
            </a>
            <a href="#" className="bento-item">
              3
            </a>
            <a href="#" className="bento-item">
              4
            </a>
            <a href="#" className="bento-item">
              5
            </a>
            <a href="#" className="bento-item">
              6
            </a>
          </div>
        </section>

        <section className="chatbot container">
          <h2>
            <small>Talk to me</small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my
                CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what
                I've done.</p>
              <p>You can also download my resume here if you want to take a look at it. I'm currently looking for
                new opportunities so if you have a project you think I'd be a good fit for, please get in touch!
              </p>
              <a href="#" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  <li>
                    <span className="avatar bot">AI</span>
                    <div className="message">
                      Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How
                      can I help?
                    </div>
                  </li>
                  <li>
                    <span className="avatar user">User</span>
                    <div className="message">
                      I have a question to ask you about this resume
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-message">
                <input type="text" placeholder="Hey Akash, what skills are you best at?" />
                <button className="button black">Send</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
