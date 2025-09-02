'use client';

import Image from 'next/image';
// import { TEAM_MEMBERS } from '@/constants';
// import TeamMemberCard from '@/components/TeamMemberCard';
import CTA from '@/components/CTA';
import ScrollAnimator from '@/components/ScrollAnimator';

const AboutPage = () => {
  return (
    <div className="pt-24 sm:pt-32 bg-white dark:bg-gray-900">
      {/* Page Header */}
      <ScrollAnimator className="text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">About FourkComputing</h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          We are more than just a software agency. We are your partners in innovation, committed to building the future of technology, one line of code at a time.
        </p>
      </ScrollAnimator>

      {/* About Section */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <ScrollAnimator className="relative">
                <Image src="/about/who-we-are.PNG" alt="Office environment" className="rounded-xl neumorphic-shadow w-full" width={800} height={600} />
            </ScrollAnimator>
            <ScrollAnimator className="mt-10 lg:mt-0">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Our mission is to empower businesses with transformative technology. We believe in the power of well-crafted software to solve complex problems, create new opportunities, and make a meaningful impact. We are driven by a passion for quality and a relentless pursuit of excellence in everything we do.
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Founded on the principles of integrity, collaboration, and innovation, FourkComputing has grown into a trusted partner for businesses ranging from startups to Fortune 500 companies. Our culture fosters creativity and encourages our team to push the boundaries of what&apos;s possible.
                </p>
            </ScrollAnimator>
        </div>
      </div>
      
      {/* Team Section */}
      {/* <section className="mt-24 py-20 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimator className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Meet the Team</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">The brilliant minds behind our success.</p>
            </ScrollAnimator>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM_MEMBERS.map((member) => (
                  <ScrollAnimator key={member.name}>
                      <TeamMemberCard member={member} />
                  </ScrollAnimator>
              ))}
            </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default AboutPage;
