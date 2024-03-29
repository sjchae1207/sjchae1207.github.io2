module.exports = {
  title: `seokjoo_`,
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
      description: ['Adventurous', 'Actively working', 'Cooperative'],
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
    intros : [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        
        description_before_link: '',
        description_after_link: '',
        link: '',
        linkText: '',
        
      },
      // ========================================================
      // ========================================================
      {
        description_before_link: 'I am a graduate student in the Department of Mathematical Sciences at the Korea Advanced Institute of Science and Technology (KAIST).  I am interested in mathematical modeling of circadian clocks, immunotherapy, and causality detection in biological systems.',
      },
      {
        description_before_link: 'My supervisor is', 
        description_after_link: 'in KAIST and IBS Biomedical Mathematics group.',
        link: 'https://mathsci.kaist.ac.kr/~jaekkim',
        linkText: 'Jae Kyoung Kim',
      },
      {
        description_before_link: 'Please find my CV',
        description_after_link: '',
        link: 'https://drive.google.com/file/d/115e1vD9zNMvxMVAyUhPqPOkb-SxiLDiE/view?usp=sharing',
        linkText: 'here.',
      },

      // {
      //   description: 'asdfasdfasd22222fasdfsadfdfdfdf',
      // }
    ],
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
        date: '2017.03 ~ 2024.02',
        activity: 'Ph.D Candidate in Mathematical biology, KAIST',
        // links: {
        //    post: ,
        // },
      },
      
      {
        date: '2013.03 ~ 2017.02',
        activity: 'B.Sc in Mathematical Sciences, KAIST',
      },
      
      {
        date: '2011.01 ~ 2013.02',
        activity: 'Hansung Science high school',
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
      {
        title: 'Optimizing Immunotherapy strategy against tumor using NK cells',
        description: 'Collaborative study with biologists in KRIBB to understand NK killing mechanism and improve tumor killing capacity',
        techStack: ['Data Analysis', 'MATLAB','R'],
        // thumbnailUrl: '',
        // links: {
        //   post: 'https://www.biorxiv.org/content/10.1101/2022.10.27.513792v2',
        //   github: 'https://github.com/Mathbiomed/Collective_phospho_circadian',

        // },
      },
      {
        title: 'Detecting causality from biological time sereis',
        description: 'Studied how spatially coordinated collective phosphorylation filters spatiotemporal noises for precise circadian timekeeping',
        techStack: ['MATLAB','R'],
        // thumbnailUrl: '',
        // links: {
        //   post: 'https://www.biorxiv.org/content/10.1101/2022.10.27.513792v2',
        //   github: 'https://github.com/Mathbiomed/Collective_phospho_circadian',

        // },
      },
      
    ],
    publications: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        date: '2023',
        title: 'Spatially coordinated collective phosphorylation filters spatiotemporal noises for precise circadian timekeeping',
        authors: 'Seok Joo Chae, Dae Wook Kim, Seunggyu Lee, and Jae Kyoung Kim',
        techStack: ['MATLAB', 'Netlogo'],
        thumbnailUrl: '',
        links: {
          post: 'https://www.cell.com/iscience/fulltext/S2589-0042(23)00631-4',
          github: '',
        },
      },
    
    ],
  },
};
