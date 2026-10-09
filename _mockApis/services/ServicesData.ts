import mock from '../mockAdapter';
import type { ServiceType } from '@/types/services/ServiceTypes';

const ServicesData: ServiceType[] = [
  {
    id: 1,
    service_title: "UI/UX Design",
    service_subtitle: "Creating intuitive and engaging user experiences",
    service_icon: "mdi:palette-outline",
    service_image: "/images/projects/project1.webp",
    description: "Transform your digital products with stunning UI/UX design that captivates users and drives engagement.\n\nOur design process combines user research, wireframing, prototyping, and visual design to create seamless experiences. We focus on understanding your users' needs and behaviors to craft interfaces that are both beautiful and functional.\n\nFrom initial concept to final polish, we ensure every pixel serves a purpose and every interaction feels natural.",
    category: "Design",
    duration: "4-8 weeks",
    deliverables: "Wireframes, Prototypes, Design System, Final UI",
    price_range: "$5,000 - $15,000",
    detail_img_1: "/images/projects/details/pd-11.webp",
    detail_img_2: "/images/projects/details/pd-12.webp",
    detail_img_3: "/images/projects/details/pd-13.webp",
    features: [
      "User Research & Analysis",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Design System Creation",
      "Usability Testing"
    ],
    process_steps: [
      "Discovery & Research",
      "Strategy & Planning",
      "Design & Iterate",
      "Test & Refine"
    ]
  },
  {
    id: 2,
    service_title: "Web Development",
    service_subtitle: "Building responsive and performant web applications",
    service_icon: "mdi:code-tags",
    service_image: "/images/projects/project2.webp",
    description: "Bring your vision to life with cutting-edge web development that combines performance, scalability, and modern design.\n\nWe specialize in building fast, responsive websites and web applications using the latest technologies. Whether you need a simple landing page or a complex web application, we deliver solutions that exceed expectations.\n\nOur development process emphasizes clean code, best practices, and seamless integration with your existing systems.",
    category: "Development",
    duration: "6-12 weeks",
    deliverables: "Responsive Website, Source Code, Documentation, Deployment",
    price_range: "$8,000 - $25,000",
    detail_img_1: "/images/projects/details/pd-21.webp",
    detail_img_2: "/images/projects/details/pd-22.webp",
    detail_img_3: "/images/projects/details/pd-23.webp",
    features: [
      "Responsive Web Design",
      "Frontend Development",
      "Backend Integration",
      "API Development",
      "Performance Optimization",
      "SEO Implementation"
    ],
    process_steps: [
      "Requirements Analysis",
      "Architecture Design",
      "Development & Testing",
      "Deployment & Support"
    ]
  },
  {
    id: 3,
    service_title: "Mobile App Development",
    service_subtitle: "Native and cross-platform mobile solutions",
    service_icon: "mdi:cellphone",
    service_image: "/images/projects/project3.webp",
    description: "Reach your audience on the go with powerful mobile applications that deliver exceptional user experiences.\n\nWe develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. Our mobile apps are designed for performance, usability, and seamless integration with device features.\n\nFrom concept to app store deployment, we handle every aspect of mobile app development with expertise and attention to detail.",
    category: "Development",
    duration: "8-16 weeks",
    deliverables: "iOS/Android Apps, Source Code, App Store Submission, Documentation",
    price_range: "$15,000 - $50,000",
    detail_img_1: "/images/projects/details/pd-31.webp",
    detail_img_2: "/images/projects/details/pd-32.webp",
    detail_img_3: "/images/projects/details/pd-33.webp",
    features: [
      "Native & Cross-platform Development",
      "UI/UX Design for Mobile",
      "Push Notifications",
      "Offline Functionality",
      "App Store Optimization",
      "Maintenance & Updates"
    ],
    process_steps: [
      "Concept & Planning",
      "Design & Prototype",
      "Development & QA",
      "Launch & Monitor"
    ]
  },
  {
    id: 4,
    service_title: "Brand Identity",
    service_subtitle: "Crafting memorable brand experiences",
    service_icon: "mdi:lightbulb-outline",
    service_image: "/images/projects/project4.webp",
    description: "Build a strong brand identity that resonates with your audience and sets you apart from the competition.\n\nOur branding services encompass logo design, color palettes, typography, brand guidelines, and complete visual identity systems. We dive deep into your brand's essence to create a cohesive identity that tells your story.\n\nEvery brand element is carefully crafted to ensure consistency across all touchpoints and create lasting impressions.",
    category: "Design",
    duration: "3-6 weeks",
    deliverables: "Logo, Brand Guidelines, Visual Assets, Style Guide",
    price_range: "$3,000 - $10,000",
    detail_img_1: "/images/projects/details/pd-41.webp",
    detail_img_2: "/images/projects/details/pd-42.webp",
    detail_img_3: "/images/projects/details/pd-43.webp",
    features: [
      "Logo Design",
      "Brand Strategy",
      "Color & Typography",
      "Brand Guidelines",
      "Marketing Materials",
      "Social Media Assets"
    ],
    process_steps: [
      "Brand Discovery",
      "Concept Development",
      "Design Refinement",
      "Final Delivery"
    ]
  },
  {
    id: 5,
    service_title: "Digital Marketing",
    service_subtitle: "Growing your online presence and reach",
    service_icon: "mdi:chart-line",
    service_image: "/images/projects/project5.webp",
    description: "Amplify your brand's reach with data-driven digital marketing strategies that deliver measurable results.\n\nWe offer comprehensive digital marketing services including SEO, content marketing, social media management, and paid advertising campaigns. Our approach combines creativity with analytics to maximize your ROI.\n\nFrom strategy development to execution and optimization, we help you connect with your target audience and achieve your business goals.",
    category: "Marketing",
    duration: "Ongoing",
    deliverables: "Marketing Strategy, Content Calendar, Analytics Reports, Campaign Management",
    price_range: "$2,000 - $10,000/month",
    detail_img_1: "/images/projects/details/pd-51.webp",
    detail_img_2: "/images/projects/details/pd-52.webp",
    detail_img_3: "/images/projects/details/pd-53.webp",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management",
      "Email Marketing",
      "PPC Campaigns",
      "Analytics & Reporting"
    ],
    process_steps: [
      "Audit & Analysis",
      "Strategy Development",
      "Campaign Execution",
      "Monitor & Optimize"
    ]
  },
  {
    id: 6,
    service_title: "E-commerce Solutions",
    service_subtitle: "Complete online store development and management",
    service_icon: "mdi:shopping-outline",
    service_image: "/images/projects/snapclear.webp",
    description: "Launch and scale your online business with robust e-commerce solutions tailored to your needs.\n\nWe build custom e-commerce platforms using Shopify, WooCommerce, or custom solutions that provide seamless shopping experiences. From product catalogs to secure payment processing, we handle all aspects of your online store.\n\nOur e-commerce solutions are optimized for conversions, mobile-friendly, and designed to grow with your business.",
    category: "Development",
    duration: "8-14 weeks",
    deliverables: "Online Store, Payment Integration, Admin Panel, Product Management",
    price_range: "$10,000 - $35,000",
    detail_img_1: "/images/projects/details/pd-61.webp",
    detail_img_2: "/images/projects/details/pd-62.webp",
    detail_img_3: "/images/projects/details/pd-33.webp",
    features: [
      "Custom Store Design",
      "Payment Gateway Integration",
      "Inventory Management",
      "Shopping Cart & Checkout",
      "Order Management System",
      "Analytics & Reporting"
    ],
    process_steps: [
      "Platform Selection",
      "Store Design",
      "Development & Integration",
      "Testing & Launch"
    ]
  }
];

// Helper function to slugify service titles
const slugify = (title?: string) => {
  if (!title) return '';
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

// Mock API endpoints
mock.onGet('/api/services').reply(() => {
  return [200, ServicesData];
});

mock.onGet(new RegExp('/api/services/.*')).reply((config) => {
  const slug = config.url?.split('/').pop();
  const service = ServicesData.find(
    (s) => slugify(s.service_title) === slug
  );
  if (service) {
    return [200, service];
  }
  return [404, { message: 'Service not found' }];
});

export default ServicesData;
