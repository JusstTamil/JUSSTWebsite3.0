import { blogging, coding, filmEdit, forms, github, instagram, whatsapp, wordpress, youtube } from "../assets";

export const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Ventures",
    link: "/ventures",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const footerLinks = [
  {
    name: "Subscribe to our Channel",
    link: "https://www.youtube.com/@jusst1523?sub_confirmation=1",
  },
  {
    name: "Subscribe to our Blogs",
    link: "https://jusstblogs.wordpress.com",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export const footerContactLinks = [
  {
    image: instagram,
    name: "Instagram",
    link: "https://instagram.com/jusst1523?igshid=ZDdkNTZiNTM=",
  },
  {
    image: youtube,
    name: "YouTube Channel",
    link: "https://www.youtube.com/@jusst1523?sub_confirmation=1",
  },
  {
    image: github,
    name: "Projects",
    link: "https://github.com/JusstTamil/",
  },
  {
    image: wordpress,
    name: "Blogs",
    link: "https://jusstblogs.wordpress.com",
  },
  {
    image: whatsapp,
    name: "WhatsApp Channel",
    link: "https://whatsapp.com/channel/0029Vazstov6BIEdv9uB033d",
  },
  {
    image: forms,
    name: "Our Survey",
    link: "https://forms.gle/N8uzUQ3b%M93SFRw6",
  },
];

export const ventureCards = [
  {
    name: 'Our Videos',
    subline: 'YouTube',
    tagline: 'Videos explaining concepts from the tiniest particle to galaxies',
    link: 'https://www.youtube.com/@jusst1523?sub_confirmation=1',
    accent: 'red',
    logo: youtube
  },
  {
    name: 'Blogging',
    subline: 'Wordpress',
    tagline: 'Taking a deeper dive into concepts explained in Videos',
    link: 'https://jusstblogs.wordpress.com',
    accent: '#00749C',
    logo: wordpress
  },
  {
    name: 'Our Projects',
    subline: 'Github',
    tagline: 'The Projects that we have created and are working on',
    link: 'https://github.com/JusstTamil/',
    accent: 'slategray',
    logo: github
  },
]

export const glareCards = [
  {
    image: filmEdit,
    title: 'Video Content Creators'
  },
  {
    image: blogging,
    title: 'Bloggers'
  },
  {
    image: coding,
    title: 'Hobby Coders'
  }
]
