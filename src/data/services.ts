import {
  Globe, Code2, ShoppingCart, Megaphone, Palette, TrendingUp,
  // Web & App Development
  Blocks, Store, Database, Server, Atom, Smartphone, TabletSmartphone, Apple,
  // Software Development
  CodeXml, Cloud, Building2, Plug, ClipboardList, CloudCog, Network, Bot, Wrench,
  // E-commerce
  ShoppingBag, Package, Shirt, Sparkles, Tag, Users, Box, Earth,
  // Digital Marketing
  Search, MousePointerClick, Share2, BadgeDollarSign, FileText, Mail, Target, Shield,
  // Branding & UI/UX
  PenTool, Hexagon, Layout, Layers, MonitorSmartphone, GitBranch, BookOpen, RefreshCw,
  // Business Growth
  Briefcase, UserPlus, Funnel, BarChart3, Rocket, Heart, PieChart, Sprout,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  label: string;
  badge: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'web-app',
    icon: Globe,
    label: 'Web & App Development',
    badge: 'FOR BUSINESSES',
    services: [
      {
        icon: Blocks,
        title: 'WordPress Development',
        description: 'Explore our comprehensive wordpress development solutions to elevate your brand.',
        link: '/services/wordpress-development',
      },
      {
        icon: Store,
        title: 'Shopify Development',
        description: 'Explore our comprehensive shopify development solutions to elevate your brand.',
        link: '/services/shopify-development',
      },
      {
        icon: Database,
        title: 'Laravel Development',
        description: 'Explore our comprehensive laravel development solutions to elevate your brand.',
        link: '/services/laravel-development',
      },
      {
        icon: Server,
        title: 'Node.js Development',
        description: 'Explore our comprehensive node.js development solutions to elevate your brand.',
        link: '/services/nodejs-development',
      },
      {
        icon: Atom,
        title: 'React.js Development',
        description: 'Explore our comprehensive react.js development solutions to elevate your brand.',
        link: '/services/reactjs-development',
      },
      {
        icon: Smartphone,
        title: 'Flutter App Development',
        description: 'Explore our comprehensive flutter app development solutions to elevate your brand.',
        link: '/services/flutter-app-development',
      },
      {
        icon: TabletSmartphone,
        title: 'Android App Development',
        description: 'Explore our comprehensive android app development solutions to elevate your brand.',
        link: '/services/android-app-development',
      },
      {
        icon: Apple,
        title: 'iOS App Development',
        description: 'Explore our comprehensive ios app development solutions to elevate your brand.',
        link: '/services/ios-app-development',
      },
    ],
  },
  {
    id: 'software',
    icon: Code2,
    label: 'Software Development',
    badge: 'CUSTOM SOLUTIONS',
    services: [
      {
        icon: CodeXml,
        title: 'Custom Software Development',
        description: 'Explore our comprehensive custom software development solutions to elevate your brand.',
        link: '/services/custom-software-development',
      },
      {
        icon: Cloud,
        title: 'SaaS Application Development',
        description: 'Explore our comprehensive saas application development solutions to elevate your brand.',
        link: '/services/saas-application-development',
      },
      {
        icon: Building2,
        title: 'Enterprise Software Solutions',
        description: 'Explore our comprehensive enterprise software solutions to elevate your brand.',
        link: '/services/enterprise-software-solutions',
      },
      {
        icon: Plug,
        title: 'API Development & Integration',
        description: 'Explore our comprehensive api development & integration solutions to elevate your brand.',
        link: '/services/api-development-integration',
      },
      {
        icon: ClipboardList,
        title: 'CRM & ERP Development',
        description: 'Explore our comprehensive crm & erp development solutions to elevate your brand.',
        link: '/services/crm-erp-development',
      },
      {
        icon: CloudCog,
        title: 'Cloud Application Development',
        description: 'Explore our comprehensive cloud application development solutions to elevate your brand.',
        link: '/services/cloud-application-development',
      },
      {
        icon: Network,
        title: 'Microservices Architecture',
        description: 'Explore our comprehensive microservices architecture solutions to elevate your brand.',
        link: '/services/microservices-architecture',
      },
      {
        icon: Bot,
        title: 'AI & Automation Solutions',
        description: 'Explore our comprehensive ai & automation solutions to elevate your brand.',
        link: '/services/ai-automation-solutions',
      },
      {
        icon: Wrench,
        title: 'Maintenance & Support',
        description: 'Explore our comprehensive maintenance & support solutions to elevate your brand.',
        link: '/services/maintenance-support',
      },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    label: 'E-commerce Solutions',
    badge: 'ONLINE SELLERS',
    services: [
      {
        icon: ShoppingBag,
        title: 'Amazon Marketplace Management',
        description: 'Explore our comprehensive amazon marketplace management solutions to elevate your brand.',
        link: '/services/amazon-marketplace-management',
      },
      {
        icon: Package,
        title: 'Flipkart Marketplace Management',
        description: 'Explore our comprehensive flipkart marketplace management solutions to elevate your brand.',
        link: '/services/flipkart-marketplace-management',
      },
      {
        icon: Shirt,
        title: 'Myntra & Ajio Management',
        description: 'Explore our comprehensive myntra & ajio management solutions to elevate your brand.',
        link: '/services/myntra-ajio-management',
      },
      {
        icon: Sparkles,
        title: 'Nykaa & Beauty Marketplace',
        description: 'Explore our comprehensive nykaa & beauty marketplace solutions to elevate your brand.',
        link: '/services/nykaa-marketplace-management',
      },
      {
        icon: Tag,
        title: 'Tata CLiQ Marketplace',
        description: 'Explore our comprehensive tata cliq marketplace solutions to elevate your brand.',
        link: '/services/tata-cliq-marketplace',
      },
      {
        icon: Users,
        title: 'Meesho & Reseller Platforms',
        description: 'Explore our comprehensive meesho & reseller platforms solutions to elevate your brand.',
        link: '/services/meesho-reseller-platforms',
      },
      {
        icon: Box,
        title: 'Snapdeal Marketplace',
        description: 'Explore our comprehensive snapdeal marketplace solutions to elevate your brand.',
        link: '/services/snapdeal-marketplace',
      },
      {
        icon: Earth,
        title: 'International Marketplaces',
        description: 'Explore our comprehensive international marketplaces solutions to elevate your brand.',
        link: '/services/international-marketplaces',
      },
    ],
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    label: 'Digital Marketing',
    badge: 'GROWTH FOCUSED',
    services: [
      {
        icon: Search,
        title: 'Search Engine Optimization (SEO)',
        description: 'Explore our comprehensive search engine optimization (seo) solutions to elevate your brand.',
        link: '/services/seo-services',
      },
      {
        icon: MousePointerClick,
        title: 'Google Ads (PPC Advertising)',
        description: 'Explore our comprehensive google ads (ppc advertising) solutions to elevate your brand.',
        link: '/services/google-ads-ppc',
      },
      {
        icon: Share2,
        title: 'Social Media Marketing',
        description: 'Explore our comprehensive social media marketing solutions to elevate your brand.',
        link: '/services/social-media-marketing',
      },
      {
        icon: BadgeDollarSign,
        title: 'Social Media Ads',
        description: 'Explore our comprehensive social media ads solutions to elevate your brand.',
        link: '/services/social-media-ads',
      },
      {
        icon: FileText,
        title: 'Content Marketing',
        description: 'Explore our comprehensive content marketing solutions to elevate your brand.',
        link: '/services/content-marketing',
      },
      {
        icon: Mail,
        title: 'Email Marketing',
        description: 'Explore our comprehensive email marketing solutions to elevate your brand.',
        link: '/services/email-marketing',
      },
      {
        icon: Target,
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Explore our comprehensive conversion rate optimization (cro) solutions to elevate your brand.',
        link: '/services/conversion-rate-optimization',
      },
      {
        icon: Shield,
        title: 'Online Reputation Management (ORM)',
        description: 'Explore our comprehensive online reputation management (orm) solutions to elevate your brand.',
        link: '/services/online-reputation-management',
      },
    ],
  },
  {
    id: 'branding',
    icon: Palette,
    label: 'Branding & UI/UX',
    badge: 'CREATIVE DESIGN',
    services: [
      {
        icon: PenTool,
        title: 'Brand Identity Design',
        description: 'Explore our comprehensive brand identity design solutions to elevate your brand.',
        link: '/services/brand-identity-design',
      },
      {
        icon: Hexagon,
        title: 'Logo Design',
        description: 'Explore our comprehensive logo design solutions to elevate your brand.',
        link: '/services/logo-design',
      },
      {
        icon: Layout,
        title: 'UI/UX Design (Figma)',
        description: 'Explore our comprehensive ui/ux design (figma) solutions to elevate your brand.',
        link: '/services/ui-ux-design',
      },
      {
        icon: MonitorSmartphone,
        title: 'Website UI/UX Design',
        description: 'Explore our comprehensive website ui/ux design solutions to elevate your brand.',
        link: '/services/website-ui-ux-design',
      },
      {
        icon: Layers,
        title: 'Mobile App UI/UX Design',
        description: 'Explore our comprehensive mobile app ui/ux design solutions to elevate your brand.',
        link: '/services/mobile-app-ui-ux-design',
      },
      {
        icon: GitBranch,
        title: 'Wireframing & Prototyping',
        description: 'Explore our comprehensive wireframing & prototyping solutions to elevate your brand.',
        link: '/services/wireframing-prototyping',
      },
      {
        icon: BookOpen,
        title: 'Brand Guidelines',
        description: 'Explore our comprehensive brand guidelines solutions to elevate your brand.',
        link: '/services/brand-guidelines',
      },
      {
        icon: RefreshCw,
        title: 'Rebranding Services',
        description: 'Explore our comprehensive rebranding services solutions to elevate your brand.',
        link: '/services/rebranding-evolution',
      },
    ],
  },
  {
    id: 'business-growth',
    icon: TrendingUp,
    label: 'Business Growth',
    badge: 'SCALING BUSINESS',
    services: [
      {
        icon: Briefcase,
        title: 'Business Strategy & Consulting',
        description: 'Explore our comprehensive business strategy & consulting solutions to elevate your brand.',
        link: '/services/business-strategy-consulting',
      },
      {
        icon: UserPlus,
        title: 'Lead Generation Services',
        description: 'Explore our comprehensive lead generation services solutions to elevate your brand.',
        link: '/services/lead-generation-services',
      },
      {
        icon: Funnel,
        title: 'Sales Funnel Optimization',
        description: 'Explore our comprehensive sales funnel optimization solutions to elevate your brand.',
        link: '/services/sales-funnel-optimization',
      },
      {
        icon: BarChart3,
        title: 'Marketplace Growth Strategy',
        description: 'Explore our comprehensive marketplace growth strategy solutions to elevate your brand.',
        link: '/services/marketplace-growth-strategy',
      },
      {
        icon: Rocket,
        title: 'Performance Marketing',
        description: 'Explore our comprehensive performance marketing solutions to elevate your brand.',
        link: '/services/performance-marketing',
      },
      {
        icon: Heart,
        title: 'Customer Retention Strategy',
        description: 'Explore our comprehensive customer retention strategy solutions to elevate your brand.',
        link: '/services/customer-retention-strategy',
      },
      {
        icon: PieChart,
        title: 'Analytics & Reporting',
        description: 'Explore our comprehensive analytics & reporting solutions to elevate your brand.',
        link: '/services/analytics-reporting',
      },
      {
        icon: Sprout,
        title: 'Startup Growth Support',
        description: 'Explore our comprehensive startup growth support solutions to elevate your brand.',
        link: '/services/startup-growth-support',
      },
    ],
  },
];
