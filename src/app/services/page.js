'use client';

import { SERVICES, PROCESS_STEPS } from '@/constants';
import CTA from '@/components/CTA';
import ScrollAnimator from '@/components/ScrollAnimator';

const ServicesPage = () => {
  return (
    <div className="pt-24 sm:pt-32 bg-white dark:bg-gray-900">
      {/* Page Header */}
      <ScrollAnimator className="text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          From concept to launch, we provide the expertise to build outstanding digital products.
        </p>
      </ScrollAnimator>

      {/* Services List */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {SERVICES.map((service, index) => (
            <ScrollAnimator key={service.title}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                <div className="md:w-1/2 flex justify-center p-8 bg-gray-100 dark:bg-gray-800 rounded-xl neumorphic-shadow-inset">
                  <div className="text-blue-500">{service.icon}</div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{service.details}</p>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
      
      {/* Our Process Section */}
      <section className="mt-24 py-20 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimator className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Process</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">A streamlined workflow for guaranteed success.</p>
            </ScrollAnimator>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                  <ScrollAnimator key={step.title} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl neumorphic-shadow">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mx-auto mb-6 neumorphic-shadow-inset">
                          {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{step.description}</p>
                  </ScrollAnimator>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default ServicesPage;
