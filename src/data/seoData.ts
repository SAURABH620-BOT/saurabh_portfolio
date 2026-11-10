export interface SEOConfig {
  siteUrl: string;
  baseUrl: string;
  siteName: string;
  title: string;
  description: string;
  author: string;
  email: string;
  telephone: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  keywords: string[];
  ogImage: string;
  ogImageAlt: string;
  themeColor: string;
  socialLinks: {
    linkedin: string;
    github: string;
    whatsapp: string;
  };
}

export const seoConfig: SEOConfig = {
  siteUrl: 'https://saurabh620-bot.github.io/saurabh_portfolio',
  baseUrl: 'https://saurabh620-bot.github.io',
  siteName: 'Saurabh Kumar Executive Portfolio',
  title: 'Saurabh Kumar | Founder & CEO, Tech Bihar Innovations | Senior Java & Angular Architect',
  description: 'Executive Portfolio of Saurabh Kumar — Founder & CEO at Tech Bihar Innovations, Senior Java Full Stack Developer & Angular Architect specializing in enterprise microservices, Spring Boot, and high-scale Angular systems.',
  author: 'Saurabh Kumar',
  email: 'saurabh.techbiharinnovations@gmail.com',
  telephone: '+916200043032',
  location: {
    city: 'Patna',
    state: 'Bihar',
    country: 'India',
  },
  keywords: [
    'Saurabh Kumar',
    'Tech Bihar Innovations',
    'Senior Java Full Stack Developer',
    'Angular Architect',
    'Java 17 Developer',
    'Java 21 LTS',
    'Spring Boot Microservices',
    'React Developer Portfolio',
    'TypeScript Developer',
    'Full Stack Engineer Bihar',
    'Enterprise Software Architect',
    'Patna Software Engineer'
  ],
  ogImage: '/image/profile_image.jpeg',
  ogImageAlt: 'Saurabh Kumar - Founder & CEO at Tech Bihar Innovations, Senior Java Full Stack Developer & Angular Architect',
  themeColor: '#070a13',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/saurabh-kumar-305b18343/',
    github: 'https://github.com/SAURABH620-BOT',
    whatsapp: 'https://wa.me/916200043032',
  },
};

