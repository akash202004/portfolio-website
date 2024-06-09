"use client";
import React from "react";
import Link from "next/link";
import "@/styles/project.css"
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
                        {/* <div className="dark-light">
                    <img src="./imgs/darkmode.png" alt="Dark-Light" width="50px" />
                </div> */}
                    </Link>
                    <nav>
                        <ul id="menu">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <a className="button contact-me" href="mailto:akashlaha48@gmail.com">Contact Me</a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div className="show-project">
                    <div className="projects">
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
                                <a href="#" className="white button-project right">View Project</a>
                                <a href="#" className="black button-project ">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-one">
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
                                <a href="https://netflix-fa6ae.web.app/" className="white button-project right">View Project</a>
                                <a href="https://github.com/akash202004/netflix-clone" className="black button-project ">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-two">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/dentist.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Project Title</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                    fermentum, purus nec ultrices dictum, dui sapien tincidunt
                                    libero, vel aliquam nunc nisl in nisi. Nam nec dolor nec
                                    ligula laoreet mollis. Donec fermentum, purus nec ultrices
                                    dictum, dui sapien tincidunt libero, vel aliquam nunc nisl in
                                    nisi. Nam nec dolor nec ligula laoreet mollis.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Sass</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="#" className="white button-project right">View Project</a>
                                <a href="#" className="black button-project ">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-three">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/dentist.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Project Title</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                    fermentum, purus nec ultrices dictum, dui sapien tincidunt
                                    libero, vel aliquam nunc nisl in nisi. Nam nec dolor nec
                                    ligula laoreet mollis. Donec fermentum, purus nec ultrices
                                    dictum, dui sapien tincidunt libero, vel aliquam nunc nisl in
                                    nisi. Nam nec dolor nec ligula laoreet mollis.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Sass</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="#" className="white button-project right">View Project</a>
                                <a href="#" className="black button-project ">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-four">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/dentist.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Project Title</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                    fermentum, purus nec ultrices dictum, dui sapien tincidunt
                                    libero, vel aliquam nunc nisl in nisi. Nam nec dolor nec
                                    ligula laoreet mollis. Donec fermentum, purus nec ultrices
                                    dictum, dui sapien tincidunt libero, vel aliquam nunc nisl in
                                    nisi. Nam nec dolor nec ligula laoreet mollis.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Sass</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="#" className="white button-project right">View Project</a>
                                <a href="#" className="black button-project ">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-five">
                        <div className="left-project">
                            <div>
                                <img src="./imgs/dentist.png" alt="IMG" width="100%" />
                            </div>
                        </div>
                        <div className="right-project">
                            <div className="project-title">
                                <h1>Project Title</h1>
                            </div>
                            <div className="project-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                    fermentum, purus nec ultrices dictum, dui sapien tincidunt
                                    libero, vel aliquam nunc nisl in nisi. Nam nec dolor nec
                                    ligula laoreet mollis. Donec fermentum, purus nec ultrices
                                    dictum, dui sapien tincidunt libero, vel aliquam nunc nisl in
                                    nisi. Nam nec dolor nec ligula laoreet mollis.
                                </p>
                            </div>
                            <div className="left-column-skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Sass</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="#" className="white button-project right">View Project</a>
                                <a href="#" className="black button-project ">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
