module.exports = {
  title: `Seokjoo Chae`,
  description: `Seokjoo's Personal blog`,
  language: `en`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://sjchae1207.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `sjchae1207/sjchae1207.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-X870KR7DCD', // Google Analytics Tracking ID
  author: {
    name: `Seokjoo Chae`,
    bio: {
      role: `Mathematician`,
      description: ['Curious', 'Actively working', 'Cooperative'],
      thumbnail: 'sjsj.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/sjchae1207`,
      linkedIn: `https://www.linkedin.com/in/seokjoo-chae-b2b085124`,
      email: `sjchea@kaist.ac.kr`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2011.01~2013.02',
        activity: 'Hansung Science high school',
      },
      {
        date: '2013.03 ~ 2017.02',
        activity: 'B.Sc in Mathematical Sciences, KAIST',
      },

      {
        date: '2017.03~',
        activity: 'Ph.D (on going) in Mathematical biology, KAIST',
        links: {
          post: '/how-to-algo',
        },
      },
 
 
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Modeling spatiotemporal heterogeneity and its filtering in the circadian clocks',
        description: 'Studied how spatially coordinated collective phosphorylation filters spatiotemporal noises for precise circadian timekeeping',
        techStack: ['MATLAB', 'Netlogo'],
        thumbnailUrl: '',
        links: {
          post: 'https://www.biorxiv.org/content/10.1101/2022.10.27.513792v2',
          github: 'https://github.com/Mathbiomed/Collective_phospho_circadian',

        },
      },
    ],
  },
};
