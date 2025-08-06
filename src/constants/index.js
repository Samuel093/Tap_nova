

const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Services', id: 'services' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Case Studies', id: 'case-studies' },
  { label: 'Footer', id: 'footer' },
];

const services = [
  {
    title: 'Custom Software',
    description: 'Tailor-made solutions designed to address your unique business challenges and requirements.',
    image: '/images/software.png',
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connect your systems with third-party services and platforms for enhanced functionality.',
    image: '/images/api.png',
  },
  {
    title: 'Mobile & Web Apps',
    description: 'Responsive, user-friendly applications that deliver exceptional experiences across all devices.',
    image: '/images/mobile.png',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure and services that grow with your business needs.',
    image: '/images/cloud.png',
  },
];

const caseStudies = [
  {
    title: 'Retail Analytics Platform',
    client: 'GlobalMart',
    description:
      'Developed a comprehensive analytics dashboard that increased sales visibility and improved inventory management efficiency by 35%.',
    tag: 'Custom Software',
    image: '/images/case1.png',
  },
  {
    title: 'Healthcare Patient Portal',
    client: 'MediCorp Systems',
    description:
      'Created a secure patient portal that streamlined appointment scheduling and reduced administrative workload by 45%.',
    tag: 'Mobile & Web Apps',
    image: '/images/case2.png',
  },
  {
    title: 'Financial Services API',
    client: 'NextGen Banking',
    description:
      'Integrated multiple financial systems through a unified API layer, reducing transaction processing time from days to minutes.',
    tag: 'API Integration',
    image: '/images/case3.png',
  },
];

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, TechCorp',
    feedback: 'TapNova transformed our vision into a digital reality beyond expectations.',
    image: '/images/client1.png',
  },
  {
    name: 'John Smith',
    role: 'Founder, Creatives Inc.',
    feedback: 'Their attention to detail and creativity brought our brand to life online.',
    image: '/images/client2.png',
  },
  {
    name: 'Sarah Lee',
    role: 'CMO, FutureSoft',
    feedback: 'Professional, fast, and genuinely invested in our success.',
    image: '/images/client3.png',
  },
];

 const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  


export { services, testimonials,navLinks, caseStudies, logoIconsList };
