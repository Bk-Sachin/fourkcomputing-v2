import { WebIcon, MobileIcon, SoftwareIcon, DiscoveryIcon, DesignIcon, DevelopmentIcon, DeploymentIcon } from './components/icons';

export const NAV_LINKS = [
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/work' },
  { name: 'About Us', path: '/about' },
];

export const SERVICES = [
  {
    icon: <WebIcon />,
    title: 'Web Applications',
    description: 'Cutting-edge web solutions that are fast, scalable, and secure.',
    details: 'We build dynamic, responsive web applications tailored to your business needs. From complex enterprise platforms to sleek marketing sites, our solutions are built on modern frameworks like React, Vue, and Node.js, ensuring performance, scalability, and an exceptional user experience across all devices.'
  },
  {
    icon: <MobileIcon />,
    title: 'Mobile Apps',
    description: 'Intuitive and powerful mobile experiences for iOS and Android.',
    details: 'Our team crafts beautiful and performant native and cross-platform mobile apps. We handle the entire lifecycle, from UI/UX design to development on Swift, Kotlin, and React Native, followed by submission to the App Store and Google Play, ensuring your app reaches its target audience.'
  },
  {
    icon: <SoftwareIcon />,
    title: 'Custom Software',
    description: 'Bespoke software solutions designed to solve unique business challenges.',
    details: 'When off-the-shelf software doesn\'t fit, we build custom solutions from the ground up. We specialize in creating robust backend systems, APIs, and data-driven applications that streamline operations, enhance productivity, and provide a competitive edge in your industry.'
  },
];

export const PROCESS_STEPS = [
  { icon: <DiscoveryIcon />, title: 'Discovery', description: 'We start by understanding your vision, goals, and target audience to lay a solid foundation.' },
  { icon: <DesignIcon />, title: 'Design', description: 'Our team creates intuitive UI/UX designs and prototypes for a seamless user experience.' },
  { icon: <DevelopmentIcon />, title: 'Development', description: 'Using agile methodologies, we build, test, and iterate on your product with clean, scalable code.' },
  { icon: <DeploymentIcon />, title: 'Deployment', description: 'We handle the launch process, deploying your application to the cloud and ensuring a smooth rollout.' },
];

export const PROJECTS = [
  {
    image: 'https://picsum.photos/seed/project1/600/400',
    title: 'Fintech Dashboard',
    description: 'A comprehensive analytics dashboard for a leading financial services company.',
    tech: ['React', 'TypeScript', 'D3.js', 'Node.js']
  },
  {
    image: 'https://picsum.photos/seed/project2/600/400',
    title: 'E-commerce Platform',
    description: 'A scalable online marketplace for artisanal goods with integrated payments.',
    tech: ['Vue.js', 'Stripe', 'Firebase', 'Tailwind CSS']
  },
  {
    image: 'https://picsum.photos/seed/project3/600/400',
    title: 'Health & Wellness App',
    description: 'A cross-platform mobile app for tracking fitness and nutrition goals.',
    tech: ['React Native', 'GraphQL', 'PostgreSQL']
  },
  {
    image: 'https://picsum.photos/seed/project4/600/400',
    title: 'SaaS Collaboration Tool',
    description: 'A real-time project management tool for creative agencies.',
    tech: ['SvelteKit', 'WebSockets', 'MongoDB']
  },
  {
    image: 'https://picsum.photos/seed/project5/600/400',
    title: 'AI-Powered Chatbot',
    description: 'An intelligent customer service chatbot for an enterprise client.',
    tech: ['Python', 'Rasa', 'Docker', 'Kubernetes']
  },
  {
    image: 'https://picsum.photos/seed/project6/600/400',
    title: 'IoT Home Automation',
    description: 'A system for controlling and monitoring smart home devices.',
    tech: ['Go', 'MQTT', 'InfluxDB', 'Grafana']
  },
];

export const TEAM_MEMBERS = [
  {
    photo: 'https://picsum.photos/seed/team1/400/400',
    name: 'Alex Johnson',
    title: 'Founder & CEO'
  },
  {
    photo: 'https://picsum.photos/seed/team2/400/400',
    name: 'Maria Garcia',
    title: 'Lead Designer'
  },
  {
    photo: 'https://picsum.photos/seed/team3/400/400',
    name: 'David Chen',
    title: 'Principal Engineer'
  },
  {
    photo: 'https://picsum.photos/seed/team4/400/400',
    name: 'Priya Patel',
    title: 'Project Manager'
  },
];

export const TESTIMONIALS = [
  {
    quote: "Working with FourkComputing was a game-changer for our business. Their team delivered a flawless product ahead of schedule and exceeded all our expectations.",
    photo: 'https://picsum.photos/seed/client1/100/100',
    name: 'Sarah Jennings',
    company: 'CEO, Innovate Inc.'
  },
  {
    quote: "The level of professionalism and technical expertise at FourkComputing is unmatched. They transformed our complex vision into a user-friendly and powerful application.",
    photo: 'https://picsum.photos/seed/client2/100/100',
    name: 'Michael Chen',
    company: 'CTO, Tech Solutions'
  },
  {
    quote: "From the initial consultation to the final deployment, the communication was excellent. They truly understood our needs and built a solution that has significantly improved our workflow.",
    photo: 'https://picsum.photos/seed/client3/100/100',
    name: 'Emily Rodriguez',
    company: 'Founder, Creative Co.'
  },
];
