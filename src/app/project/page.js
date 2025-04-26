"use client";
import React from "react";
import Link from "next/link";
import "@/styles/project.css";
import { useDarkMode } from "@/context/Darkmode";

export default function Project() {
    const { darkmode } = useDarkMode();

    return (
        <>
            <div className={darkmode ? 'darkMode' : ""}>
                <header>
                    <Link href="/" className="logo-holder">
                        <div className="logo">A</div>
                        <div className="logo-text">Portfolio Website</div>
                    </Link>
                    <nav>
                        <ul id="menu">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <a
                                    className="button contact-me"
                                    href="mailto:akashlaha48@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div className="show-project">
                    <div className="projects-four">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/SIM-FLUENCE.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Sim-Fluence</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Sim-Fluence simulates social media engagement using AI, helping creators test and optimize posts before publishing.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>Next.js</li>
                                    <li>Prisma</li>
                                    <li>Postgres</li>
                                    <li>Razorpay</li>
                                    <li>Python</li>
                                    <li>Langchain</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href=""
                                    className="white button-project right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Currently Working
                                </a>
                                <a
                                    href="https://github.com/akash202004/Sim-Fluence"
                                    className="black button-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="projects-three">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/edu-empower.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Edu-Empower</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Edu-Empower is an AI-driven crowdfunding and scholarship platform providing financial aid, donor matching, and mentorship.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>React.js</li>
                                    <li>Typescript</li>
                                    <li>Prisma</li>
                                    <li>Postgres</li>
                                    <li>Razorpay</li>
                                    <li>Clerk</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://youtu.be/aKPHFOpIa9Y"
                                    className="white button-project right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <a
                                    href="https://github.com/akash202004/Edu-Empower"
                                    className="black button-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="projects-four">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/aicontent.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>AI Content Catalyst</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Built AI Content Catalyst, an AI content generator using Next.js and TypeScript, powered by the Gemini API for blog titles, Instagram hashtags, and more. Integrated Clerk for authentication, Stripe for payments, and Neon Postgres for data management. Enhanced user experience with content history tracking and a seamless billing system.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>Next.js</li>
                                    <li>Typescript</li>
                                    <li>Drizzle ORM</li>
                                    <li>Postgres</li>
                                    <li>Stripe</li>
                                    <li>Clerk</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://content-catalyst.vercel.app/"
                                    className="white button-project right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <a
                                    href="https://github.com/akash202004/ai_content_catalyst"
                                    className="black button-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="projects-three">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/tomato.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Tomato Website</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Welcome to Tomato, your go-to food ordering website built with the MERN stack! We offer seamless Stripe integration for secure payments. As an admin, you can easily add new dishes and track orders in real-time. Enjoy delicious meals with just a few clicks!
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>JavaScript</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                    <li>Stripe</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://tomato-website.vercel.app/"
                                    className="white button-project right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <a
                                    href="https://github.com/akash202004/tomato-website-frontend"
                                    className="black button-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="projects-four">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/netflix.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Netflix-Clone</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    This Netflix clone is a modern web application designed to replicate the core functionalities of Netflix, built using React for the frontend, styled with Tailwind CSS, and powered by Firebase for backend services. It integrates the IMDb API to fetch and display detailed movie and TV show information.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Firebase</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://netflix-fa6ae.web.app/"
                                    className="white button-project right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <a
                                    href="https://github.com/akash202004/netflix-clone"
                                    className="black button-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="projects-three">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/fitnessfreak.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Fitness Freak</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Developed a comprehensive fitness website using React and the ExerciseDB API, providing users with a vast database of exercises. Integrated a BMI calculator to help users track their fitness progress and make informed decisions about their health routines.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Tailwind CSS</li>
                                    <li>Exercise DB Api</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://fitness-freak-pi.vercel.app/"
                                    className="white button-project right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <a
                                    href="https://github.com/akash202004/fitness-freak"
                                    className="black button-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="projects-four">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/acertune.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Acer - Tunes</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Developed a visually captivating music app using Acernity UI and TypeScript, focusing on a sleek and intuitive user interface. Ensured a seamless experience for music enthusiasts with modern design elements and interactive features.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Typescript</li>
                                    <li>Next.js</li>
                                    <li>Acernity UI</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://experiencing-nextjs-aceternity-ui.vercel.app/"
                                    className="white button-project right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <a
                                    href="https://github.com/akash202004/experiencing-nextjs-aceternity-ui"
                                    className="black button-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="projects-three">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/jawa.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Jawa Website</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Created a dynamic and responsive website using HTML, CSS, JavaScript, and Tailwind CSS. Implemented modern design principles and interactive features to enhance user engagement and experience. Tailwind CSS was used for efficient and scalable styling, ensuring a consistent look across all devices.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Responsive</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://akash202004.github.io/jawa-website/"
                                    className="white button-project right"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <a
                                    href="https://github.com/akash202004/jawa-website"
                                    className="black button-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
