"use client"

import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"
import { useEffect, useState } from "react"
import TypewriterHeading from "@/components/TypewriterHeading"
import ProgrammerCard from "@/components/ProgrammerCard"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 50) // Change background after 50px scroll
    }

    window.addEventListener("scroll", handleScroll)

    // Trigger animations on load
    setTimeout(() => setIsVisible(true), 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Fixed Position with Dynamic Background */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200"
            : "bg-[#1a237e]/90 backdrop-blur-sm border-b border-blue-800/20"
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div
            className={`flex justify-start space-x-16 ml-8 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <button
              onClick={() => smoothScrollTo("hello")}
              className={`text-sm font-normal tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer ${
                isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
              }`}
            >
              HELLO
            </button>
            <button
              onClick={() => smoothScrollTo("about")}
              className={`text-sm font-normal tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer ${
                isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
              }`}
            >
              ABOUT ME
            </button>
            <button
              onClick={() => smoothScrollTo("contact")}
              className={`text-sm font-normal tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer ${
                isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
              }`}
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section - Adjust padding for fixed nav */}
      <header id="hello" className="bg-[#1a237e] text-white relative overflow-hidden min-h-[60vh] pt-20">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{
              top: "20%",
              left: "10%",
              animationDelay: "0s",
              animationDuration: "3s",
            }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-blue-300 rounded-full animate-pulse"
            style={{
              top: "60%",
              left: "80%",
              animationDelay: "1s",
              animationDuration: "4s",
            }}
          ></div>
          <div
            className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"
            style={{
              top: "40%",
              left: "20%",
              animationDelay: "2s",
              animationDuration: "2s",
            }}
          ></div>
        </div>

        {/* Hero Content - Remove old nav, keep only hero content */}
        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 ml-8 transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              <h1 className="text-6xl lg:text-7xl font-normall tracking-wide leading-tight hover:text-blue-100 transition-colors duration-500">
                Oun Markara
              </h1>
              <div className="text-base text-white leading-relaxed max-w-2xl space-y-1">
                {/* <p className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                  PhD Candidate at PKNU | Quantum Compiler | Qubit Plane Architecture |
                </p> */}
                <p className="animate-fade-in-up" style={{ animationDelay: "1s" }}>
                  Full-Stack Developer | Freelancer
                </p>
              </div>

              {/* Social Links */}
              <div
                className={`flex space-x-6 pt-6 transition-all duration-1000 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href="https://www.linkedin.com/in/ounmarkara/"
                  className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/ounmarkara"
                  className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* 3D Isometric Laptops Illustration with Animation */}
            <div
              className={`flex justify-center lg:justify-end relative transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div
                className="relative w-96 h-96"
                style={{
                  transform: `translateY(${scrollY * 0.1}px) rotateX(${scrollY * 0.02}deg)`,
                }}
              >
                {/* Stack of laptops in isometric view with hover animation */}
                {/* <ProgrammerCard/> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
     <section id="about" className="container mx-auto px-6 py-20">
  <div className="max-w-4xl ml-8">
    <TypewriterHeading
      text="About Me_"
      className="text-5xl font-normal text-gray-500 mb-12 hover:text-gray-700 transition-colors duration-500"
    />
    <div className="space-y-6 text-gray-600 leading-relaxed text-base">
      <p className="hover:text-gray-800 transition-colors duration-300 cursor-default">
        I'm a passionate full-stack developer focused on building efficient, scalable web applications using Spring Boot and Next.js. Recently, I developed a full-stack project with PostgreSQL, managing everything from API design to responsive UI.
      </p>
      <p className="hover:text-gray-800 transition-colors duration-300 cursor-default">
        My background includes academic and personal projects where I applied problem-solving, clean code practices, and responsive design. I value collaboration and continuous learning, always eager to explore new technologies and innovate.
      </p>
      
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl ml-8 py-8">
          <h2 className="text-sm font-bold text-gray-400 tracking-[0.2em] mb-16">PROJECTS</h2>
          <div>
            {/* Project 1 */}
            <div className="flex gap-8 group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 -ml-4">
              <div className="flex flex-col items-center pt-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-300"></div>
                <div className="w-px h-32 bg-gray-300 mt-4 group-hover:bg-blue-400 transition-colors duration-300"></div>
              </div>
              <div className="flex-1 pb-8">
                <Link href={"https://lumnov.kshrd.app/"}>  <h3 className="text-blue-600 font-normal text-base mb-3 tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                  kSHRD: LUMNOV - RENTAL COMMUNITY PLATFORM
                </h3></Link>
               
                <p className="text-sm text-gray-400 mb-4 tracking-wide">2025.04 - 2025.06</p>
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  LUMNOV makes it easy to find available rooms and houses, helping you start discovering your next home and connect with a community that feels like family.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex gap-8 group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 -ml-4">
              <div className="flex flex-col items-center pt-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-300"></div>
                <div className="w-px h-32 bg-gray-300 mt-4 group-hover:bg-blue-400 transition-colors duration-300"></div>
              </div>
              <div className="flex-1 pb-8">
                <Link href={"https://ezfound-cstad.vercel.app"}> <h3 className="text-blue-600 font-normal text-base mb-3 tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                  ISTAD:  EAZY FOUND - SERVICE LISTING WEBSITE
                </h3></Link>
               
                <p className="text-sm text-gray-400 mb-4 tracking-wide">2024.09 - 2024.10</p>
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  A modern platform designed to connect users with various local services efficiently.</p>             
                </div>
            </div>
          </div>
        </div>

         <div className="max-w-4xl ml-8">
          <h2 className="text-sm font-bold text-gray-400 tracking-[0.2em] mb-16">EDUCATION</h2>

          <div>
            {/* Project 1 */}
            <div className="flex gap-8 group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 -ml-4">
              <div className="flex flex-col items-center pt-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-300"></div>
                <div className="w-px h-32 bg-gray-300 mt-4 group-hover:bg-blue-400 transition-colors duration-300"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-blue-600 font-normal text-base mb-3 tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                  KOREA SOFTWARE HRD CENTER
                </h3>
                <p className="text-sm text-gray-400 mb-4 tracking-wide">2025.04 - 2025.06</p>
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  Certificate of Completion basic course </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex gap-8 group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 -ml-4">
              <div className="flex flex-col items-center pt-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-300"></div>
                <div className="w-px h-32 bg-gray-300 mt-4 group-hover:bg-blue-400 transition-colors duration-300"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-blue-600 font-normal text-base mb-3 tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                  INSTITUTE OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT -ISTAD
                </h3>
                <p className="text-sm text-gray-400 mb-4 tracking-wide">2024.08 - 2024.10</p>
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  Certificate of Completion Web Development course </p>
              </div>
            </div>

            <div className="flex gap-8 group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 -ml-4">
              <div className="flex flex-col items-center pt-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-300"></div>
                <div className="w-px h-32 bg-gray-300 mt-4 group-hover:bg-blue-400 transition-colors duration-300"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-blue-600 font-normal text-base mb-3 tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                  RUPP -ROYAL UNIVERSITY OF PHNOM PENH
                </h3>
                <p className="text-sm text-gray-400 mb-4 tracking-wide">2021 - 2024</p>
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  Bachelor Information Technology </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-[#1a237e] via-purple-600 to-pink-500 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl ml-8">
            <TypewriterHeading text="Get in touch_" className="text-5xl font-light mb-16 tracking-wide"></TypewriterHeading>

            <div className="space-y-8 text-lg">
              <div className="flex items-center space-x-4">
                <span className="font-medium tracking-wider">PHONE:</span>
                <span className="text-blue-100 hover:underline">(885) 76-286-5959</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="font-medium tracking-wider">FACEBOOK:</span>
                <Link href={"https://www.facebook.com/oun.markara.2025/"}>  <span className="text-blue-100 hover:underline">Oun Markara  </span></Link>
               
              </div>

              <div className="flex items-center space-x-4">
                <span className="font-medium tracking-wider">EMAIL:</span>
                <span className="text-blue-100 hover:underline">ounmarkaraprof@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#1a237e] via-purple-600 to-pink-500 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-70">
            © 2025 Oun Markara. NOT All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
