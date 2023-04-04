import {
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPython,
  FaSass,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiSelenium,
  SiDjango,
  SiFastapi,
  SiJavascript,
  SiRedux,
  SiJest,
  SiJsonwebtokens,
  SiAuth0,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiJirasoftware,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiAmazonaws,
  SiPostman,
  SiGithub,
} from "react-icons/si";

import { MdOutlineDevices, MdHttp } from "react-icons/md";

import { BsGit } from "react-icons/bs";

import { GrMysql } from "react-icons/gr";

import { HiCommandLine } from "react-icons/hi2";

const icon_class = "stack__icon";

const allTechnologies = [
  {
    id: 1,
    name: "Bootstrap",
    icon: <FaBootstrap className={icon_class} />,
  },
  {
    id: 2,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className={icon_class} />,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <SiTypescript className={icon_class} />,
  },
  { id: 4, name: "React", icon: <FaReact className={icon_class} /> },
  {
    id: 5,
    name: "Node.js",
    icon: <FaNodeJs className={icon_class} />,
  },
  {
    id: 6,
    name: "Express.js",
    icon: <SiExpress className={icon_class} />,
  },
  {
    id: 7,
    name: "MySQL",
    icon: <GrMysql className={icon_class} />,
  },
  {
    id: 8,
    name: "MongoDB",
    icon: <SiMongodb className={icon_class} />,
  },
  {
    id: 9,
    name: "Python",
    icon: <FaPython className={icon_class} />,
  },
  {
    id: 10,
    name: "Selenium",
    icon: <SiSelenium className={icon_class} />,
  },
  {
    id: 11,
    name: "Django",
    icon: <SiDjango className={icon_class} />,
  },
  {
    id: 12,
    name: "FastAPI",
    icon: <SiFastapi className={icon_class} />,
  },
  {
    id: 13,
    name: "JavaScript",
    icon: <SiJavascript className={icon_class} />,
  },
  {
    id: 14,
    name: "Redux",
    icon: <SiRedux className={icon_class} />,
  },
  {
    id: 15,
    name: "Jest",
    icon: <SiJest className={icon_class} />,
  },
  {
    id: 16,
    name: "Sass",
    icon: <FaSass className={icon_class} />,
  },
  {
    id: 17,
    name: "JWT",
    icon: <SiJsonwebtokens className={icon_class} />,
  },
  {
    id: 18,
    name: "Auth0",
    icon: <SiAuth0 className={icon_class} />,
  },
  {
    id: 19,
    name: "HTML5",
    icon: <SiHtml5 className={icon_class} />,
  },
  {
    id: 20,
    name: "CSS3",
    icon: <SiCss3 className={icon_class} />,
  },
  {
    id: 21,
    name: "Responsive Design",
    icon: <MdOutlineDevices className={icon_class} />,
  },
  {
    id: 22,
    name: "Git",
    icon: <BsGit className={icon_class} />,
  },
  {
    id: 23,
    name: "Next.js",
    icon: <SiNextdotjs className={icon_class} />,
  },
  {
    id: 24,
    name: "Jira",
    icon: <SiJirasoftware className={icon_class} />,
  },
  {
    id: 25,
    name: "Command Line",
    icon: <HiCommandLine className={icon_class} />,
  },
  {
    id: 26,
    name: "REST API",
    icon: <MdHttp className={icon_class} />,
  },
  {
    id: 27,
    name: "PostgreSQL",
    icon: <SiPostgresql className={icon_class} />,
  },
  {
    id: 28,
    name: "Supabase",
    icon: <SiSupabase className={icon_class} />,
  },
  {
    id: 29,
    name: "Docker",
    icon: <SiDocker className={icon_class} />,
  },
  {
    id: 30,
    name: "AWS",
    icon: <SiAmazonaws className={icon_class} />,
  },
  {
    id: 31,
    name: "Postman",
    icon: <SiPostman className={icon_class} />,
  },
  {
    id: 32,
    name: "Github",
    icon: <SiGithub className={icon_class} />,
  },
];
export default allTechnologies;
