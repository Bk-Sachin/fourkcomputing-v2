import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import { LogoIcon, TwitterIcon, LinkedInIcon, GithubIcon } from './icons';

const Footer = () => {
  const socialLinks = [
    { Icon: TwitterIcon, href: '#' },
    { Icon: LinkedInIcon, href: '#' },
    { Icon: GithubIcon, href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <Link href="/" className="flex items-center gap-2 text-gray-900 dark:text-white">
              <LogoIcon />
              <span className="font-bold text-xl">FourkComputing</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              Crafting Digital Excellence
            </p>
            <div className="flex space-x-6">
              {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <span className="sr-only">Social Link</span>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link href={link.path} className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{link.name}</Link>
                    </li>
                  ))}
                   <li>
                      <Link href="/contact" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
                    </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.path} className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} FourkComputing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
