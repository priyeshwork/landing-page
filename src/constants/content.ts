export const HERO_CONTENT = {
  title: {
    main: "The Uncrackable Foundation",
    highlight: "for the Digital Era"
  },
  description: "Quantum-proof, Layer 1 DLT for the next generation of digital security",
  button: {
    text: "Explore Quranium"
  }
};

export const ABOUT_CONTENT = {
  header: {
    label: "Innovation",
    title: "Future of Digital Security",
    description: "Discover how Quranium is revolutionizing blockchain technology with quantum-resistant infrastructure"
  },
  sections: [
    {
      label: "What we are",
      title: "Uncrackable Security",
      description: "In a world where no other blockchain infrastructure can truly stand against today's threats, Quranium is changing this with its truly uncrackable decentralized infrastructure."
    },
    {
      label: "Our Mission",
      title: "We are Uncrackable",
      subtitle: "Are you?",
      description: "At Quranium, Be Uncrackable isn't just a tag-line - it's our DNA. Our Layer 1 technology is built using Post Quantum Cryptography."
    },
    {
      label: "The Future",
      title: "DeQUIP",
      subtitle: "The new world",
      description: "Decentralized Quantum-Uncrackable Infrastructure Protocol – a revolutionary market category by Quranium, designed for the quantum future."
    }
  ]
};

export const ABOUT_SECTION_STYLES = {
  container: {
    section: "relative min-h-[300vh] w-full",
    sticky: "sticky top-0 h-screen w-full overflow-hidden",
    wrapper: "absolute inset-0 flex flex-col lg:flex-row"
  },
  leftSide: {
    container: "w-full lg:w-1/2 min-h-[40vh] lg:h-full relative backdrop-blur-sm",
    wrapper: "relative h-full flex flex-col items-center lg:items-start justify-center p-6 sm:p-8 lg:p-12 xl:p-24",
    content: "w-full max-w-2xl",
    label: {
      wrapper: "mb-4 flex items-center space-x-2",
      line: "h-1 w-12",
      text: "uppercase tracking-wider text-sm font-medium text-gray-200"
    },
    title: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent mb-6 text-center lg:text-left",
    description: "text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center lg:text-left text-gray-300"
  },
  rightSide: {
    container: "w-full lg:w-1/2 min-h-[60vh] lg:h-full flex items-center justify-center",
    wrapper: "relative h-full flex items-center justify-center w-full",
    blur: "absolute inset-0 backdrop-blur-sm",
    content: {
      container: "absolute w-full px-6 sm:px-8 lg:px-12 z-10",
      wrapper: "flex flex-col items-center justify-center text-center",
      card: "w-full max-w-xl space-y-4 sm:space-y-6 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10",
      label: "block uppercase tracking-wider text-sm font-medium text-gray-200",
      title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent",
      subtitle: "text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200",
      description: "text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300"
    }
  },
  gradients: {
    text: "bg-gradient-to-r from-purple-600 to-blue-500",
    background: {
      left: "bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-blue-900/70",
      right: "bg-gradient-to-bl from-purple-800/30 via-blue-900/40 to-purple-900/50",
      card: "bg-gradient-to-r from-purple-900/10 to-blue-900/10"
    }
  },
  animations: {
    mobile: {
      offset: 0.1,
      breakpoint: 1024
    },
    text1: {
      opacity: [0, 0.25, 0.35],
      scale: [1, 1, 0.8],
      y: [0, 0, 50]
    },
    text2: {
      opacity: [0.35, 0.4, 0.6, 0.65],
      scale: [0.8, 1, 1, 0.8],
      y: [-30, 0, 0, 50]
    },
    text3: {
      opacity: [0.65, 0.7, 1],
      scale: [0.8, 1, 1],
      y: [-30, 0, 0]
    }
  }
};



export const FOOTER_CONTENT = {
  brand: {
    name: "Quranium",
    description: "Building the uncrackable foundation for the digital future with quantum-resistant blockchain technology."
  },
  quickLinks: [
    { name: 'Documentation', url: '#' },
    { name: 'Whitepaper', url: '#' },
    { name: 'Security', url: '#' },
    { name: 'Community', url: '#' }
  ],
  contact: {
    email: "contact@quranium.com",
    location: "Silicon Valley, CA",
    support: "support@quranium.com"
  },
  socialLinks: [
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'LinkedIn', url: '#', icon: '𝕃𝕚' },
    { name: 'GitHub', url: '#', icon: '𝔾𝕚𝕥' },
    { name: 'Discord', url: '#', icon: '𝔻𝕚𝕤' }
  ],
  legal: {
    copyright: "2025 Quranium. All rights reserved.",
    links: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Cookie Policy', url: '#' }
    ]
  }
};
