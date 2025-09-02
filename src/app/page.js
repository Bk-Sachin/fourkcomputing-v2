'use client';

import Link from "next/link";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollAnimator from "@/components/ScrollAnimator";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import { SERVICES, PROJECTS, TESTIMONIALS } from '@/constants';

const HomePage = () => {
  return (
    <>
      {/* SEO Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "FourkComputing - Leading Software Development Agency",
            "description": "Transform your business with cutting-edge software solutions. Expert web development, mobile apps, AI integration, and digital transformation services.",
            "url": "https://fourkcomputing.com",
            "mainEntity": {
              "@type": "Organization",
              "name": "FourkComputing",
              "description": "Premier software development agency specializing in web applications, mobile apps, AI solutions, and digital transformation.",
              "url": "https://fourkcomputing.com",
              "logo": "https://fourkcomputing.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@fourkcomputing.com"
              },
              "serviceType": [
                "Web Development",
                "Mobile App Development", 
                "AI Solutions",
                "Digital Transformation",
                "Custom Software Development"
              ]
            }
          })
        }}
      />

      <div className="bg-gray-100 text-gray-900 min-h-screen dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Hero Section - Main H1 for SEO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <ParticleCanvas />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <ScrollAnimator>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                We Build
                <span className="block text-blue-600 dark:text-blue-400">Digital Dreams</span>
              </h1>
            </ScrollAnimator>
            <ScrollAnimator className="delay-300">
              <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transform your ideas into powerful digital solutions with our expert team of developers, designers, and strategists. 
                <span className="block mt-2 text-base text-gray-500 dark:text-gray-400">
                  Specializing in React, Next.js, Node.js, AI integration, and enterprise software solutions.
                </span>
              </p>
            </ScrollAnimator>
            <ScrollAnimator className="delay-500">
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-3 rounded-md text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105 transform neumorphic-shadow"
                  aria-label="Explore our software development services"
                >
                  Our Services
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto px-8 py-3 rounded-md text-lg font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-transform hover:scale-105 transform neumorphic-shadow"
                  aria-label="View our software development portfolio"
                >
                  View Our Work
                </Link>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* Services Preview - H2 for SEO */}
        <section className="py-20 bg-white dark:bg-gray-900" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimator className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                What We Do - Software Development Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We offer a complete range of software development services to bring your project to life. 
                From web applications to AI-powered solutions, we deliver cutting-edge technology.
              </p>
            </ScrollAnimator>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.slice(0, 3).map((service, index) => (
                <ScrollAnimator key={service.title} className={`delay-${index * 150}`}>
                   <ServiceCard service={service} />
                </ScrollAnimator>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                aria-label="View all software development services"
              >
                View All Services
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Projects - H2 for SEO */}
        <section className="py-20 bg-gray-100 dark:bg-gray-900" id="portfolio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimator className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Recent Software Development Projects
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                A glimpse into our portfolio of successful software development collaborations. 
                See how we've helped businesses transform their digital presence.
              </p>
            </ScrollAnimator>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.slice(0, 3).map((project) => (
                <ScrollAnimator key={project.title}>
                  <ProjectCard project={project} />
                </ScrollAnimator>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/work"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                aria-label="View complete software development portfolio"
              >
                View Full Portfolio
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section - H2 for SEO */}
        <section className="py-20 bg-white dark:bg-gray-900" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimator className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                What Our Software Development Clients Say
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Real stories from businesses we've helped succeed with custom software solutions. 
                Our clients trust us to deliver exceptional results.
              </p>
            </ScrollAnimator>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <ScrollAnimator key={testimonial.name}>
                  <TestimonialCard testimonial={testimonial} />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Us Summary - H2 for SEO */}
         <section className="py-20 bg-gray-100 dark:bg-gray-900" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <ScrollAnimator>
                  <img 
                    src="https://picsum.photos/seed/aboutus/800/600" 
                    alt="FourkComputing software development team working on innovative projects" 
                    className="rounded-xl neumorphic-shadow"
                    loading="lazy"
                  />
                </ScrollAnimator>
                <ScrollAnimator className="mt-10 lg:mt-0">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                      Who We Are - Software Development Experts
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        We are a passionate team of software developers, designers, and strategists dedicated to building world-class digital products. 
                        Our collaborative approach ensures that we deliver solutions that are not only technologically sound but also perfectly aligned with your business objectives.
                    </p>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        With expertise in modern technologies like React, Next.js, Node.js, and AI integration, 
                        we help businesses stay ahead of the competition through innovative software solutions.
                    </p>
                    <Link 
                      href="/about" 
                      className="mt-6 inline-block px-6 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105 transform neumorphic-shadow"
                      aria-label="Learn more about FourkComputing software development team"
                    >
                        Learn More About Us
                    </Link>
                </ScrollAnimator>
              </div>
            </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
};

export default HomePage;
