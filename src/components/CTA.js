import Link from 'next/link';

const CTA = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          <span className="block">Have a project in mind?</span>
          <span className="block text-blue-500">Let&apos;s build something great together.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
          We are always excited to hear about new ideas. Reach out to us and let&apos;s discuss how we can turn your vision into reality.
        </p>
        <Link
          href="/contact"
          className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 sm:w-auto transition-transform transform hover:scale-105 neumorphic-shadow"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default CTA;
