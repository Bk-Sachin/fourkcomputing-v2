'use client';

import { PROJECTS } from '@/constants';
import ProjectCard from '@/components/ProjectCard';
import CTA from '@/components/CTA';
import ScrollAnimator from '@/components/ScrollAnimator';

const WorkPage = () => {
  return (
    <div className="pt-24 sm:pt-32 bg-white dark:bg-gray-900">
      {/* Page Header */}
      <ScrollAnimator className="text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">Our Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          We take pride in our work. Explore a selection of our finest projects.
        </p>
      </ScrollAnimator>

      {/* Projects Grid */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ScrollAnimator key={index}>
              <ProjectCard project={project} />
            </ScrollAnimator>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-24">
        <CTA />
      </div>
    </div>
  );
};

export default WorkPage;
