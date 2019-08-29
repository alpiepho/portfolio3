module.exports = {
  siteTitle: 'Hi, I\'m Al, nice to meet you!',
  siteDescription: `Project Portfolio written in React and Gatsby`,
  siteFaviocon: './images/favicon.ico',
  keyWords: ['gatsbyjs', 'react'],
  authorName: 'Al Piepho',
  twitterUsername: 'apiepho1',
  githubUsername: 'alpiepho',
  authorAvatar: './images/avatar.jpeg',
  authorDescription: [
    'I am a problem solver, looking for a position developing Software or Firmware that has an impact.',
    'With a very strong background in Embedded Systems, I contiunue to expand my skills in Python and Web development.',
    'I am a true self-starter and just love to learn new things.'
  ],
  jobs: [
    {
      company: "'Learning Sabbatical'",
      begin: {
        month: 'jun',
        year: '2019'
      },
      duration: null,
      occupation: "Web Development",
      description: "Taking time to spend with family and prepare for career pivot to Mobile and Web Application development."
  
    }, 
    {
      company: "Danaher (Hach)",
      begin: {
        month: 'dec',
        year: '2017'
      },
      duration: '1 yr & 8 mos',
      occupation: "Firmware Engineer",
      description: "Developement of firmware for water analyzers. Built full-stack prototype IOT system for industrial field controllers."
  
    }, 
    {
      company: "Broadcom",
      begin: {
        month: 'jan',
        year: '2013'
      },
      duration: '3 yr & 4 mos',
      occupation: "Firmware Engineer",
      description: "Designed and implemented very low level, efficient FW for several SERDES (serialize/deserialize) ASICs used in very high speed computer interfaces such as Ethernet, SAS/SATA.."
    }, 
    {
      company: "Schneider Electric (Pelco)",
      begin: {
        month: 'jun',
        year: '2008'
      },
      duration: '4 yr & 7 mos',
      occupation: "Software Engineer",
      description: "Embedded software for digital video cameras.  Integrated third party video analytics SW into existing digital video camera. Developed embedded web application for video recorder.",  
    }, 
    {
      company: "Hewlett-Packard",
      begin: {
        month: 'jan',
        year: '2003'
      },
      duration: '5+ yr',
      occupation: "Software Engineer",
      description: "Developed FW for several digital cameras. Local expert in key areas: performance and embedded code/memory usage. Reduced effective camera boot time from 5 seconds to under 1 second. Designed SW simulator for DSP image processing engine of 2 competing ASICS, allowing direct porting of key algorithms between platforms."
    },
    /* ... */
  ],
  projects: [
    {
      title: "Simple Score VB (PWA)",
      begin: {
        month: 'aug',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-vb-pwa.png",
      link: "https://github.com/alpiepho/simple-score-volleyball-pwa/",
      description: "A Gatsby-based PWA to score Volleyball with and option to send text message, using Netlify Lambda and Twilio on the backend."
    }, 
    {
      title: "20 Patterns PWA",
      begin: {
        month: 'aug',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-gitprime-patterns.png",
      link: "https://alpiepho.github.io/gitprime-patterns/",
      description: "From my first Gatsby Starter.  A review of GitPrime 20 Patterns e-book as a PWA."
    }, 
    {
      title: "Terms PWA Starter",
      begin: {
        month: 'aug',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-terms-pwa-starter.png",
      link: "https://alpiepho.github.io/terms-pwa-starter/",
      description: "My first Gatsby Starter.  A Gatsby starter for a PWA that shows a list of terms and other details about the terms."
    }, 
    {
      title: "Any Counter",
      begin: {
        month: 'aug',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-any-counter.png",
      link: "https://alpiepho.github.io/any-counter/",
      description: "Converted LeetCode algorithm into simple Progressive Web App (PWA), with perfect LightHouse scores!"

    }, 
    {
      title: "Site Evaluations",
      begin: {
        month: 'aug',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-site-eval.png",
      link: "https://alpiepho.github.io/site-evaluation-all/",
      description: "Followup on an idea to use a handful of developer tools to create complementory site evaluation reports.  Good way to learn more about various websites."

    }, 
    {
      title: "My Blog",
      begin: {
        month: 'aug',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-my-blog.png",
      link: "https://alpiepho.github.io/my-blog/",
      description: "Started a personal blog using React/Gatsby.  Original setup and deploy took about an hour!"

    }, 
    {
      title: "State of Development Force Graph - PWA",
      begin: {
        month: 'jul',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-state-pwa.png",
      link: "https://alpiepho.github.io/state-web-development-2018-2019-withD3-pwa/",
      description: "A PWA (Progressive Web App) using D3 to show data from the 'State of Javascript 2018' and 'State of CSS 2019'"

    }, 
    {
      title: "State of Development Force Graph - Static",
      begin: {
        month: 'jul',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-state-static.png",
      link: "https://alpiepho.github.io/state-web-development-2018-2019-withD3-static/",
      description: "A static page using D3 to show data from the 'State of Javascript 2018' and 'State of CSS 2019'"

    }, 
    {
      title: "Baseball Stats Gather/View",
      begin: {
        month: 'jul',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-react-stats-bsb.png",
      link: "https://alpiepho.github.io/react-stats-bsb/",
      description: "Web crawler using Puppeteer/Headless Chrome along with a React site to view stats."

    }, 
    {
      title: "Water anaylsis",
      begin: {
        month: 'tbd',
        year: '2019'
      },
      type: "work",
      image: "./images/firmware-sc200.jpeg",
      description: "Developed firmware for pending water analysis controllers and sensors."
  
    }, 
    {
      title: "VS Code Plugin",
      begin: {
        month: 'may',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-rpn-hex-vscode.png",
      link: "https://marketplace.visualstudio.com/items?itemName=thatnamegroup.rpn-hex-calc",
      description: "RPN Hex Calculator VS Code Extension (Published to Microsoft Marketplace)"

    }, 
    {
      title: "Chrome Extension",
      begin: {
        month: 'apr',
        year: '2019'
      },
      type: "personal",
      image: "./images/screenshot-rpn-hex-chrome.png",
      link: "https://chrome.google.com/webstore/detail/rpn-hex-calculator/koffmhlebmnnlgdlgfkpiglpfgjlkcmc",
      description: "RPN Hex Calculator Chrome Extension (Published to Chrome Store)"

    }, 
    {
      title: "CSS Challenge",
      begin: {
        month: 'jul',
        year: '2017'
      },
      type: "personal",
      image: "./images/screenshot-purecss.png",
      link: "https://codepen.io/collection/DYpQdK/",
      description: "CSS Challenge to create complex graphics with just HTML and CSS. Have completed all 50. So amazing what is possible with just CSS!"

    }, 
    {
      title: "SERDES products",
      begin: {
        month: 'dec',
        year: '2016'
      },
      type: "work",
      image: "./images/firmware-broadcom-sas-sata-controller.jpg",
      description: "Design, implement and debug very time and size limited firmware for several SerDes products used in high data rate serial computer interfaces."
  
    }, 
    {
      title: "Digital Video",
      begin: {
        month: 'jan',
        year: '2008'
      },
      type: 'work',
      image: "./images/firmware-pelco-sarix_1.jpg",
      description: "Developed embedded software for internet based digital security cameras including low level components."
    }
  ],
  podcasts: [
    {
      type: 'software',
      title: 'Software Engineering Daily',
      description: 'A small podcast that covers a broad range of software related subjects.',
      image: 'https://softwareengineeringdaily.com/wp-content/uploads/2015/08/sed_logo_updated.png',
      link: 'https://softwareengineeringdaily.com/category/podcast/'
    },
    {
      type: 'security',
      title: 'Cyberwire',
      description: 'Cyber sercurity news.',
      image: 'https://thecyberwire.com/images/navLogo.png',
      link: 'https://thecyberwire.com/podcasts'
    },
    {
      type: 'python',
      title: 'Python Bytes',
      description: '"Python Headlines delivered to your Earbugs". (and some decent/bad Dad jokes)',
      image: 'https://pythonbytes.fm/static/img/logo.png?cache_id=391cb49247369a67c4be78b27f2b3cd5',
      link: 'https://pythonbytes.fm/'
    },
    {
      type: 'life',
      title: 'Akimbo',
      description: 'A podcast by Seth Godin, random insights on life.',
      image: './images/akimbo.png',
      link: 'https://www.akimbo.me/'
    },
    {
      type: 'history',
      title: 'Commandline Heros',
      description: 'An original podcast about the people who transform technology from the command line up.',
      image: 'https://alpiepho.github.io/project-portfolio2/images/screenshot-commandline-heros.png',
      link: 'https://www.redhat.com/en/command-line-heroes'
    },
    {
      type: 'opinion',
      title: 'Intellegence Squared',
      description: 'Addresses a fundamental problem in America: the extreme polarization of our nation and our politics.',
      image: 'https://www.intelligencesquaredus.org/sites/default/files/iq2logo.png',
      link: 'https://www.intelligencesquaredus.org/podcasts?gclid=Cj0KCQiAhKviBRCNARIsAAGZ7CeomoQ8Vmn5exl03jzlhBEMGMy9TRPToWF5PdD8tf-8sVIGFDXY1HMaAvpNEALw_wcB'
    }
  ],
  social: {
    twitter: "https://twitter.com/apiepho1",
    linkedin: "https://www.linkedin.com/in/al-piepho-fw-sw-engineer/",
    github: "https://github.com/alpiepho",
    email: "alpiepho@gmail.com",
    resume: "./images/ResumeAlPiepho_public.pdf",
    blog: "https://alpiepho.github.io/my-blog"
  },
  siteUrl: 'https://alpiepho.github.io/project-portfolio2',
  pathPrefix: '/project-portfolio2', // Note: it must *not* have a trailing slash.
  siteCover: './images/cover2.jpg',
  googleAnalyticsId: 'UA-142308652-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Al Piepho - SW | FW | Web',
      url: '/',
    }
  ],
  footer: {
    text: 'Previous can be found at: ',
    link: 'https://alpiepho.github.io/project-portfolio1/',
    label: 'Version 1 in HTML/JS/CSS'
  }
}
