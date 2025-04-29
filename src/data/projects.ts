export const projects = [
  {
    id: 1,
    title: "AI-Powered Health Tracker",
    description: "A comprehensive health monitoring app with AI-driven insights and personalized recommendations.",
    longDescription: "This health tracking application leverages artificial intelligence to provide users with deep insights into their health patterns. The app collects data through various inputs and wearable device integrations, then applies machine learning algorithms to detect patterns and offer personalized health recommendations.",
    category: ["mobile", "ai"],
    technologies: ["React Native", "TensorFlow", "Node.js", "MongoDB"],
    features: [
      "Real-time health data visualization",
      "Personalized AI recommendations",
      "Integration with popular wearable devices",
      "Secure health data storage and sharing options",
      "Customizable health goals and tracking metrics"
    ],
    challenges: "One of the main challenges was ensuring the ML models could run efficiently on mobile devices while maintaining accuracy. We implemented a hybrid approach that uses on-device processing for immediate feedback while leveraging cloud computing for more complex analyses.",
    thumbnail: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3825572/pexels-photo-3825572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    liveUrl: "https://example.com/health-tracker",
    githubUrl: "https://github.com/example/health-tracker"
  },
  {
    id: 2,
    title: "Sustainable City Dashboard",
    description: "An urban planning tool that visualizes city data to promote sustainable development and resource management.",
    longDescription: "The Sustainable City Dashboard is a comprehensive tool designed for urban planners and city officials to make data-driven decisions about resource allocation and sustainability initiatives. It aggregates data from multiple sources including IoT sensors, public transport systems, and energy grids to provide a holistic view of city operations.",
    category: ["web", "data visualization"],
    technologies: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
    features: [
      "Real-time monitoring of key sustainability metrics",
      "Interactive maps showing resource usage across the city",
      "Predictive modeling for resource optimization",
      "Customizable dashboards for different stakeholders",
      "Automated reporting and alert systems"
    ],
    challenges: "The biggest challenge was integrating disparate data sources with varying update frequencies and formats. We developed a standardized data pipeline with robust error handling and normalization processes to ensure consistent, reliable data visualization.",
    thumbnail: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    liveUrl: "https://example.com/city-dashboard",
    githubUrl: "https://github.com/example/city-dashboard"
  },
  {
    id: 3,
    title: "Financial Management Platform",
    description: "A secure and intuitive platform for personal and business financial management with advanced analytics.",
    longDescription: "This financial management platform helps individuals and small businesses take control of their finances through intelligent automation and insightful analytics. The platform securely connects to banking APIs to aggregate financial data, categorizes transactions automatically, and provides personalized financial advice.",
    category: ["web", "fintech"],
    technologies: ["Vue.js", "TypeScript", "Express", "AWS", "Plaid API"],
    features: [
      "Automated expense categorization and tracking",
      "Customizable budgeting tools and alerts",
      "Investment portfolio analysis and recommendations",
      "Tax preparation assistance and document organization",
      "Long-term financial planning and goal setting"
    ],
    challenges: "Security and compliance were paramount for this financial application. We implemented bank-level encryption, regular security audits, and strict compliance with financial regulations while maintaining a seamless user experience.",
    thumbnail: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    liveUrl: "https://example.com/finance-platform",
    githubUrl: "https://github.com/example/finance-platform"
  },
  {
    id: 4,
    title: "Educational AR Experience",
    description: "An augmented reality application that makes learning interactive and immersive for students of all ages.",
    longDescription: "This educational AR platform transforms traditional learning materials into interactive 3D experiences. By simply pointing a mobile device at specially designed content, students can explore complex concepts through engaging visualizations and interactive simulations, making abstract ideas tangible and memorable.",
    category: ["mobile", "ar/vr"],
    technologies: ["Unity", "ARKit", "ARCore", "C#", "3D Modeling"],
    features: [
      "Interactive 3D models of scientific concepts",
      "Historical scene reconstructions and explorations",
      "Gamified learning modules with progression tracking",
      "Collaborative multiplayer learning experiences",
      "Teacher dashboard for monitoring student engagement"
    ],
    challenges: "Creating AR experiences that work consistently across different devices and environments was challenging. We developed adaptive rendering techniques and simplified models that maintain educational value while ensuring smooth performance on a wide range of devices.",
    thumbnail: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    liveUrl: "https://example.com/ar-education",
    githubUrl: "https://github.com/example/ar-education"
  },
  {
    id: 5,
    title: "E-commerce Platform Redesign",
    description: "A complete overhaul of an e-commerce platform focusing on user experience, performance, and conversion optimization.",
    longDescription: "This project involved completely redesigning an existing e-commerce platform that was struggling with poor conversion rates and customer retention. We reimagined the entire user journey from product discovery to checkout, implementing data-driven design decisions and performance optimizations that resulted in a 45% increase in conversions.",
    category: ["web", "e-commerce"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "Algolia"],
    features: [
      "Personalized product recommendations",
      "Advanced search with filters and visual product browsing",
      "Streamlined one-page checkout process",
      "Customer account and loyalty program integration",
      "Responsive design optimized for all devices"
    ],
    challenges: "The existing platform had accumulated significant technical debt and performance issues. We adopted an incremental migration strategy, allowing us to rebuild critical components while maintaining business continuity, eventually replacing the entire platform without disrupting ongoing operations.",
    thumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5076511/pexels-photo-5076511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: 6,
    title: "Community Volunteer Platform",
    description: "A platform connecting volunteers with local community projects and initiatives to drive social impact.",
    longDescription: "The Community Volunteer Platform bridges the gap between nonprofit organizations, community initiatives, and willing volunteers. The platform makes it easy to discover, sign up for, and manage volunteer opportunities while providing nonprofits with tools to effectively coordinate their volunteer workforce and measure impact.",
    category: ["web", "social impact"],
    technologies: ["Angular", "Firebase", "Google Maps API", "PWA", "Sass"],
    features: [
      "Geolocation-based volunteer opportunity discovery",
      "Skill matching between volunteers and projects",
      "Volunteer hour tracking and verification",
      "Communication tools for project coordinators",
      "Impact dashboards for organizations and volunteers"
    ],
    challenges: "Creating a platform that serves both volunteers and organizations with very different needs was complex. We conducted extensive user research with both groups and developed a flexible architecture that accommodates different user journeys while maintaining a consistent experience.",
    thumbnail: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6647175/pexels-photo-6647175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    liveUrl: "https://example.com/volunteer-platform",
    githubUrl: "https://github.com/example/volunteer-platform"
  }
];